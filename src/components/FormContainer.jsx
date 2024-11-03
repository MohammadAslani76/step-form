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
import {GrPowerReset} from "react-icons/gr";

const steps = ['اطلاعات شخصی', 'اطلاعات تکمیلی', 'مشاهده اطلاعات'];

const FormContainer = () => {

    const theme = useTheme();
    const smSize = useMediaQuery(theme.breakpoints.down('sm'));

    const boxStyle = {
        width:{
            xs: "100%",
            lg: "70%"
        },
        mx: "auto",
        p: 2,
        borderRadius : "5px",
        backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[200],
        boxShadow: `2px 2px 5px ${theme.palette.mode === "dark" ? "#343333" : "#858585"}`
    }

    const [activeStep, setActiveStep] = useState(0);
    const [openAlert,setOpenAlert] = useState(false)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === steps.length - 1){
            setOpenAlert(true)
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{minHeight: "100vh",backgroundColor: "background.paper", p:2}}>
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
                                        sx={{ mt: 2, mb: 1 }}>
                                ثبت نام شما با موفقیت به اتمام رسید
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button startIcon={<GrPowerReset />}
                                        variant="outlined"
                                        onClick={handleReset}>
                                    از ابتدا شروع کن
                                </Button>
                            </Box>
                        </>
                    ) : (
                        <>
                            {activeStep === 0 && <PersonalInformation/>}
                            {activeStep === 1 && <AdditionalInformation/>}
                            {activeStep === 2 && <CheckInformation/>}
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button
                                    color="primary"
                                    disabled={activeStep === 0}
                                    startIcon={<FaAngleRight size={12}/>}
                                    onClick={handleBack}>
                                    قبلی
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button endIcon={activeStep === steps.length - 1 ? <FaCheck size={12}/> : <FaAngleLeft size={12}/>}
                                        color={activeStep === steps.length - 1 ? "success" : "primary"}
                                        variant={activeStep === steps.length - 1 ? "outlined" : "text"}
                                        onClick={handleNext}>
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