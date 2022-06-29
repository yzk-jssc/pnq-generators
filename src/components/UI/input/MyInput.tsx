import { ChangeEvent, FunctionComponent,MouseEvent, RefObject } from "react";
import classes from './MyInput.module.scss'

interface MyInputProps {
    value:string;
    onClick?: (e:MouseEvent<HTMLInputElement>)=>void;
    onChange?: (e:ChangeEvent<HTMLInputElement>)=>void;
    innerRef?:RefObject<any>;

}
 
const MyInput: FunctionComponent<MyInputProps> = ({value,onClick,onChange,innerRef: ref,...props}) => {
    return (
        <input
        placeholder="waitin for something"
        className={classes.input}
        ref={ref}
        value={value}
        type="text" 
        onClick={onClick}
        onChange={onChange}
        {...props}
        />
    );
}
 
export default MyInput;