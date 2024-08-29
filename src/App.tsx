import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Router } from "@remix-run/router";
import Layout from "./Layout";
import { Home } from "./components/index";

function App() {
  const router: Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="login" element={""} />
        <Route path="home" element={<Home />} />
        <Route path="careers" element={""} />
        <Route path="about" element={""} />
        <Route path="security" element={""} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
