import { observer } from "mobx-react-lite";
import { FunctionComponent } from "react";
import names from "../../store/name";
import MyButton from "../UI/button/MyButton";
import Nav from "../UI/nav/Nav";
import Radio from "../UI/radio/Radio";
import Range from "../UI/range/Range";
import NameList from "./NameList";
import classes from './NameMain.module.scss'

interface NameMainProps {}

const NameMain: FunctionComponent<NameMainProps> = observer(() => {
    const minRangeLength = names.namesProps.male ? 2 : 3;
    const maxRangeLength = names.namesProps.male ? 11 : 10;
    return (
        <div className={classes.name}>
            <header>
            <Nav
                firstLink="passwords"
                firstName="Passwords"
                secondLink="qrs"
                secondName="QR"
                />
                <div className={classes.name_title}>Name generator</div>
            </header>

            <main className={classes.name_main}>
                <div className={classes.ranges}>
                    <Range
                    rangeClass={''}
                    title={`Name length`}
                    value={names.namesProps.nLength}
                    minLength={minRangeLength}
                    maxLength={maxRangeLength}
                    storeFunc={(e)=>names.lengthHandler(+e.target.value)}
                    />
                    <hr />
                    <Range
                    rangeClass={''}
                        title={`Quantity`}
                        value={names.namesProps.quant}
                        minLength={2}
                        maxLength={5}
                        storeFunc={(e) => names.quantHandler(+e.target.value)}
                    />
                </div>

                <div className={classes.name_main_sub}>
                    <div className={classes.radios}>
                        <Radio
                            isChecked={names.namesProps.male}
                            switchFunc={() => names.genderSwitch()}
                            title={`male`}
                        />
                        <Radio
                            isChecked={names.namesProps.female}
                            switchFunc={() => names.genderSwitch()}
                            title={`female`}
                        />
                    </div>

                    {/* <button onClick={() => names.generateNames()}>check</button> */}

                    <MyButton
                    children='Check'
                    onClick={() => names.generateNames()}
                    />

                    {names.namesProps.result.length? (
                        <NameList namesList={names.namesProps.result} />
                    )
                    : <p>Try to generate names or change search preference</p>
                    
                }
                </div>
            </main>
        </div>
    );
});

export default NameMain;
