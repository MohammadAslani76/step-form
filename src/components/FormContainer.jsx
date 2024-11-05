import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
    useTheme,
    useMediaQuery, Container
} from "@mui/material";
import {useState} from "react";
import DarkLight from "./DarkLight.jsx";
import FinishAlert from "./FinishAlert.jsx";
import {grey} from "@mui/material/colors";
import {FaAngleLeft, FaAngleRight, FaCheck} from "react-icons/fa6";
import PersonalInformation from "./tabs/PersonalInformation.jsx";
import AdditionalInformation from "./tabs/AdditionalInformation.jsx";
import CheckInformation from "./tabs/CheckInformation.jsx";
import {useFormik} from "formik";
import {formValidationSchema} from "../../utils/helper.js";

const steps = ['اطلاعات شخصی', 'اطلاعات تکمیلی', 'مشاهده اطلاعات'];

const initialFormData = {
    name: "",
    family: "",
    age: "",
    gender: "0",
    nationalCode: "",
    fatherName: "",
    phoneNumber: "",
    email: "",
    city: "",
    address: ""
}

const initialAlertData = {
    active: false,
    text: "",
    status: ""
}

const FormContainer = () => {

    const theme = useTheme();
    const smSize = useMediaQuery(theme.breakpoints.down('sm'));

    const boxStyle = {
        width: {
            xs: "100%",
            lg: "70%"
        },
        mx: "auto",
        p: 2,
        borderRadius: "5px",
        backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[200],
        boxShadow: `2px 2px 5px ${theme.palette.mode === "dark" ? "#343333" : "#858585"}`
    }

    const [activeStep, setActiveStep] = useState(0);
    const [openAlert, setOpenAlert] = useState(initialAlertData)

    const formik = useFormik({
        initialValues: initialFormData,
        onSubmit: async (values) => {
            console.log("Send data to API",values)
            // Call API and if result is true this is final result
            setOpenAlert({
                active: true,
                text: "ثبت نام با موفقیت انجام شد",
                status: "success"
            })
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        },
        validationSchema: formValidationSchema
    })

    const handleNext = () => {
        if (activeStep === 0 && (formik.values.name === "" || formik.values.family === "" || formik.values.age === "" || formik.values.age < 1 || formik.values.fatherName === "")) {
            return setOpenAlert({
                active: true,
                text: "لطفا اطلاعات را کامل و صحیح وارد نمایید",
                status: "error"
            })
        }
        if (activeStep === 1 && (formik.values.phoneNumber === "" || formik.values.city === "" || formik.values.address === "")) {
            return setOpenAlert({
                active: true,
                text: "لطفا اطلاعات را کامل و صحیح وارد نمایید",
                status: "error"
            })
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box sx={{minHeight: "100vh", backgroundColor: "background.paper", p: 2}}>
            <Container maxWidth="xl">
                <DarkLight/>
                <Box sx={boxStyle}>
                    <Stepper orientation={smSize ? "vertical" : "horizontal"} activeStep={activeStep}>
                        {steps.map((label, index) => {
                            return (
                                <Step key={index}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <>
                            <Typography textAlign="center" color="success"
                                        sx={{mt: 2, mb: 1}}>
                                ثبت نام شما با موفقیت به اتمام رسید
                            </Typography>
                        </>
                    ) : (
                        <>
                            {activeStep === 0 && <PersonalInformation formik={formik}/>}
                            {activeStep === 1 && <AdditionalInformation formik={formik}/>}
                            {activeStep === 2 && <CheckInformation formik={formik}/>}
                            <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                                <Button type="button"
                                        color="primary"
                                        disabled={activeStep === 0}
                                        startIcon={<FaAngleRight size={12}/>}
                                        onClick={handleBack}>
                                    قبلی
                                </Button>
                                <Box sx={{flex: '1 1 auto'}}/>
                                {

                                }
                                <Button endIcon={activeStep === steps.length - 1 ? <FaCheck size={12}/> :
                                    <FaAngleLeft size={12}/>}
                                        color={activeStep === steps.length - 1 ? "success" : "primary"}
                                        variant={activeStep === steps.length - 1 ? "outlined" : "text"}
                                        onClick={activeStep === steps.length - 1 ? formik.handleSubmit : handleNext}
                                        type={activeStep === steps.length - 1 ? "submit" : "button"}>
                                    {activeStep === steps.length - 1 ? 'ثبت نهایی' : 'بعدی'}
                                </Button>
                            </Box>
                        </>
                    )}
                </Box>
                <FinishAlert openAlert={openAlert} setOpenAlert={setOpenAlert}/>
            </Container>
        </Box>
    );
};

export default FormContainer;