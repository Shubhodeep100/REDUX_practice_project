import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <h1>Navigation</h1>
      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default RootLayout;
