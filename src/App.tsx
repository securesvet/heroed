import "./App.css";
import Layout from "@components/Layout";
import { Heroes } from "./pages/Heroes";
import { DndCreator } from "./pages/Attributes";
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
import Users from "./pages/Users";
import Store from "./pages/Store";
import { Provider } from "react-redux";
import { store } from "./store";

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
        <Route path="/users" element={<Users />} />
        <Route path="/store" element={<Store />} />
      </Route>
    </>,
  ),
  { basename: "/heroed" },
);

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
