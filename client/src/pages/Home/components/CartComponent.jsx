import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../../CommonComponents/components/Header";

export const CartComponent = ({ user }) => {
    const [cartItems, setCartItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/carts/${user._id}`);
                setCartItems(response.data.cartItems || []);
                calculateSubtotal(response.data.cartItems || []);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        if (user && user._id) {
            fetchCartItems();
        }
    }, [user]);

    const calculateSubtotal = (items) => {
        const total = items.reduce((acc, item) => {
            const itemTotal = item.price * item.qty;
            return acc + itemTotal;
        }, 0);
        setSubtotal(total);
        const totalQty = items.reduce((acc, item) => acc + item.qty, 0);
        setTotalQuantity(totalQty);
    };

    const handleCheckout = async () => {
        try {
            const checkoutData = {
                totalQty: totalQuantity,
                totalCost: subtotal,
                items: cartItems.map(item => ({
                    _id: item._id,
                    qty: item.qty,
                    price: item.price,
                    productId: item.productId,
                    title: item.title,
                    imagePath: item.imagePath,
                    productCode: item.productCode
                })),
                user: user._id
            };
            const response = await axios.post('http://localhost:5000/api/checkout', checkoutData);
            console.log('Checkout successful!', response.data);
            setCartItems([]);
            setSubtotal(0);
            setTotalQuantity(0);

        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    return (
        <div className="cart-container">
            <div className="cart">
            <Header/>
            <h1>Cart</h1>
            { cartItems.length === 0 ? (
            <p className="nullmessage">No items in cart</p>
            ) : (
                <>
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th className="cart-image-column">Image</th>
                                <th className="cart-title-column">Title</th>
                                <th className="cart-price-column">Price</th>
                                <th className="cart-qty-column">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            { cartItems.map((item, index) => (
                                <tr key={ index }>
                                    <td>
                                        <img src={ item.imagePath } alt={ item.title } className="cart-item-image" />
                                    </td>
                                    <td className="cart-title">{ item.title }</td>
                                    <td className="cart-price">Rs.{ item.price }</td>
                                    <td className="cart-qty">{ item.qty }</td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                    <div className="cart-summary">
                        <div className="summary-details">
                            <p className="subtotal">Subtotal: Rs.{ subtotal }</p>
                            <p className="total-quantity">Total Quantity: { totalQuantity }</p>
                        </div>
                        <button className="checkout-button" onClick={ handleCheckout }>Checkout</button>
                    </div>
                </>
            ) }
            </div>
        </div>
    );
};
