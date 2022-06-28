import { QRCodeSVG } from "qrcode.react";
import { FunctionComponent } from "react";

interface QrResultProps {
    link:string
}

const QrResult: FunctionComponent<QrResultProps> = ({link}) => {
    return (
        <>
            {link &&(<div>
            <QRCodeSVG key ={link} value={link} />
            <br />
            <label key ={link} htmlFor="">qr for {link}</label>
        </div>)}
        {/* добавляется а не ререндерит */}
        </>
    );
};

export default QrResult;
