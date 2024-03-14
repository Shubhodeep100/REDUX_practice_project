import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Test from "./components/Test";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route index element={<Dashboard/>}></Route>
      <Route path="/cart"></Route>
    </Route>
  ));
  return (
    <div className="App">
      <Test />
    </div>
  );
}

export default App;
