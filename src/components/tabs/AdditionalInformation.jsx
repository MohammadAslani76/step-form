import {Box, TextField} from "@mui/material";
import Grid from "@mui/material/Grid2"

const AdditionalInformation = ({formik}) => {
    return (
        <Box sx={{mt : 2}}>
            <Grid container spacing={2}>
                <Grid size={{xs:12, sm:6, md: 4}}>
                    <TextField fullWidth label="شماره تلفن *" variant="outlined"
                               autoComplete="off" type="text"
                               id="phoneNumber"
                               name="phoneNumber"
                               value={formik.values.phoneNumber}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                               helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}/>
                </Grid>
                <Grid size={{xs:12, sm:6, md: 4}}>
                    <TextField fullWidth label="ایمیل (اختیاری)" variant="outlined"
                               autoComplete="off" type="email"
                               id="email"
                               name="email"
                               value={formik.values.email}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               error={formik.touched.email && Boolean(formik.errors.email)}
                               helperText={formik.touched.email && formik.errors.email}/>
                </Grid>
                <Grid size={{xs:12, sm:6, md: 4}}>
                    <TextField fullWidth label="شهر *" variant="outlined"
                               autoComplete="off" type="text"
                               id="city"
                               name="city"
                               value={formik.values.city}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               error={formik.touched.city && Boolean(formik.errors.city)}
                               helperText={formik.touched.city && formik.errors.city}/>
                </Grid>
            </Grid>
            <TextField fullWidth label="آدرس *" variant="outlined" sx={{mt: 2}}
                       autoComplete="off" type="text"
                       id="address"
                       name="address"
                       value={formik.values.address}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       error={formik.touched.address && Boolean(formik.errors.address)}
                       helperText={formik.touched.address && formik.errors.address}/>
        </Box>
    );
};

export default AdditionalInformation;