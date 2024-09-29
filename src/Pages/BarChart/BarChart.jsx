import HeaderPage from "../../components/HeaderPage"
import Bar from "./Bar"

export const BarChart = () => {
  return (
    <div>
    <HeaderPage title={"Bar Chart"} subtitle={"The minimum wage in Germany, France and Spain (EUR/month)"} />
    <Bar />
    </div>
  )
}
