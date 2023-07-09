import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/header/header";
const AppRoutes: React.FC = () => (
        <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
);

export default AppRoutes;
