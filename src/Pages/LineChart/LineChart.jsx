import HeaderPage from "../../components/HeaderPage"
import Line from "./Line"

export const LineChart = () => {
  return (
    <div>
    <HeaderPage title={"Line Chart"} subtitle={"Simple Line Chart"} isDashbord={true} />
    <Line />
    </div>
  )
}
