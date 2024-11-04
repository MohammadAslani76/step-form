import {Box, TextField} from "@mui/material";
import Grid from "@mui/material/Grid2"

const AdditionalInformation = ({formData,setFormData}) => {
    return (
        <Box sx={{mt : 2}}>
            <Grid container spacing={2}>
                <Grid size={{xs:12, sm:6, md: 4}}>
                    <TextField fullWidth label="شماره تلفن" variant="outlined"
                               autoComplete="off" value={formData.phoneNumber} type="text"
                               onChange={(e) => setFormData({...formData,phoneNumber: e.target.value})}/>
                </Grid>
                <Grid size={{xs:12, sm:6, md: 4}}>
                    <TextField fullWidth label="ایمیل (اختیاری)" variant="outlined"
                               autoComplete="off" value={formData.email} type="email"
                               onChange={(e) => setFormData({...formData,email: e.target.value})}/>
                </Grid>
                <Grid size={{xs:12, sm:6, md: 4}}>
                    <TextField fullWidth label="شهر" variant="outlined"
                               autoComplete="off" value={formData.city} type="text"
                               onChange={(e) => setFormData({...formData,city: e.target.value})}/>
                </Grid>
            </Grid>
            <TextField fullWidth label="آدرس" variant="outlined" sx={{mt: 2}}
                       autoComplete="off" value={formData.address} type="text"
                       onChange={(e) => setFormData({...formData,address: e.target.value})}/>
        </Box>
    );
};

export default AdditionalInformation;