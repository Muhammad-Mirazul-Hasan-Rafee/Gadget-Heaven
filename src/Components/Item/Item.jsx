import { Link } from "react-router-dom";

const Item = ({ item }) => {
    const { product_image, product_title, price, product_id } = item;
    return (
        <div key={product_id} className="mx-2 mt-4 shadow-xl">
            <div className=" bg-slate-50">
                <img
                    className="w-[190px] h-[180px] justify-center items-center mx-auto object-fill"
                    src={product_image}
                    alt={product_title}
                />
                <h4 className="font-semibold text-xl mt-2">{product_title}</h4>
                <h3 className="text-[#09080F] mt-1">Price: {price}</h3>
              <Link to={`/gadgets/${product_id}`}>
              <button className="w-[130px] h-[40px] btn btn-outline bg-slate-950 mt-1 mb-2">
                   <p className="font-bold text-white">View Details</p>
                </button>
              </Link>
            </div>
        </div>
    );
};

export default Item;
