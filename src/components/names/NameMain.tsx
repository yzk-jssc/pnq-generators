import { observer } from "mobx-react-lite";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import names from "../../store/name";
import Radio from "../UI/radio/Radio";
import Range from "../UI/range/Range";
import NameList from "./NameList";

interface NameMainProps {}

const NameMain: FunctionComponent<NameMainProps> = observer(() => {
    const minRangeLength = names.namesProps.male ? 2 : 3;
    const maxRangeLength = names.namesProps.male ? 11 : 10;
    console.log(maxRangeLength);

    return (
        <div>
            <header>
                <nav>
                    <Link to="/passwords">Passwords</Link>
                    <Link to="/qrs">QRs</Link>
                </nav>
            </header>

            <main>
                <div>
                    <Range
                    title={`Name length`}
                    value={names.namesProps.nLength}
                    minLength={minRangeLength}
                    maxLength={maxRangeLength}
                    storeFunc={(e)=>names.lengthHandler(+e.target.value)}
                    />
                    <Range
                        title={`Quantity`}
                        value={names.namesProps.quant}
                        minLength={2}
                        maxLength={5}
                        storeFunc={(e) => names.quantHandler(+e.target.value)}
                    />
                </div>

                <div>
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

                    <button onClick={() => names.generateNames()}>check</button>

                    {names.namesList && (
                        <NameList namesList={names.namesProps.result} />
                    )}
                </div>
            </main>
        </div>
    );
});

export default NameMain;
