import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <ScrollRestoration />
      <Navbar />
      <Outlet />

    </div>
  )
}

export default Main
