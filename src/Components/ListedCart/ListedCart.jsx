import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredGadgetList } from '../../Utility/addToDb';
import CartList from '../CartList/CartList.jsx';

const ListedCart = ({setTotalCost}) => {
    const [gadgetList , setGadgetList] = useState([]);
    const allCartGadgets = useLoaderData();
    
   useEffect(()=>{
         const storedGadgetList = getStoredGadgetList();
         const storedGadgetListInt = storedGadgetList.map(id => parseInt(id));
         const allCartItems = allCartGadgets.products.flatMap(category => category.items);

        // ekta jinis hole find , besi jinis hole filter 
        const cartGadgetList = allCartItems.filter(cartGadget => storedGadgetListInt.includes(parseInt(cartGadget.product_id))); 
        //console.log(cartGadgetList);
        setGadgetList(cartGadgetList);

        // Total cost calculation
        const totalAmount = cartGadgetList.reduce((sum , item) => sum + parseFloat(item.price) , 0);
        setTotalCost(totalAmount);   // ei function ta props hisebe Dashboard theke asbe
      
     },[allCartGadgets , setTotalCost]);
    return (
        <div className='mx-6 p-8 rounded-2xl mt-8 space-y-6'>
            
            {
                gadgetList.map((cartList , idx) => <CartList cartList={cartList} key={idx}></CartList>)
            }
            
        </div>
    );
};

export default ListedCart;