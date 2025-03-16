import "./App.css";
import Create from "./components/Create";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Layout from "./components/Layout";
import { Register } from "./components/Register";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}> 
        <Route index element={<Home/>} />
        <Route path="/signup" element={<Register />} />
        <Route path="/heroes" element={<Hero />} />
        <Route path="/create" element={<Create />} />
      </Route>
    </>
  )
);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
