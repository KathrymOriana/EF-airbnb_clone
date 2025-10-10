import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PlaceDetail from "../pages/PlaceDetail";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";

const AppRouter = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/place/:city/:id" element={<PlaceDetail />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
 
export default AppRouter;