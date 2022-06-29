import { ChangeEvent, FunctionComponent } from "react";
import classes from './OptionItem.module.scss'

interface OptionItemProps {
    isValue:boolean;
    itemTitle:string;
    switchFunc:(
        e:ChangeEvent<HTMLInputElement>)=>void;
}
 
const OptionItem: FunctionComponent<OptionItemProps> = ({isValue,itemTitle,switchFunc}) => {
return (
        <div className="pass__options">
                <input
                className={classes.check_bx}
                id={itemTitle}
                key={itemTitle}
                    type="checkbox"
                    name=""
                    checked={isValue}
                    onChange={switchFunc}
                />
                <label htmlFor={itemTitle}>{itemTitle}</label>
            </div>
    );
}
 
export default OptionItem;