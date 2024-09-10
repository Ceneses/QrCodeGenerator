"use client";

import {useState} from "react";
import QRCode from "qrcode";

export default function Home() {

    const [image, setImage] = useState<string>("");
    const [url, setUrl] = useState<string>("");

    const generateQrCode = async () => {
        if (url === "") {
            setImage("");
        } else {
            setImage(await QRCode.toDataURL(url));
        }
    }

    return (
        <div className="mx-64 mt-16">
            <h2 className={"text-center font-bold"}>QrCode Generator</h2>
            <div className={"flex flex--row gap-x-4 mx-auto mt-4"}>
                <input
                    type="text"
                    className={"p-2 h-12 bg-slate-200/20 border-slate-800/20 border-2 rounded-md flex-1"}
                    placeholder={"请输入内容"}
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                />
                <button
                    className={"bg-slate-800/20 px-2 text-center rounded-md w-32 h-12 font-bold"}
                    onClick={generateQrCode}
                >Go</button>
                <button
                    className={"border-slate-600/20 border-2 px-2 text-center rounded-md w-32 h-12 font-bold"}
                    onClick={() => {setUrl(""); setImage("")}}
                >Reset</button>
            </div>
            <div className={"mt-4 p-4 bg-slate-200/20"}>
                {image === "" && <span>请输入链接~</span>}
                {image !== "" && <img src={image} alt="qrcode"/>}
            </div>
        </div>
    );
}
