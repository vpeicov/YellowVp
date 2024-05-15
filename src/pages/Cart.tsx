import { FC } from "react";
import { IProduct } from "./ProductList";
import "./Cart.css";

interface Props {
    cartItems: IProduct[];
}

const Cart: FC<Props> = ({ cartItems }) => {
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div style={{
            background: 'lightblue',
            border: '1px solid black',
            padding: 20
        }}>
            {cartItems.length === 0 ? (
                <p style={{ color: 'red' }}>No products yet</p>
            ) : (
                <>
                    <h2>Total: {calculateTotalPrice()} mdl</h2>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart_container">
                            <img src={item.image} alt={item.name} className="cart_image" />
                            <div className="cart_info">
                                <h3>{item.name}</h3>
                                <p>Description: {item.description}</p>
                                <p>Price: {item.price} mdl</p>
                                <p>Category: {item.category}</p>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default Cart;
