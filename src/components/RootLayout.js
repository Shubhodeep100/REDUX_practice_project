import { Outlet } from "react-router-dom";
import NavBar from "./NavBarPannel";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
