import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import Layout from "./Layout/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/details/:id" element={<ItemDetails />} />
      </Route>
      <Route path="*" element={"Not found"} />
    </Routes>
  );
};

export default AppRoutes;
