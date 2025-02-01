import { NavLink } from "react-router-dom";
import ListedCart from "../ListedCart/ListedCart";
import ListedWish from "../ListedWish/ListedWish";
import { useState } from "react";


const Dashboard = () => {
    const [visible, setVisible] = useState('cart'); //by default cart list will be shown
    const [totalCost , setTotalCost] = useState(0);
    return (
        <div>
            <div className="hero bg-[#9538E2] h-[344px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md justify-center items-center">
                        <h1 className="text-4xl font-bold">
                            Dashboard
                        </h1>
                        <p className="mt-4 font-regular text-lg">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <div className="space-x-6 mt-8">

                            <button onClick={() => setVisible('cart')} className={`w-[169px] h-[52px] px-16 py-3 rounded-[32px] btn btn-outline ${visible === 'cart' ? "bg-white text-[#9538E2]" : "bg-transparent text-white"} font-bold text-lg btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-8`}>
                                Cart
                            </button>

                            <button onClick={() => setVisible('wishlist')} className={`w-[203px] h-[52px] px-16 py-3 rounded-[32px] btn btn-outline ${visible === 'wishlist' ? "bg-white text-[#9538E2]" : "bg-transparent text-white"}  font-normal text-lg btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-8`}>
                                Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Conditional rendering */}
            {
                visible === 'cart' && (
                    <>
                        {/* cart info hading */}
                        <div className="flex justify-between mt-4 mx-6">
                            <h2 className="mt-2 font-bold text-2xl">Cart</h2>
                            <div className="space-x-4 flex">
                                <p className="font-bold text-2xl mr-8 mt-2">Total Cost: ${totalCost.toFixed(2)} </p>
                                <button className="btn btn-outline bg-transparent text-[#9538E2] w-[196px] h-[52px] font-semibold text-lg px-4 py-3 rounded-[32px]">Sort by Price</button>
                                <button className="btn btn-outline bg-[#9538E2] text-white w-[137px] h-[52px] font-medium text-lg px-4 py-3 rounded-[32px]">Purchase</button>
                            </div>
                        </div>

                        {/* Cart will show here */}
                        <ListedCart setTotalCost={setTotalCost}></ListedCart>
                    </>
                )
            }

            {
                visible === 'wishlist' && (
                    <>
                        {/* Wishlist info heading */}
                        <div className="mt-7 mx-6"><h2 className="mx-2 font-bold text-2xl">WishList</h2></div>

                        {/* Wish list will be here */}
                        <ListedWish></ListedWish>
                    </>
                )
            }

        </div>


    );
};

export default Dashboard;