import { ChangeEvent, FunctionComponent } from "react";
import classes from './Radio.module.scss'

interface RadioProps {
    isChecked:boolean;
    switchFunc:(e:ChangeEvent<HTMLInputElement>)=>void;
    title:string;
}

const Radio: FunctionComponent<RadioProps> = ({isChecked,switchFunc,title}) => {
    return (
        <div>
            <input
            className={classes.radio}
            key={title}
                type="radio"
                name=""
                id={title}
                checked={isChecked}
                onChange={switchFunc}
            />
            <label key ={`${Math.random()}`} htmlFor={title}>{title}</label>
        </div>
    );
};

export default Radio;
