import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomeScreen from "./pages/HomeScreen";
import FirtScreen from "./pages/FirstScreen";
import LoginScreen from "./pages/LoginScreen";
import RegistrationScreen from "./pages/RegistrationScreen";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FirtScreen/>}/>
                <Route path="/home_screen" element={<HomeScreen/>}/>
                <Route path="/login_screen" element={<LoginScreen />}/>
                <Route path="/registration_screen" element={<RegistrationScreen />}/>
            </Routes>
        </BrowserRouter>
    );
}