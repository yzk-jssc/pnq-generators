import { ChangeEvent, FunctionComponent } from "react";
import classes from './Range.module.scss';

interface RangeProps {
    title: string;
    value: number;
    storeFunc: (e: ChangeEvent<HTMLInputElement>) => void;
    minLength: number;
    maxLength: number;
    rangeClass?:string;
}

const Range: FunctionComponent<RangeProps> = 
    ({ maxLength, minLength, title: rangeTitle, value,rangeClass, storeFunc }) => {
        return (
            <div className={classes.range}>
                <label className={classes.range_title}  key={(minLength).toString()}>{rangeTitle}</label>
                <br />
                <input
                    className={classes.range_main}
                    key={rangeTitle}
                    type="range"
                    min={minLength}
                    max={maxLength}
                    value={value}
                    onChange={storeFunc}
                />
                <label className={classes.range_length}  key={(maxLength).toString()}>{value}</label>
            </div>
        );
    }


export default Range;
