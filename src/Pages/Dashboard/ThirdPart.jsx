import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../Pages/PieChart/Pie";
import Bar from "../../Pages/BarChart/Bar";

const ThirdPart = () => {
  const theme = useTheme();
  return (
    <Stack mt={3} direction={"row"} gap={2} justifyContent={{ xs: "center", sm: "space-between" }} >
      <Paper sx={{ width: "50%", padding: 1.2 , maxHeight : "400px" , flexGrow:1 }}>
        <Typography
          color={theme.palette.secondary.main}
         sx={{ mt: "15px" }}
          variant="h6"
          fontWeight={"bold"}
        >
          Campaign
        </Typography>



        <Pie isDashbord={true}/>

        <Box textAlign={"center"} >
        <Typography  mb={1}
              mt={1}
              ml={4}
              variant="body1"
              fontWeight={"bold"}>$48,352 revenue generated</Typography>
        <Typography variant="body2" ml={4}>Includes extra misc expenditures and costs</Typography>
        </Box>

      </Paper>
      <Paper sx={{ width: "50%", padding: 1.2, maxHeight : "400px" ,flexGrow : 1 }}>
        <Typography
          color={theme.palette.secondary.main}
          mb={1}
          mt={2}
          ml={4}
          variant="h6"
          fontWeight={"bold"}
        >
          Sales Quantity
        </Typography>
        <Bar isDashbord={true} />
      </Paper>
    </Stack>
  );
};

export default ThirdPart;
