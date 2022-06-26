import { ChangeEvent, FunctionComponent } from "react";

interface OptionItemProps {
    isValue:boolean;
    itemTitle:string;
    switchFunc:(e:ChangeEvent<HTMLInputElement>)=>void;
}
 
const OptionItem: FunctionComponent<OptionItemProps> = ({isValue,itemTitle,switchFunc}) => {
return (
        <div className="pass__options">
                <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={isValue}
                    onChange={switchFunc}
                />
                <label>{itemTitle}</label>
            </div>
    );
}
 
export default OptionItem;