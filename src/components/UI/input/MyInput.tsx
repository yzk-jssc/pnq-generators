import { ChangeEvent, FunctionComponent,MouseEvent, RefObject } from "react";

interface MyInputProps {
    key:string;
    value:string;
    onClick?: (e:MouseEvent<HTMLInputElement>)=>void;
    onChange?: (e:ChangeEvent<HTMLInputElement>)=>void;
    ref?:RefObject<any>;

}
 
const MyInput: FunctionComponent<MyInputProps> = ({key,value,onClick,onChange,ref,...props}) => {
    return (
        <input  
        ref={ref}
        key={key}
        value={value}
        type="text" 
        onClick={onClick}
        onChange={onChange}
        {...props}
        />
    );
}
 
export default MyInput;