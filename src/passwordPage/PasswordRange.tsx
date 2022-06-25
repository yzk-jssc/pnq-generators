import { observer } from "mobx-react-lite";
import { FunctionComponent } from "react";
import password from "../store/password";

interface PasswordRangeProps {}

const PasswordRange: FunctionComponent<PasswordRangeProps> = observer(() => {
    return (
        <div className="pass__range">
            <label>{password.passwords.pLength}</label>
            <input
                type="range"
                min={8}
                max={30}
                value={password.passwords.pLength}
                onChange={(e) => password.lengthHandler(+e.target.value)}
            />
        </div>
    );
});

export default PasswordRange;
