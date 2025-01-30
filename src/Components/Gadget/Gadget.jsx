import Item from "../Item/Item";

const Gadget = ({ category }) => {
  return (
    <div className="grid grid-cols-3 gap-y-4 mx-h-200px]">
      {category.items.map((item) => (
        <Item key={item.product_id} item={item}></Item>
      ))}
    </div>
  );
};

export default Gadget;
