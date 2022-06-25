import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface NameMainProps {
    
}
 
const NameMain: FunctionComponent<NameMainProps> = () => {
    return (
        <div>
            <header>
                <nav>
                    <Link to='/passwords'>Passwords</Link>
                    <Link to='/qrs'>QRs</Link>
                </nav>
            </header>

            <main>
                
            </main>
        </div>
    );
}
 
export default NameMain;