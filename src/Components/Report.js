import React from "react";
import { useLocation,useNavigate  } from "react-router-dom";
import A4SheetView from "./A4SheetView";
import PDFViewer from "./PDFViewer";

function Report() {
    const location = useLocation();
    const navigate = useNavigate();
    const {applicationId, title, datas, file } = location.state || {};
    const handleBackClick = () => {
        navigate("/display" , { state: { applicationId} });
    };


    return (
        <div className="flex justify-center items-start h-screen">
            <button 
                onClick={handleBackClick} 
                className="absolute top-24 left-4 px-4 py-2 bg-white text-black border border-black rounded-md focus:outline-none"
            >
                Back
            </button>
            <div className="flex flex-col items-center w-1/2 pdfs pr-8 pl-8 pb-8">
                <p className="mt-8 font-bold text-2xl mb-4">{title} Preview</p>
                {/* <embed className="rounded-lg" src={file} type="application/pdf" width="100%" height="600px" /> */}
                <PDFViewer file={file}/>
            </div>
            <div className="flex flex-col items-center w-1/2 pr-8 pl-8 pb-8">
                <p className="mt-8 font-bold text-2xl">Extracted Fields</p>
                <div className="w-full pl-4 pr-4">
                    <A4SheetView datas={datas}/>
                </div>
            </div>
        </div>
    );
}

export default Report;
