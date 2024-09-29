import { Box, Button, Stack } from "@mui/material";
import Cards from "./Cards";
import { DownloadOutlined } from "@mui/icons-material";
import SecondPartition from "./SecondPartition";
import ThirdPart from "./ThirdPart";
import LastPart from "./LastPart";
import HeaderPage from "./../../components/HeaderPage";

export const Dashboard = () => {
  return (
    <Stack 
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        mb={2}
        alignItems={"center"}
      >
        <HeaderPage
          title={"DASHBOARD"}
          subtitle={"Welcome to your dashboard"}
          isDashbord={true}
        />
        <Box sx={{ textAlign: "right", mb: 1.3 }}>
          <Button
            sx={{ padding: "6px 8px", textTransform: "capitalize" }}
            variant="contained"
            color="primary"
          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </Stack>

      <Cards />
      <SecondPartition />
      <ThirdPart />
      <LastPart />
    </Stack>
  );
};
