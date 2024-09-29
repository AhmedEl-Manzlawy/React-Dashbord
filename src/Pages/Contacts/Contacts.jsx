import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { columns, rows } from "./conactsData"
import { Box } from "@mui/material"
import HeaderPage from "../../components/HeaderPage"

export const Contacts = () => {
  return (
    <Box style={{ height: 600, width: "100%" }}>
    <HeaderPage title={"CONTACTS"} subtitle={"List of Contacts for Future Reference"} />
    <DataGrid
     slots={{
    toolbar: GridToolbar,
  }}
      rows={rows}
      // @ts-ignore
      columns={columns}
    />
  </Box>
  )
}
