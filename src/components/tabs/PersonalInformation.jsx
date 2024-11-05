import {Box, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import Grid from "@mui/material/Grid2"

const PersonalInformation = ({formik}) => {
    return (
        <Box sx={{mt : 2}}>
            <Grid container spacing={2}>
                <Grid size={{xs:12, sm:6, md: 4}}>
                    <TextField fullWidth label="نام *" variant="outlined"
                               autoComplete="off" type="text"
                               id="name"
                               name="name"
                               value={formik.values.name}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               error={formik.touched.name && Boolean(formik.errors.name)}
                               helperText={formik.touched.name && formik.errors.name}/>
                </Grid>
                <Grid size={{xs:12, sm:6, md: 4}}>
                    <TextField fullWidth label="نام خانوادگی *" variant="outlined"
                               autoComplete="off" type="text"
                               id="family"
                               name="family"
                               value={formik.values.family}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               error={formik.touched.family && Boolean(formik.errors.family)}
                               helperText={formik.touched.family && formik.errors.family}/>
                </Grid>
                <Grid size={{xs:12, sm:6, md: 4}}>
                    <TextField fullWidth label="نام پدر *" variant="outlined"
                               autoComplete="off" type="text"
                               id="fatherName"
                               name="fatherName"
                               value={formik.values.fatherName}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               error={formik.touched.fatherName && Boolean(formik.errors.fatherName)}
                               helperText={formik.touched.fatherName && formik.errors.fatherName}/>
                </Grid>
                <Grid size={{xs:12, sm:6, md: 4}}>
                    <TextField fullWidth label="کدملی *" variant="outlined"
                               autoComplete="off" type="text"
                               id="nationalCode"
                               name="nationalCode"
                               value={formik.values.nationalCode}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               error={formik.touched.nationalCode && Boolean(formik.errors.nationalCode)}
                               helperText={formik.touched.nationalCode && formik.errors.nationalCode}/>
                </Grid>
                <Grid size={{xs:12, sm:6, md: 4}}>
                    <TextField fullWidth label="سن *" variant="outlined"
                               autoComplete="off" type="number"
                               id="age"
                               name="age"
                               value={formik.values.age}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               error={formik.touched.age && Boolean(formik.errors.age)}
                               helperText={formik.touched.age && formik.errors.age}/>
                </Grid>
                <Grid size={{xs:12, sm:6, md: 4}}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">جنسیت</InputLabel>
                        <Select
                            id="gender"
                            name="gender"
                            value={formik.values.gender}
                            label="جنسیت"
                            onChange={formik.handleChange}
                        >
                            <MenuItem value="0">مرد</MenuItem>
                            <MenuItem value="1">زن</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PersonalInformation;