import { observer } from "mobx-react-lite";
import { FunctionComponent } from "react";
import password from "../../../store/password";
import OptionItem from "../../UI/option_item/OptionItem";

interface PasswordListProps {}

const PasswordList: FunctionComponent<PasswordListProps> = observer(() => {
    return (
        <div className="pass__params">
            {/* LETTERS */}
            
            <OptionItem isValue={password.passwords.letters} itemTitle='Regular letters' switchFunc={() => password.lettersSwitch()}/>

            {/* NUMBERS */}

            <OptionItem isValue={password.passwords.numbers} itemTitle='Numbers' switchFunc={() => password.numbersSwitch()}/>

            {/* SYMBOLS */}

            <OptionItem isValue={password.passwords.symbols} itemTitle='Symbols' switchFunc={() => password.symbolsSwitch()}/>

            {/* CAP LETTERS */}

            <OptionItem isValue={password.passwords.capLetters} itemTitle='Capital letters' switchFunc={() => password.capLettersSwitch()}/>


        </div>
    );
});

export default PasswordList;
