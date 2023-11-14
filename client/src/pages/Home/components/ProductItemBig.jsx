import { useState, useEffect } from 'react';
import favorite from "../assets/favorite.png";
import "../styles/ProductItemBig.css";
import axios from 'axios';


export const ProductItemBig = (props) => {
    const [showWishlistOptions, setShowWishlistOptions] = useState(false);
    const [wishlistName, setWishlistName] = useState('');
    const [createNewWishlist, setCreateNewWishlist] = useState(true);
    const [userWishlists, setUserWishlists] = useState([]);
    const [useExistingWishlist, setUseExistingWishlist] = useState(false);
    const [selectedWishlist, setSelectedWishlist] = useState('');

    useEffect(() => {
        fetchUserWishlists();
    }, []);

    const fetchUserWishlists = async () => {
        try {
            // const userId = '654bce06b876608529edda9d';
            const response = await axios.get('http://localhost:5000/api/wishlists/654bce06b876608529edda9d');
            if (response.status === 200) {
                // console.log(response.data.wishlists[0]);
                // console.log(response.data);
                setUserWishlists(response.data);
            } else {
                console.error('Failed to fetch user wishlists.');
            }
        } catch (error) {
            console.error('Error while fetching user wishlists:', error);
        }
    };

    const handleWishlistClick = () => {
        fetchUserWishlists();
        setShowWishlistOptions(!showWishlistOptions);
    };

    const handleCreateNewWishlist = () => {
        setCreateNewWishlist(true);
    };

    const handleUseExistingWishlist = () => {
        setCreateNewWishlist(false);
        setUseExistingWishlist(true);
    };


    const handleSaveWishlist = async () => {
        if (createNewWishlist) {
            try {
                const userId = '654bce06b876608529edda9d';
                const response = await axios.post('http://localhost:5000/api/wishlists/create', {
                    userId: userId,
                    name: wishlistName,
                });

                if (response.status === 200) {
                    console.log('Wishlist created successfully');
                } else {
                    console.error('Failed to create wishlist.');
                }
            } catch (error) {
                console.error('Error while creating wishlist:', error);
            }
        } else {
            if (selectedWishlist) {
                try {
                    const productName = 'mobile';
                    const response = await axios.post('http://localhost:5000/api/wishlists/addProduct', {
                        wishlistId: selectedWishlist,
                        productName: productName,
                    });

                    if (response.status === 200) {
                        console.log('Product added to wishlist successfully');
                    } else {
                        console.error('Failed to add product to wishlist.');
                    }
                } catch (error) {
                    console.error('Error while adding product to wishlist:', error);
                }
            } else {
                console.error('Please select a wishlist');
            }
        }
        setShowWishlistOptions(false);
    };

    return (
        <div className="product-item">
            <div className="product-thumbnail">
                <img src={props.imagePath}
                    alt="product-thumbnail"
                    className="deal-image"
                />
                <div className="product-wishlist">
                    <img src={ favorite } alt="favorite" onClick={ handleWishlistClick } />
                </div>
                { showWishlistOptions && (
                    <div className="wishlist-options active">
                        <button onClick={ handleCreateNewWishlist }>
                            <i className="fas fa-plus"></i> Create New Wishlist
                        </button>

                        <button onClick={ handleUseExistingWishlist }>
                            <i className="fas fa-list-alt"></i> Use Existing Wishlist
                        </button>
                        { useExistingWishlist ? (
                            <select value={ selectedWishlist } onChange={ (e) => setSelectedWishlist(e.target.value) }>
                                <option value="">Select an existing wishlist</option>
                                { Array.isArray(userWishlists.wishlists) && userWishlists.wishlists.map((wishlist) => (
                                    <option key={ wishlist._id } value={ wishlist._id }>
                                        { wishlist.name }
                                    </option>
                                )) }
                            </select>
                        ) : (
                            <input
                            className='input-name'
                                type="text"
                                placeholder="Enter wishlist name"
                                value={ wishlistName }
                                onChange={ (e) => setWishlistName(e.target.value) }
                            />
                        ) }
                        <button onClick={ handleSaveWishlist } className='save-btn'>Save to Wishlist</button>
                    </div>
                ) }
            </div>
            <div className="product-content">
                <div className="product-title-wrap">
                    <h3 className="product-title">{props.title}</h3>
                    <div className="product-price">
                        <span className="text-span">Rs.</span>2000
                    </div>
                </div>
                <div className="product-desc">Table with air purifier, stained veneer/black</div>
                <div className="product-rating">
                    <div className="star-wrap">
                        <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg"
                            alt="star"
                            className="product-star"

                        />
                        <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg"
                            alt="star"
                            className="product-star"

                        />
                        <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg"
                            alt="star"
                            className="product-star"

                        />
                    </div>
                    <div className="total-rating">(121)</div>
                </div>
                <div className="button-wrap">
                    <a href="#" className="primary-button cart-button border">
                        <div className="button-content">
                            Add To Cart
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}