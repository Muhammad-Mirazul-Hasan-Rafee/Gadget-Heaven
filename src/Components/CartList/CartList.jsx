import React from 'react';

const CartList = ({cartList}) => {
    const {product_image , product_title , description , price} = cartList;
    return (
        <div className='border border-blue-950 flex justify-between items-center bg-slate-100'>
            <div>
                <img className='w-[200px] h-[188px]' src={product_image} alt={product_title} />
            </div>
            <div className='w-[200px] h-[188px] mr-[600px]'>
                  <h3 className='font-semibold text-2xl'>{product_title}</h3>
                  <p className='text-[rgba(9,8,15,0.6)] font-normal text-lg whitespace-nowrap mt-4'>{description}</p>
                  <p className='font-semibold text-xl mt-2'>Price: ${price}</p>
            </div>
            <div className='border-red-500'>
                cross
            </div>
        </div>
    );
};

export default CartList;