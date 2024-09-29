import { Box, Typography, useTheme } from "@mui/material";

// eslint-disable-next-line react/prop-types
const HeaderPage = ({title , subtitle , isDashbord=false }) => {
    const theme = useTheme()
    return (
        <Box mb={ isDashbord ? 2:4} >
            <Typography variant="h5" color={theme.palette.info.light} fontWeight={"bold"}>{title}</Typography>
            <Typography variant="body1">{subtitle}</Typography>
        </Box>
    );
}

export default HeaderPage;
