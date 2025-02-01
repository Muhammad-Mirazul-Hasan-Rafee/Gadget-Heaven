import { useLoaderData, useParams } from 'react-router-dom';
import { PiShoppingCart} from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { addToGadgetList, addToWishList } from '../../Utility/addToDb';

const GadgetDetails = () => {
    const {product_id}= useParams();
    const id = parseInt(product_id);
    const data = useLoaderData();
//    const gadget = data.find(gadget => gadget.product_id === id);
    const gadget = data?.products?.flatMap(category => category.items).find(item => item.product_id === id);
    // console.log(gadget); 
    const {product_id: currentProductId , product_image , product_title , price , availability , description , specification , rating} = gadget;
// Maintain cart
    const handleAddToCart = (id)=>{
      /**
       * unsderstand what to store or save => product_id
       * where to store => db or something else
       * array , list , collection => 
       * check if the gadget is already in the cartList
       * if not , then add the gadget to the list
       * id yes , do not add the gadget 
       * 
        */ 
       addToGadgetList(id);
    };
// Maintain wishlist
    const handleWishList = (id) => {
      addToWishList(id);
    };
    return (
        <div>
                  {/* Upper layer of description*/}
                  <div className="relative hero min-h-screen bg-[#9538E2]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                      <div className="max-w-md">
                        <h1 className="text-5xl font-bold">
                        Product Details
                        </h1>
                        <p className="mt-5 font-semibold   mx-auto">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                      </div>
                    </div>
                  </div>
            
                  {/* Description */}
                  <div className="absolute left-1/2 -translate-x-1/2 -mt-28 rounded-3xl z-10 w-[1000px] h-[567px] bg-white flex justify-between m-2 p-8 gap-x-8 shadow-lg">

                  {/* Product Image */}
                  <aside><img className='w-full h-full object-cover' src={product_image} alt={product_title} /></aside>


                  <aside className='h-[503px] mr-3 rounded-lg'>

                    <h4 className='w-[373px] h-[35px] font-semibold text-3xl leading-relaxed'>{product_title}</h4>
                    <h3 className='font-semibold text-xl text-[rgba(9,8,15,0.8)] leading-7 mt-4'>Price: $ {price}</h3>

                    <section className='w-[87px] h-[50px] p-2 bg-[rgba(48,156,8,0.1)] rounded-lg mt-4'>
                      <p className='text-[#309C08] font-normal text-center'>
                       { (availability === true) ?  'In Stock' : 'Stock Out' }
                        </p>
                    </section>

                    <p className='mt-4 text-[rgba(9,8,15,0.6)] text-lg leading-8'>{description}</p>

                    <section className='mt-4'>
                    <h3 className='text-lg font-bold leading-8'>Specification:</h3>
                    <div>
                      <ol>
                      {specification.map((specific , idx) => 
                      <li key={idx}>
                        {specific}
                      </li>
                      )}
                      </ol>
                    </div>
                    </section>

                   
                    <h4 className='mt-4 font-bold text-lg'>Rating</h4>
                    <div className="rating">
                      
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" defaultChecked/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                    <section className='bg-[rgba(9,8,15,0.05)] rounded-3xl ml-6'>{rating}</section>
                    </div>

                    <div className='mt-4 flex gap-x-8'>
                      {/* add to cart button */}
                      <button onClick={()=>handleAddToCart(product_id)} className='W-[240px] h-[48px] flex bg-[#9538E2] rounded-3xl'>
                        <h6 className='font-bold text-lg text-white justify-center items-center mx-3 mt-2'>Add To Cart</h6>
                        <span className='w-6 h-6 mt-4 ml-4 justify-center items-center'><PiShoppingCart/></span>
                      </button>
                        
                      <button onClick={()=>handleWishList(product_id)} className='rounded-full'>
                        {/* wishlist */}
                        <CiHeart className='w-[22px] h-[22px] bg-slate-300 hover:bg-red-600 focus:outline-2 focus:outline-offset-2 focus:outline-red-600 active:bg-red-600  rounded-full'></CiHeart>
                      </button>
                    </div>
                  </aside>
                  
                
                  </div>
        </div>
    );
};

export default GadgetDetails;


















// const GadgetDetails = ({ data, productId }) => {
//     // Ensure you're working with an array, for example `data.products`
//     const product = data?.products?.flatMap(category => category.items).find(item => item.product_id === productId);
  
//     if (!product) {
//       return <div>Product not found</div>;
//     }
  
//     return (
//       <div>
//         <h1>{product.product_title}</h1>
//         <img src={product.product_image} alt={product.product_title} />
//         <p>{product.description}</p>
//         {/* Other product details */}
//       </div>
//     );
//   };
  