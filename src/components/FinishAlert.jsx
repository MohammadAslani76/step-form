import {Alert, Snackbar} from "@mui/material";

const FinishAlert = ({openAlert,setOpenAlert}) => {

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    };

    return (
        <Snackbar open={openAlert} autoHideDuration={2000}
                  onClose={handleCloseAlert}>
            <Alert
                onClose={handleCloseAlert}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
            >
                ثبت نام با موفقیت انجام شد
            </Alert>
        </Snackbar>
    );
};

export default FinishAlert;