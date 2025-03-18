import "./App.css";
import Create from "./pages/Create";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { Login, Register } from "./pages/Auth";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/heroes" element={<Hero />} />
        <Route path="/create" element={<Create />} />
      </Route>
    </>,
  ),
  { basename: "/heroed" },
);

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
