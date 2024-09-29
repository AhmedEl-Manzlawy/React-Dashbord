import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./BalanceData";
import { Box } from "@mui/material";
import HeaderPage from "../../components/HeaderPage";

export const Balances = () => {
  return (
    <Box style={{ height: 600, width: "100%" }}>
    <HeaderPage title={"INVOICES"} subtitle={"List of Invoice Balances"}  />
      <DataGrid
        checkboxSelection
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};
