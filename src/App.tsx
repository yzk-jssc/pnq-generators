import React, { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import user from "./store/user";
import "./styles/page.scss";

function App() {

    useEffect(() => {
        user.checkUserRemember()
    }, [])

    return (
        <div className="App">
            <AppRoutes />
        </div>
    );
}

export default App;
