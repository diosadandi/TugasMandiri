import { Outlet } from "react-router-dom"

import LibComponentNavbar from "../lib/components/LibComponentNavbar";

const OutletPage = () => {
  return (
    <>
      <LibComponentNavbar />
      <Outlet />

    </>
  )
}

export default OutletPage;