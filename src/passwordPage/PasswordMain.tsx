import { observer } from "mobx-react-lite";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import password from "../store/password";
import PasswordList from "./passwordList/PasswordList";
import PasswordRange from "./PasswordRange";

interface PasswordMainProps {}

const PasswordMain: FunctionComponent<PasswordMainProps> = observer(() => {

   
    return (
        <>
            <header>
                <nav>
                    <Link to="/qrs">QR </Link>
                    <Link to="/names">Names</Link>
                </nav>
                <div>Password generator</div>
            </header>

            <main>
                <PasswordRange/>
                <PasswordList/>
                
                <form action="" onSubmit={e=>e.preventDefault()}>
                    <button onClick={()=>password.generatePassword()}>
                        genereate!

                    </button>
                    <input type="text" value={password.passwords.result}/>
                </form>
            </main>
        </>
    );
});

export default PasswordMain

