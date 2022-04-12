import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomeScreen from "./pages/HomeScreen";
import LoginSecreen from "./pages/LoginScreen";
import FirstSecreen from "./pages/FirstScreen";
import RegistrationSecreen from "./pages/RegistrationScreen";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FirstSecreen/>}/>
                <Route path="/home_screen" element={<HomeScreen/>}/>
                <Route path="/login_secreen" element={<LoginSecreen/>}/>
                <Route path="/registration_secreen" element={<RegistrationSecreen/>}/>
            </Routes>
        </BrowserRouter>
    );
}