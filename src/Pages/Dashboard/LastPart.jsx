import { Paper } from "@mui/material";
import Geo from "../../Pages/GeographyChart/Geo";

const LastPart = () => {
    return (
        <Paper sx={{mt:3 , maxHeight : "500px" , minHeight:"350px"}} >
            <Geo isDashbord={true} />
        </Paper>
    );
}

export default LastPart;
