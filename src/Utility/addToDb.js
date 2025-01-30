// Where to add(For Add To Cart button)
const getStoredGadgetList = () =>{
    // Gadget-List
    const storedListStr = localStorage.getItem('Gadget-List');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return[];
    }
};
// what to add((For Add To Cart button))
const addToGadgetList = (id) => {
    const storedList = getStoredGadgetList();
    if(storedList.includes(id)){
        console.log(id , 'cart item already here !!')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('Gadget-List' , storedListStr);
    }
};
// Where to add(For Wishlist)
const getStoredWishList = ()=>{
    // Wish-List
    const storedListStr = localStorage.getItem('Wish-List');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }

};
// what to add(For Wishlist))
const addToWishList = (id)=>{
    const storedList = getStoredWishList();
    if(storedList.includes(id)){
        console.log(id , 'wishlist here !!');
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('Wish-List' , storedListStr);
    }
};



export {getStoredGadgetList , addToGadgetList , getStoredWishList , addToWishList};