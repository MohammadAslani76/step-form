import {Box, TextField} from "@mui/material";
import Grid from "@mui/material/Grid2"

const PersonalInformation = () => {
    return (
        <Box sx={{mt : 2}}>
            <Grid container spacing={2}>
                <Grid size={{xs:12, sm:6, md: 4}}>
                    <TextField fullWidth label="نام" variant="outlined"  autoComplete="off"/>
                </Grid>
                <Grid size={{xs:12, sm:6, md: 4}}>
                    <TextField fullWidth label="نام خانوادگی" variant="outlined" autoComplete="off" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default PersonalInformation;