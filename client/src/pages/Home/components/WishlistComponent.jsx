import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export const WishlistComponent = ({ user }) => {
    const navigate = useNavigate();
    const [wishlists, setWishlists] = useState([]);

    useEffect(() => {
        const fetchWishlists = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/wishlists/${user._id}`);
                // console.log(response.data.wishlists);
                setWishlists(response.data.wishlists || []);
            } catch (error) {
                console.error('Error fetching wishlists:', error);
            }
        };

        fetchWishlists();
    }, [user._id]);

    return (
        <div className="wishlist-container">
            <div className="wishlist-content">
                <h1>Wishlists</h1>
                { wishlists.length === 0 ? (
                    <p>No wishlists found</p>
                ) : (
                    <div>
                        { Array.isArray(wishlists) && wishlists.map((wishlist) => (
                            <div key={ wishlist._id } className="wishlist-item">
                                <h3>{ wishlist.name }</h3>
                                <ul className="wishlist-items">
                                    <li className="wishlist-header">
                                        <span>Image</span>
                                        <span>Title</span>
                                        <span>Price</span>
                                        {/* <span>Actions</span> */}
                                    </li>
                                    { Array.isArray(wishlist.items) && wishlist.items.map((item) => (
                                        <li key={item.productId} className="wishlist-product">
                                            <img src={item.imagePath} alt={item.title} className="wishlist-image" />
                                            <span className="wishlist-title">{item.title}</span>
                                            <span className="wishlist-price">{item.price}</span>
                                            <div className="wishlist-actions">
                                                <button onClick={() => addToCart(item)}>Add to Cart</button>
                                                <button onClick={() => removeFromWishlist(item)}>Remove</button>
                                            </div>
                                        </li>
                                        // Display other wishlist item details as needed
                                    )) }
                                </ul>
                            </div>
                        )) }

                    </div>
                ) }
            </div>
        </div>
    );
}