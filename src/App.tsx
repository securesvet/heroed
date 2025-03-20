import "./App.css";
import Layout from "@components/Layout";
import { Heroes } from "./pages/Heroes";
import { DndCreator } from "./pages/DndCreator";
import { Home } from "./pages/Home";
import { Login, Register } from "./pages/Auth";
import { ThemeProvider } from "@components/theme-provider";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { CreateHero } from "./pages/CreateHero";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hero/new" element={<CreateHero />} />
        <Route path="/hero" element={<DndCreator />} />
        <Route path="/heroes" element={<Heroes />} />
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
