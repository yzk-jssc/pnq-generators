import { observer } from "mobx-react-lite";
import { ChangeEvent, FunctionComponent } from "react";

interface RadioProps {
    isChecked:boolean;
    switchFunc:(e:ChangeEvent<HTMLInputElement>)=>void;
    title:string;
}

const Radio: FunctionComponent<RadioProps> = ({isChecked,switchFunc,title}) => {
    return (
        <div>
            <input
                type="radio"
                name=""
                id=""
                checked={isChecked}
                onChange={switchFunc}
            />
            <label>{title}</label>
        </div>
    );
};

export default Radio;
