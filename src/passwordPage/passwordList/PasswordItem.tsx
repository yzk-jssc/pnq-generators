import { FunctionComponent, ReactNode } from "react";

interface PasswordItemProps {
    
    name:boolean;
    about:ReactNode;
    func: ()=>void

}

const PasswordItem: FunctionComponent<PasswordItemProps> = ({name,func,about}) => {
    return (
        <div className="pass__options">
            <input
                type="checkbox"
                name=""
                id=""
                checked={name}
                onChange={() => func()}
            />
            <label>Regular letters</label>
        </div>
    );
};

export default PasswordItem;
