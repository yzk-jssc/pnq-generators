import { observer } from "mobx-react-lite";
import { QRCodeSVG } from "qrcode.react";
import { FunctionComponent } from "react";
import qr from "../../store/qr";
import NavPages from "../UI/nav_pages/NavPages";
import MyForm from "../UI/form/MyForm";
import classes from './QrsPage.module.scss'

interface QrsPageProps {}

const QrsPage: FunctionComponent<QrsPageProps> = observer(() => {
    return (
        <div className={classes.qr}>
            <header>
                <NavPages
                    firstLink="passwords"
                    firstName="Passwords"
                    secondLink="names"
                    secondName="Names"
                />
                <div className={classes.qr_title}>QR COnverter</div>
            </header>

            <main className={classes.main}>
                
                <div className={classes.main_form}>
                <MyForm
                    title="Enter something you want to convert to qr"
                    value={qr.qrInfo.value}
                    sumbitFunc={e=>qr.getQrValue(e)}
                    valueHandler={(e) => qr.valueHandler(e.target.value)}
                />
                </div>
                
                {qr.qrInfo.link && (
                    <div className={classes.result}>

                        <QRCodeSVG className={classes.result_qr} value={qr.qrInfo.link} />
                        <br />
                        <label className={classes.result_title} htmlFor="">qr for {qr.qrInfo.link}</label>
                    </div>  
                )}
            </main>
        </div>
    );
});

export default QrsPage;
