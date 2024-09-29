import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import Line from "../../Pages/LineChart/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./ChartData";

const SecondPartition = () => {
  const theme = useTheme();
  return (
    <Stack gap={2} mt={3} direction={"row"} flexWrap={"wrap"} justifyContent={{ xs: "center", sm: "space-between" }}>
      <Paper sx={{ flexGrow: 1,minWidth:400, maxWidth: 999, width: 800 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
              fontWeight={"bold"}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342.32
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <Line isDashbord={true} />
      </Paper>
      <Box
        sx={{
        //   border: "2px solid red",
          height: 380,
          minWidth: 250,
          flexGrow: 1,
          overflow:"auto"
        }}
      >
        <Paper>
          <Typography
            sx={{ color: theme.palette.secondary.main }}
            variant="h6"
            fontWeight={"bold"}
            p={1.2}
          >
            Recent Transactions
          </Typography>
        </Paper>

        {Transactions.map((item) => {
          return (
            <Paper
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                mt: 1.2,
              }}
              key={item.txId}
            >
              <Box p={1.2}>
                <Typography fontWeight="600">{item.txId}</Typography>
                <Typography>{item.user}</Typography>
              </Box>
              <Typography>{item.date}</Typography>
              <Typography borderRadius={1.4} padding={1} mx={1} bgcolor={theme.palette.success.main}>
                ${item.cost}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
};

export default SecondPartition;
