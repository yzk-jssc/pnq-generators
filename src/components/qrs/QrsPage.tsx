import { observer } from "mobx-react-lite";
import { QRCodeSVG } from "qrcode.react";
import { FunctionComponent } from "react";
import qr from "../../store/qr";
import Nav from "../UI/nav/Nav";
import MyForm from "../UI/form/MyForm";
import QrResult from "./qr_result/QrResult";

interface QrsPageProps {}

const QrsPage: FunctionComponent<QrsPageProps> = observer(() => {
    return (
        <div>
            <header>
                <Nav
                    firstLink="passwords"
                    firstName="Passwords"
                    secondLink="names"
                    secondName="Names"
                />
            </header>

            <main>
                <MyForm
                title="Enter something you want to convert to qr"
                    value={qr.qrInfo.value}
                    sumbitFunc={e=>qr.getQrValue(e)}
                    valueHandler={(e) => qr.valueHandler(e.target.value)}
                />
                {qr.qrInfo.link && (
                    <div>
                    <QrResult link={qr.qrInfo.link}/>

                        <QRCodeSVG value={qr.qrInfo.link} />
                        <br />
                        <label htmlFor="">qr for {qr.qrInfo.link}</label>
                    </div>  
                )}
            </main>
        </div>
    );
});

export default QrsPage;
