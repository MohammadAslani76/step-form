import {Box, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import Grid from "@mui/material/Grid2"

const PersonalInformation = ({formData,setFormData}) => {
    return (
        <Box sx={{mt : 2}}>
            <Grid container spacing={2}>
                <Grid size={{xs:12, sm:6, md: 4}}>
                    <TextField fullWidth label="نام" variant="outlined"
                               autoComplete="off" value={formData.name} type="text"
                               onChange={(e) => setFormData({...formData,name: e.target.value})}/>
                </Grid>
                <Grid size={{xs:12, sm:6, md: 4}}>
                    <TextField fullWidth label="نام خانوادگی" variant="outlined"
                               autoComplete="off" value={formData.family} type="text"
                               onChange={(e) => setFormData({...formData,family: e.target.value})}/>
                </Grid>
                <Grid size={{xs:12, sm:6, md: 4}}>
                    <TextField fullWidth label="نام پدر" variant="outlined"
                               autoComplete="off" value={formData.fatherName} type="text"
                               onChange={(e) => setFormData({...formData,fatherName: e.target.value})}/>
                </Grid>
                <Grid size={{xs:12, sm:6, md: 4}}>
                    <TextField fullWidth label="کدملی" variant="outlined"
                               autoComplete="off" value={formData.nationalCode} type="text"
                               onChange={(e) => setFormData({...formData,nationalCode: e.target.value})}/>
                </Grid>
                <Grid size={{xs:12, sm:6, md: 4}}>
                    <TextField fullWidth label="سن" variant="outlined"
                               autoComplete="off" value={formData.age} type="number"
                               onChange={(e) => setFormData({...formData,age: e.target.value})}/>
                </Grid>
                <Grid size={{xs:12, sm:6, md: 4}}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">جنسیت</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.gender}
                            label="جنسیت"
                            onChange={(e) => setFormData({...formData,gender: e.target.value})}
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