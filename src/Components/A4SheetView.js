import React from 'react';

const A4SheetView = ({ datas }) => {
    
    const keys = datas ? Object.keys(datas) : [];
    
    return (
        <div className="mt-4 p-8 border border-gray-200 bg-white w-full rounded-lg shadow-lg overflow-auto">
            <div className="a4-sheet-container">
                <div className="a4-sheet-content pt-4">
                    {keys.map((key, index) => (
                        <div
                            key={key}
                            className='flex mb-4'
                        >
                            <div className="flex-1 w-1/5 pr-4 p-2">
                                <label className="block text-sm font-bold text-black">
                                    {key}:
                                </label>
                            </div>
                            <div className="flex w-4/5">
                                <textarea
                                    type="text"
                                    readOnly
                                    value={datas[key]}
                                    className="w-full min-h-10 p-2 border border-gray-300 rounded-md shadow-sm no-scrollbar"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default A4SheetView;
