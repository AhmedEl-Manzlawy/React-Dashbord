import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography, useTheme } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import HeaderPage from "../../components/HeaderPage";

export const Team = () => {
  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "id",
      width: 30,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "name",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "email",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "age",
      width: 30,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "phone",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      // flex: 1,
      width:150,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              margin:"10px auto",
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : theme.palette.success.dark,
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined
                fontSize="small"
                sx={{ color: "#fff" }}
              />
            )}
            {access === "Manager" && (
              <LockOpenOutlined fontSize="small" sx={{ color: "#fff" }} />
            )}
            {access === "User" && (
              <SecurityOutlined fontSize="small" sx={{ color: "#fff" }} />
            )}
            <Typography sx={{ fontSize: "15px", color: "#fff" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box style={{ height: 600, width: "100%" }}>
    <HeaderPage title={"TEAM"} subtitle={"Managing the Team Members"} />
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};
