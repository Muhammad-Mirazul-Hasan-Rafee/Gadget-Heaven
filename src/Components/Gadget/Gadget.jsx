import Item from "../Item/Item";

const Gadget = ({ category }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 mx-h-200px]">
      {category.items.map((item) => (
        <Item className="w-auto md:w-[322px] h-[380px]" key={item.product_id} item={item}></Item>
      ))}
    </div>
  );
};

export default Gadget;
