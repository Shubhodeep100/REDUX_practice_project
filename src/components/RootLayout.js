import { Outlet } from "react-router-dom";
import NavBar from "./NavBarPannel";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";



const RootLayout = () => {
  return (
    <>
      <NavBar />
      {/* <h1>Navigation</h1> */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
