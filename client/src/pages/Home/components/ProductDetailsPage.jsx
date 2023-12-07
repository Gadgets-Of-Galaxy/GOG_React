import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faStarHalfAlt as halfStar, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { Header } from "../../CommonComponents/components/Header";
import "../styles/ProductDetailsPage.css";

const ProductDetailsPage = ({user}) => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/products/${productId}`);
                setProduct(response.data.product);
                setCurrentImage(response.data.product.imagePath);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };

        fetchProduct();
    }, [productId]);

    const handleThumbnailClick = (imagePath) => {
        setCurrentImage(imagePath);
    };
    const maxRating = 5;
    const solidStars = product ? Math.floor(product.rating) : 0;
    const hasHalfStar = product ? product.rating % 1 !== 0 : false;
    const stars = []
    for (let i = 1; i <= maxRating; i++) {
        if (i <= solidStars) {
            stars.push(
                <FontAwesomeIcon key={ i } icon={ solidStar } className="solid-star" />
            );
        } else if (hasHalfStar && i === solidStars + 1) {
            stars.push(
                <FontAwesomeIcon key={ i } icon={ halfStar } className="half-star" />
            );
        } else {
            stars.push(
                <FontAwesomeIcon key={ i } icon={ regularStar } className="regular-star" />
            );
        }
    }

    const addToCart = async (item) => {
        try {
            // console.log(item);
            const response = await axios.post(`http://localhost:5000/api/carts/addToCart`, {
                productId: item._id,
                userId: user._id,
            });
            if (response.status === 200) {
                window.alert("Product added to cart successfully")
            }
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };



    return (


        <div>
            <Header />
            { product && (
                <div className="crd-wrpr">
                    <div className="crd">
                        <div className="prd-imgs">
                            <div className="img-dsply">
                                <img src={ `/${currentImage}` } alt="" />
                            </div>
                            <div className="img-shwcse">
                                <img
                                    src={ `/${product.imagethumbnail1}` }
                                    alt=""
                                    onClick={ () => handleThumbnailClick(product.imagethumbnail1) }
                                />
                                <img
                                    src={ `/${product.imagethumbnail2}` }
                                    alt=""
                                    onClick={ () => handleThumbnailClick(product.imagethumbnail2) }
                                />
                                <img
                                    src={ `/${product.imagethumbnail3}` }
                                    alt=""
                                    onClick={ () => handleThumbnailClick(product.imagethumbnail3) }
                                />
                            </div>
                        </div>
                        <div className="prd-ctnt">
                            <h3 className="prd-ttl">{ product.title }</h3>
                            <div className="prd-rating">
                                <div className="rating-stars">
                                    <p>
                                        <span>{ stars }</span> ({ product.rating })
                                    </p>
                                </div>
                            </div>
                            <div>

                                <div className="prd-price">
                                    <p className="lst-prc">
                                        INR.{ product.price }<span>INR.{ product.mrp }</span>
                                    </p>
                                </div>
                                <div className="prd-dtl">
                                    <h2>About this item:</h2>
                                    <p>{ product.description }</p>
                                    <h2 className="feauters">Feauters</h2>
                                    <ul>

                                        <li>{ product.features1 }</li>
                                        <li>{ product.features2 }</li>
                                        <li>{ product.features3 }</li>
                                        <li>{ product.features4 }</li>
                                    </ul>
                                </div>
                                <div className="pchs-info">
                                    <button
                                        className="add-wshlst-btn"
                                        id="addtocart"
                                        data-product-id-w={ product._id }
                                        
                                    >
                                        <FontAwesomeIcon class="heart-icon-single" icon={ faHeart } />
                                        Add to Wishlist
                                    </button>
                                    <button
                                        className="add-cr-btn"
                                        id="addtowishlist"
                                        data-product-id-c={ product._id }
                                        onClick={() => addToCart(product)}
                                    >
                                        <FontAwesomeIcon class="cart-icon-single" icon={ faCartShopping } />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) }
        </div>
    )
}




export default ProductDetailsPage;