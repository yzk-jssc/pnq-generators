import { observer } from "mobx-react-lite";
import { FunctionComponent } from "react";
import password from "../../store/password";

interface PasswordListProps {
    
}
 
const PasswordList: FunctionComponent<PasswordListProps> = observer(() => {
    return (
        <div className="pass__params">
                    {/* LETTERS */}
                    <div className="pass__options">
                        <input
                            type="checkbox"
                            name=""
                            id=""
                            checked={password.passwords.letters}
                            onChange={()=>password.lettersSwitch()}
                        />
                        <label>Regular letters</label>
                    </div>
                    {/* NUMBERS */}
                    <div className="pass__options">
                        <input
                            type="checkbox"
                            name=""
                            id=""
                            checked={password.passwords.numbers}
                            onChange={() => password.numbersSwitch()}
                        />
                        <label>Numbers</label>
                    </div>
                    {/* SYMBOLS */}
                    <div className="pass__options">
                        <input
                            type="checkbox"
                            name=""
                            id=""
                            checked={password.passwords.symbols}
                            onChange={()=>password.symbolsSwitch()}
                        />
                        <label>Symbols</label>
                    </div>
                    {/* CAP LETTERS */}
                    <div className="pass__options">
                        <input
                            type="checkbox"
                            name=""
                            id=""
                            checked={password.passwords.capLetters}
                            onChange={()=>password.capLettersSwitch()}
                        />
                        <label>Capital letters</label>
                    </div>
                </div>
    );
})
 
export default PasswordList;