import {Alert, Snackbar} from "@mui/material";

const FinishAlert = ({openAlert,setOpenAlert}) => {

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert({
            active: false,
            text: "",
            status: ""
        });
    };

    return (
        <Snackbar open={openAlert.active} autoHideDuration={2000}
                  onClose={handleCloseAlert}>
            <Alert
                onClose={handleCloseAlert}
                severity={openAlert.status}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {openAlert.text}
            </Alert>
        </Snackbar>
    );
};

export default FinishAlert;