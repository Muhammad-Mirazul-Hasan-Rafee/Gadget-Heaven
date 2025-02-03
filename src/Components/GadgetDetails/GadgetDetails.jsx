import { useLoaderData, useParams } from 'react-router-dom';
import { PiShoppingCart } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { addToGadgetList, addToWishList } from '../../Utility/addToDb';
import { ToastContainer, toast } from 'react-toastify';

const GadgetDetails = () => {
  const { product_id } = useParams();
  const id = parseInt(product_id);
  const data = useLoaderData();
  const gadget = data?.products?.flatMap(category => category.items).find(item => item.product_id === id);
  const { product_id: currentProductId, product_image, product_title, price, availability, description, specification, rating } = gadget;
  const notifyCart = () => toast("Added to your cart!");
  const notifyWish = () => toast("Added to your wishlist!");

  const handleAddToCart = (id) => {
    addToGadgetList(id);
    notifyCart();
  };
  const handleWishList = (id) => {
    addToWishList(id);
    notifyWish();
  };
  return (
    <div className="px-4 sm:px-6 md:px-8">
      <div className="relative hero min-h-screen bg-[#9538E2]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Product Details
            </h1>
            <p className="mt-5 font-semibold text-sm sm:text-base md:text-lg mx-auto">
              Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 -mt-28 rounded-3xl z-10 w-full max-w-[1000px] h-auto bg-white flex flex-col md:flex-row justify-between m-2 p-4 md:p-8 gap-x-4 md:gap-x-8 shadow-lg">

        <aside className="w-full md:w-1/2">
          <img className='w-full h-auto object-cover' src={product_image} alt={product_title} />
        </aside>

        <aside className='w-full md:w-1/2 h-auto'>
          <h4 className='text-xl sm:text-2xl md:text-3xl font-semibold'>{product_title}</h4>
          <h3 className='text-lg sm:text-xl font-semibold text-[rgba(9,8,15,0.8)] mt-4'>Price: $ {price}</h3>

          <section className='w-[87px] h-[50px] p-2 bg-[rgba(48,156,8,0.1)] rounded-lg mt-4'>
            <p className='text-[#309C08] font-normal text-center'>
              {(availability === true) ? 'In Stock' : 'Stock Out'}
            </p>
          </section>

          <p className='mt-4 text-[rgba(9,8,15,0.6)] text-sm sm:text-base leading-6'>{description}</p>

          <section className='mt-4'>
            <h3 className='text-lg font-bold'>Specification:</h3>
            <div>
              <ol>
                {specification.map((specific, idx) =>
                  <li key={idx}>
                    {specific}
                  </li>
                )}
              </ol>
            </div>
          </section>

          <h4 className='mt-4 font-bold text-lg'>Rating</h4>
          <div className="rating flex items-center">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" defaultChecked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
            <section className='bg-[rgba(9,8,15,0.05)] rounded-3xl ml-6'>{rating}</section>
          </div>

          <div className='mt-4 flex flex-col sm:flex-row gap-4'>
            <button onClick={() => handleAddToCart(product_id)} className='btn btn-outline flex items-center justify-center w-full sm:w-[240px] h-[48px] bg-[#9538E2] rounded-3xl'>
              <h6 className='font-bold text-white'>Add To Cart</h6>
              <span className='ml-2'><PiShoppingCart /></span>
            </button>
            
            <button
              onClick={() => handleWishList(product_id)}
              className="rounded-full w-10 h-10 flex items-center justify-center bg-slate-300 hover:bg-red-500 focus:outline-2 focus:outline-offset-2 focus:outline-red-600 active:bg-red-700 transition-all duration-200"
            >
              <CiHeart className="w-6 h-6 text-gray-700 hover:text-white active:text-white" />
            </button>
          

          </div>
        </aside>
      </div>
      <ToastContainer />
    </div>
  );
};

export default GadgetDetails;