import {Box, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2"

const CheckInformation = ({formData}) => {
    return (
        <Box sx={{mt: 2}}>
            <Grid container spacing={2}>
                <Grid size={{xs: 12, sm: 6, md: 4}}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography color="text.secondary">نام:</Typography>
                        <Typography color="text.primary">{formData.name}</Typography>
                    </Stack>
                </Grid>
                <Grid size={{xs: 12, sm: 6, md: 4}}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography color="text.secondary">نام خانوادگی:</Typography>
                        <Typography color="text.primary">{formData.family}</Typography>
                    </Stack>
                </Grid>
                <Grid size={{xs: 12, sm: 6, md: 4}}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography color="text.secondary">نام پدر:</Typography>
                        <Typography color="text.primary">{formData.fatherName}</Typography>
                    </Stack>
                </Grid>
                <Grid size={{xs: 12, sm: 6, md: 4}}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography color="text.secondary">کدملی:</Typography>
                        <Typography color="text.primary">{formData.nationalCode}</Typography>
                    </Stack>
                </Grid>
                <Grid size={{xs: 12, sm: 6, md: 4}}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography color="text.secondary">سن:</Typography>
                        <Typography color="text.primary">{formData.age}</Typography>
                    </Stack>
                </Grid>
                <Grid size={{xs: 12, sm: 6, md: 4}}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography color="text.secondary">جنسیت:</Typography>
                        <Typography color="text.primary">{formData.gender === "0" ? "مرد" : "زن"}</Typography>
                    </Stack>
                </Grid>
                <Grid size={{xs: 12, sm: 6, md: 4}}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography color="text.secondary">شماره تلفن:</Typography>
                        <Typography color="text.primary">{formData.phoneNumber}</Typography>
                    </Stack>
                </Grid>
                <Grid size={{xs: 12, sm: 6, md: 4}}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography color="text.secondary">ایمیل:</Typography>
                        <Typography color="text.primary">{formData.email}</Typography>
                    </Stack>
                </Grid>
                <Grid size={{xs: 12, sm: 6, md: 4}}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography color="text.secondary">شهر:</Typography>
                        <Typography color="text.primary">{formData.city}</Typography>
                    </Stack>
                </Grid>
                <Grid size={{xs: 12, sm: 6, md: 4}}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography color="text.secondary">آدرس:</Typography>
                        <Typography color="text.primary">{formData.address}</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CheckInformation;