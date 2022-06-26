import { observer } from "mobx-react-lite";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import password from "../../store/password";
import Range from "../UI/range/Range";
import PasswordList from "./password_list/PasswordList";

interface PasswordMainProps {}

const PasswordMain: FunctionComponent<PasswordMainProps> = observer(() => {

   
    return (
        <div className="passwords">
            <header>
                <nav>
                    <Link to="/qrs">QR </Link>
                    <Link to="/names">Names</Link>
                </nav>
                <div>Password generator</div>
            </header>

            <main>
                <Range 
                title={`PassLength`} 
                value={password.passwords.pLength} 
                storeFunc={e=>password.lengthHandler(+e.target.value)}
                minLength={8}
                maxLength={30}
                />
                <PasswordList/>
                
                <form action="" onSubmit={e=>e.preventDefault()}>
                    <button onClick={()=>password.generatePassword()}>
                        generate!

                    </button>
                    <input onChange={()=>{}} type="text" value={password.passwords.result}/>
                </form>
            </main>
        </div >
    );
});

export default PasswordMain

