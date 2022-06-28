import { observer } from "mobx-react-lite";
import { ChangeEvent, FunctionComponent } from "react";

interface RangeProps {
    title: string;
    value: number;
    storeFunc: (e: ChangeEvent<HTMLInputElement>) => void;
    minLength: number;
    maxLength: number;
}

const Range: FunctionComponent<RangeProps> = observer(
    ({ maxLength, minLength, title: rangeTitle, value, storeFunc }) => {
        return (
            <div className="name__range">
                <label key={(maxLength).toString()}>{rangeTitle}</label>
                <br />
                <label key={(minLength).toString()}>{value}</label>
                <input
                    key={rangeTitle}
                    type="range"
                    min={minLength}
                    max={maxLength}
                    value={value}
                    onChange={storeFunc}
                />
            </div>
        );
    }
);

export default Range;
