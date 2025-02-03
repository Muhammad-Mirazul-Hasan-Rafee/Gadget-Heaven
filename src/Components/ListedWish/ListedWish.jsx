import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredWishList } from '../../Utility/addToDb';
import WishList from '../WishList/WishList';

const ListedWish = () => {
    const [wishList , setWishList] = useState([]);
    const allWishGadgets = useLoaderData();

    useEffect(()=>{
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        const allWishItems = allWishGadgets.products.flatMap(categoryName => categoryName.items);
        //console.log(allWishItems);
        

        // to check one item -- use find()
        // to check multiple item -- use filter()
        const wishGadgetList = allWishItems.filter(wishGadget => storedWishListInt.includes(parseInt(wishGadget.product_id)));
        //console.log(wishGadgetList);
        setWishList(wishGadgetList);


    } , [allWishGadgets]);
    return (
        <div className='mx-6 p-8 rounded-2xl mt-8 space-y-6 max-w-full sm:mx-4 md:mx-8 lg:mx-12 xl:mx-20'>
           {
            wishList.map((wishlist , idx) => <WishList key={idx} wishlist={wishlist}></WishList>)
           }
        </div>
    );
};

export default ListedWish;