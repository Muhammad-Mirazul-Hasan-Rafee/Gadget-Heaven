import { TbXboxXFilled } from "react-icons/tb";
const WishList = ({wishlist}) => {

    const {product_image , product_title , description , price} = wishlist;
        return (
            <div className='flex justify-between items-center bg-slate-100 rounded-xl'>
                <div>
                    <img className='w-[200px] h-[188px]' src={product_image} alt={product_title} />
                </div>
                <div className='w-[200px] h-[188px] mr-[600px]'>
                      <h3 className='font-semibold text-2xl'>{product_title}</h3>
                      <p className='text-[rgba(9,8,15,0.6)] font-normal text-lg whitespace-nowrap mt-4'>{description}</p>
                      <p className='font-semibold text-xl mt-2'>Price: ${price}</p>
                </div>
                <div className=' mr-32 h-[30px] w-[30px]'>
                <TbXboxXFilled />
                </div>
            </div>
        );
};

export default WishList;