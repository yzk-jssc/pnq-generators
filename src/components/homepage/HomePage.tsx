import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface HomePageProps {
    
}
 
const HomePage: FunctionComponent<HomePageProps> = () => {
    return (
        <>
            <header>
                {`Passwords-Names-Qr generators`}
            </header>
            <main className="nav">
                <Link to='/passwords'>Passwords</Link>
                <Link to='/qrs'>Qr-s</Link>
                <Link to='/names'>Names</Link>
            </main>
        </>
    );
}
 
export default HomePage;
