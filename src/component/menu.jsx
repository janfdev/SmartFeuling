import React from "react";

const menu = () => {
    return (
        <div className="p-4">
            <div className="w-full flex justify-between bg-blue-600 p-2 rounded-md">
                <div className="flex space-x-2">
                    <h1 className="text-sm font-bold text-white">≡</h1>
                    <h2 className="text-sm font-semibold text-white">Menu</h2>
                </div>
                <div className="text-white font-semibold px-1">v</div>
            </div>
        </div>
    )
}

export default menu