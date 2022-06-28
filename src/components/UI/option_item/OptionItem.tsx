import { ChangeEvent, FunctionComponent } from "react";

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