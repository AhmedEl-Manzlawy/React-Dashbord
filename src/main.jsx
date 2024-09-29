import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App';
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Team } from "./Pages/Team/Team";
import { Contacts } from "./Pages/Contacts/Contacts";
import { Balances } from "./Pages/Balances/Balances";
import { Profile } from "./Pages/Profile/Profile";
import { Calender } from "./Pages/Calendar/Calender";
import { Faq } from "./Pages/FAQ/Faq";
import { BarChart } from "./Pages/BarChart/BarChart";
import { LineChart } from "./Pages/LineChart/LineChart";
import { GeoChart } from "./Pages/GeographyChart/GeoChart";
import { PieChart } from "./Pages/PieChart/PieChart";
import PageNotFound from "./components/PageNotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
     <Route index element={<Dashboard />}/> 
     <Route path="team" element={<Team />} />
     <Route path="contacts" element={<Contacts /> } />
     <Route path="invoices" element={<Balances /> } />
     <Route path="form" element={<Profile />  } />
     <Route path="calendar" element={<Calender />} />
     <Route path="faq" element={<Faq />} />
     <Route path="bar" element={<BarChart />} />
     <Route path="pie" element={<PieChart />} />
     <Route path="line" element={<LineChart />} />
     <Route path="geography" element={<GeoChart />} />\
     <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);