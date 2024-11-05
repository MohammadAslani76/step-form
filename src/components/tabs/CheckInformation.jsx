import {Box, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2"

const CheckInformation = ({formik}) => {
    return (
        <Box sx={{mt: 2}}>
            <Grid container spacing={2}>
                <Grid size={{xs: 12, sm: 6, md: 4}}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography color="text.secondary">نام:</Typography>
                        <Typography color="text.primary">{formik.values.name}</Typography>
                    </Stack>
                </Grid>
                <Grid size={{xs: 12, sm: 6, md: 4}}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography color="text.secondary">نام خانوادگی:</Typography>
                        <Typography color="text.primary">{formik.values.family}</Typography>
                    </Stack>
                </Grid>
                <Grid size={{xs: 12, sm: 6, md: 4}}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography color="text.secondary">نام پدر:</Typography>
                        <Typography color="text.primary">{formik.values.fatherName}</Typography>
                    </Stack>
                </Grid>
                <Grid size={{xs: 12, sm: 6, md: 4}}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography color="text.secondary">کدملی:</Typography>
                        <Typography color="text.primary">{formik.values.nationalCode}</Typography>
                    </Stack>
                </Grid>
                <Grid size={{xs: 12, sm: 6, md: 4}}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography color="text.secondary">سن:</Typography>
                        <Typography color="text.primary">{formik.values.age}</Typography>
                    </Stack>
                </Grid>
                <Grid size={{xs: 12, sm: 6, md: 4}}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography color="text.secondary">جنسیت:</Typography>
                        <Typography color="text.primary">{formik.values.gender === "0" ? "مرد" : "زن"}</Typography>
                    </Stack>
                </Grid>
                <Grid size={{xs: 12, sm: 6, md: 4}}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography color="text.secondary">شماره تلفن:</Typography>
                        <Typography color="text.primary">{formik.values.phoneNumber}</Typography>
                    </Stack>
                </Grid>
                <Grid size={{xs: 12, sm: 6, md: 4}}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography color="text.secondary">ایمیل:</Typography>
                        <Typography color="text.primary">{formik.values.email}</Typography>
                    </Stack>
                </Grid>
                <Grid size={{xs: 12, sm: 6, md: 4}}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography color="text.secondary">شهر:</Typography>
                        <Typography color="text.primary">{formik.values.city}</Typography>
                    </Stack>
                </Grid>
            </Grid>
            <Stack direction="row" alignItems="center" spacing={1} mt={2}>
                <Typography color="text.secondary">آدرس:</Typography>
                <Typography color="text.primary">{formik.values.address}</Typography>
            </Stack>
        </Box>
    );
};

export default CheckInformation;