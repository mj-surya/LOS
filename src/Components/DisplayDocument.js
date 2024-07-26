import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import '../Components/UploadFile.css';

function DisplayDocument() {
    const navigate = useNavigate();
    const location = useLocation();
    const [search, setSearch] = useState("");
    const {applicationId } = location.state || {};
    const [displayData, setDisplayData] = useState({});

    const data = [
        {
            title: "Document1",
            data: {
                key1: "value1",
                key2: "value2",
                key3: "value3",
                key4: "value4",
                key5: "value5"
            },
            file: "/doc1.pdf"
        },
        {
            title: "Document2",
            data: {
                key1: "value1",
                key2: "value2",
                key3: "value3",
                key4: "value4",
                key5: "value5"
            },
            file: "/doc1.pdf"
        },
        {
            title: "Document3",
            data: {
                key1: "value1",
                key2: "value2",
                key3: "value3",
                key4: "value4",
                key5: "value5"
            },
            file: "/doc1.pdf"
        },
        {
            title: "Document4",
            data: {
                key1: "value1",
                key2: "value2",
                key3: "value3",
                key4: "value4",
                key5: "value5"
            },
            file: "/doc1.pdf"
        },
        {
            title: "Document5",
            data: {
                key1: "value1",
                key2: "value2",
                key3: "value3",
                key4: "value4",
                key5: "value5"
            },
            file: "/doc1.pdf"
        },
        {
            title: "Document6",
            data: {
                key1: "value1",
                key2: "value2",
                key3: "value3",
                key4: "value4",
                key5: "value5"
            },
            file: "/doc1.pdf"
        },
        {
            title: "Document7",
            data: {
                key1: "Doc7fdavfviuerverciewcweacwecewcerwceracnkjnnlancncneriankncaweDoc7fdavfviuerve",
                key2: "Doc7",
                key3: "Doc7",
                key4: "Doc7",
                key5: "Doc7",
                key6: "Doc7",
                key7: "Doc7",
                key8: "Doc7",
                key9: "Doc7",
                key10: "Doc7",
                key11: "Doc7",
                key12: "Doc7",
                key13: "Doc7",
                key14: "Doc7",
                key15: "Doc7",
                key16: "Doc7",
                key17: "Doc7",
                key18: "Doc7",
                key19: "Doc7",
                key20: "Doc7"
            },
            file: "/doc1.pdf"
        }
    ];

    useEffect(()=>{
        if(applicationId){
            setSearch(applicationId);
            setDisplayData(data);
        }
        
    },[])

    const display = (applicationId, title, datas, file) => {
        navigate("/report", { state: { applicationId, title, datas, file } })
        console.log(datas)
    };

    const SearchButton = (event) => {
        event.preventDefault();
        if(search===""){
            setDisplayData({});
        }
        setDisplayData(data);
    }

    return (
        <div className="flex flex-col items-center h-screen">
            <div className="mt-10 p-5 w-full flex justify-center">
                <form className="flex items-center w-full max-w-md" onSubmit={SearchButton}>
                    <div className="relative w-full flex">
                        <input
                            type="number"
                            id="search"
                            className="placeholder-black border text-md border-black border-dashed text-black rounded-lg block w-2/3 p-2.5 text-center focus:outline-none"
                            placeholder="Enter Application ID"
                            value={search}
                            onChange={(e) => { setSearch(e.target.value); }}
                        />
                        <button
                            type="submit"
                            className="absolute inset-y-0 end-0 bg-blue-800 p-2 rounded-lg text-white flex items-center px-4"
                        >
                            Get Documents
                        </button>
                    </div>
                </form>
            </div>

            <div className="mt-5 mb-24 ml-16 mr-16 p-5 rounded-3xl ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {displayData.length > 0 ? (
                        displayData.map((item, index) => (
                            <div
                                key={index}
                                className="move flex flex-col w-56 min-h-28 items-center border-dashed bg-blue-400 shadow-md border-2 border-gray-300 rounded-xl hover:border-gray-700 cursor-pointer"
                                onClick={() => display(search,item.title, item.data, item.file)}
                            >
                                <div className="p-4 flex flex-col items-center">
                                    <h5 className="block mb-2 font-sans text-xl text-wrap font-semibold text-black">
                                        {item.title}
                                    </h5>
                                    <p className='align-center text-sm'>Extracted Data: 200</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full flex justify-center items-center">
                            <h1>No items to display</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DisplayDocument;
