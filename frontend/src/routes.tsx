import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomeScreen from "./pages/HomeScreen";
import FirtScreen from "./pages/FirstScreen";
import LoginScreen from "./pages/LoginScreen";
import SavedScreen from "./pages/SavedScreen";
import MessagesScreen from "./pages/MessagesScreen";
import FavoriteScreen from "./pages/FavoriteScreen";
import LibrariesScreen from "./pages/LibrariesScreen";
import RegistrationScreen from "./pages/RegistrationScreen";
import NotificationsScreen from "./pages/NotificationsScreen";
import InformationHelpScreen from "./pages/InformationHelpScreen";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes> 
                <Route path="/" element={<FirtScreen/>}/>
                <Route path="/home_screen" element={<HomeScreen/>}/>
                <Route path="/login_screen" element={<LoginScreen />}/>
                <Route path="/savad_screen" element={<SavedScreen />}/>
                <Route path="/messages_screen" element={<MessagesScreen />}/>
                <Route path="/favorite_screen" element={<FavoriteScreen />}/>
                <Route path="/libraries_screen" element={<LibrariesScreen />}/>
                <Route path="/notifications_screen" element={<NotificationsScreen />}/>
                <Route path="/informations_help_screen" element={<InformationHelpScreen />}/>
                <Route path="/registration_screen" element={<RegistrationScreen />}/>
            </Routes>
        </BrowserRouter>
    );
}