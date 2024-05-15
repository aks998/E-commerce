import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../slices/cartSlice";
import pic from "./samsung.jpeg";
import pic1 from "./iphone12.jpeg";
import pic2 from "./iphone12pro.jpeg";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "iPhone 12 Pro",
      brand: "Apple",
      desc: "6.1-inch display",
      price: 999,
      image: pic2,
    },
    {
      id: 2,
      name: "iPhone 12",
      brand: "Apple",
      desc: "5.4-inch mini display",
      price: 699,
      image: pic1,
    },
    {
      id: 3,
      name: "Galaxy S",
      brand: "Samsung",
      desc: "6.5-inch display",
      price: 399,
      image: pic,
    },
  ];

  const handleAddToCart = (productId) => {
    const product = products.find((product) => product.id === productId);
    if (product) {
      dispatch(addToCart(product));
      navigate("/cart");
    }
  };

  return (
    <div className="home-container">
      <form>
        <h2>New Arrivals</h2>
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product">
              <h3>{product.name}</h3>
              <img src={product.image} alt={product.name} />
              <div className="details">
                <span>{product.desc}</span>
                <span className="price">${product.price}</span>
              </div>
              <button onClick={() => handleAddToCart(product.id)}>
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Home;
