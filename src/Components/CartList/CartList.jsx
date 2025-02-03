import { TbXboxXFilled } from "react-icons/tb";
const CartList = ({ cartList }) => {
    const { product_image, product_title, description, price } = cartList;
    return (

        <div className="flex flex-col md:flex-row justify-between items-center bg-slate-100 rounded-xl p-4">
            <div>
                <img
                    className="w-[200px] h-[188px] rounded object-cover"
                    src={product_image}
                    alt={product_title}
                />
            </div>
            <div className="w-[200px] h-[188px] text-center md:text-left md:mr-[600px] mt-4 md:mt-0">
                <h3 className="font-semibold text-2xl">{product_title}</h3>
                <p className="text-[rgba(9,8,15,0.6)] font-normal text-lg whitespace-nowrap mt-4">
                    {description}
                </p>
                <p className="font-semibold text-xl mt-2">Price: ${price}</p>
            </div>
            <div className="mt-4 md:mt-0 mr-8 md:mr-32 h-[30px] w-[30px]">
                <TbXboxXFilled />
            </div>
        </div>
    );
};

export default CartList;