import { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../components/homepage/HomePage";
import Login from "../components/login/Login";
import NameMain from "../components/names/NameMain";
import PasswordMain from "../components/passwords/PasswordMain";
import QrsPage from "../components/qrs/QrsPage";
import SignIn from "../components/sign_in/SignIn";
import Nav from "../components/UI/nav/Nav";

interface AppRoutesProps {}

const AppRoutes: FunctionComponent<AppRoutesProps> = () => {
    return (
        <>
            
            <Router>
                <Nav/>

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/sign' element={<SignIn/>}/>
                    <Route path="/passwords" element={<PasswordMain />} />
                    <Route path="/qrs" element={<QrsPage />} />
                    <Route path="/names" element={<NameMain />} />
                </Routes>
            </Router>
        </>
    );
};

export default AppRoutes;
