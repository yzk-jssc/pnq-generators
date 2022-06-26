import { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "../components/homepage/HomePage";
import NameMain from "../components/names/NameMain";
import PasswordMain from "../components/passwords/PasswordMain";

interface AppRoutesProps {
    
}
 
const AppRoutes: FunctionComponent<AppRoutesProps> = () => {
    return (
        <Router>
            <Routes>
                <Route path="/qrs" element={<PasswordMain/>}/>
                <Route path="/passwords" element={<PasswordMain/>}/>
                <Route path="/names" element={<NameMain/>}/>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </Router>
    );
}
 
export default AppRoutes;