import React from 'react';

const SideBarBtns = ({ handleFilteredItem }) => {
    return (
        <div className="w-[240px] h-[650px] bg-gray-100 rounded-lg">
            <button onClick={() => handleFilteredItem("")} className="w-full h-[52px] my-5 bg-[rgba(9,8,15,0.05)] rounded-3xl">  
            All Products
            </button>
            <button onClick={() => handleFilteredItem("laptops")} className="w-full h-[52px] my-5 bg-[rgba(9,8,15,0.05)] rounded-3xl">
                Laptops
            </button>
            <button onClick={() => handleFilteredItem('Phones')} className="w-full h-[52px] my-5 bg-[rgba(9,8,15,0.05)] rounded-3xl">
                Phones
            </button>
            <button onClick={() => handleFilteredItem('Accessories')} className="w-full h-[52px] my-5 bg-[rgba(9,8,15,0.05)] rounded-3xl">
                Accessories
            </button>
            <button onClick={() => handleFilteredItem('Smart Watches')} className="w-full h-[52px] my-5 bg-[rgba(9,8,15,0.05)] rounded-3xl">
                Smart Watches
            </button>
            <button onClick={() => handleFilteredItem('MacBooks')} className="w-full h-[52px] my-5 bg-[rgba(9,8,15,0.05)] rounded-3xl">
                MacBook
            </button>
            <button onClick={() => handleFilteredItem('iPhones')} className="w-full h-[52px] my-5 bg-[rgba(9,8,15,0.05)] rounded-3xl">
                iPhone
            </button>
            {/* <button onClick={() => handleFilteredItem('HeadPhones')} className="w-full h-[52px] my-5 bg-[rgba(9,8,15,0.05)] rounded-3xl">
                HeadPhone
            </button> */}
        </div>
    );
};

export default SideBarBtns;
