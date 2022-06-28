import { observer } from "mobx-react-lite";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { useClipboard } from "use-clipboard-copy";
import password from "../../store/password";
import MyForm from "../UI/form/MyForm";
import Nav from "../UI/nav/Nav";
import Range from "../UI/range/Range";
import PasswordList from "./password_list/PasswordList";

interface PasswordMainProps {}

const PasswordMain: FunctionComponent<PasswordMainProps> = observer(() => {

    const copyClick = useClipboard()
   
    return (
        <div className="passwords">
            <header>
                <Nav
                firstLink="names"
                firstName="Names"
                secondLink="qrs"
                secondName="QR"
                />
                <div>Password generator</div>
            </header>

            <main>
                <Range 
                title={`Password length`} 
                value={password.passwords.pLength} 
                storeFunc={e=>password.lengthHandler(+e.target.value)}
                minLength={8}
                maxLength={30}
                />
                <PasswordList/>

                <MyForm
                title={'generate'}
                sumbitFunc={(e)=>password.generatePassword(e)}
                value={password.passwords.result}
                valueHandler={()=>{}}
                ref={copyClick.target}
                inputCopy={copyClick.copy}
                />
            
            </main>
        </div >
    );
});

export default PasswordMain

