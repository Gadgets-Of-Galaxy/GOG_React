import styles from "../styles/ProductDetailsPage.module.css";
import "../styles/global.css"
  import { Header } from "../../CommonComponents/components/Header";
import { Footer } from "../../CommonComponents/components/Footer";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetailsPage = () => {
  const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/products/${productId}`);
                setProduct(response.data);
                console.log(product);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProduct();
    }, [productId]);
  return (
    <div className={styles.productDetailsPage}>
      <Header/>
      <div className={styles.image63Wrapper}>
        <img className={styles.image63Icon} alt="" src="/image-63@2x.png" />
      </div>
      <div className={styles.image57Wrapper}>
        <img className={styles.image57Icon} alt="" src="/image-57@2x.png" />
      </div>
      <div className={styles.image58Wrapper}>
        <img className={styles.image58Icon} alt="" src="/image-58@2x.png" />
      </div>
      <div className={styles.image61Wrapper}>
        <img className={styles.image61Icon} alt="" src="/image-61@2x.png" />
      </div>
      <div className={styles.productDetailsPageItem} />
      <img className={styles.image59Icon} alt="" src="/image-59@2x.png" />
      <div className={styles.havicHvG92}>Havic HV G-92 Gamepad</div>
      <div className={styles.div}>$192.00</div>
      <div className={styles.frameGroup}>
        <div className={styles.fourStarParent}>
          <div className={styles.fourStar}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img className={styles.vectorIcon4} alt="" src="/vector1.svg" />
          </div>
          <div className={styles.account}>(150 Reviews)</div>
        </div>
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <div className={styles.inStock}>In Stock</div>
        </div>
      </div>
      <div
        className={styles.playstation5Controller}
      >{`PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.`}</div>
      <div className={styles.sizeParent}>
        <div className={styles.size}>Size:</div>
        <div className={styles.frameContainer}>
          <div className={styles.xsWrapper}>
            <div className={styles.xs}>XS</div>
          </div>
          <div className={styles.xsWrapper}>
            <div className={styles.s}>S</div>
          </div>
          <div className={styles.mWrapper}>
            <div className={styles.m}>M</div>
          </div>
          <div className={styles.xsWrapper}>
            <div className={styles.l}>L</div>
          </div>
          <div className={styles.xsWrapper}>
            <div className={styles.xl}>XL</div>
          </div>
        </div>
      </div>
      <img className={styles.underlineIcon} alt="" src="/underline2.svg" />
      <div className={styles.frameDiv}>
        <img className={styles.frameItem} alt="" src="/frame-906.svg" />
        <div className={styles.wrapper}>
          <div className={styles.div1}>2</div>
        </div>
        <img className={styles.frameInner} alt="" src="/frame-907.svg" />
      </div>
      <div className={styles.button}>
        <div className={styles.addToCart}>Buy Now</div>
      </div>
      <img
        className={styles.productDetailsPageInner}
        alt=""
        src="/frame-904.svg"
      />
      <div className={styles.underlineParent}>
        <img className={styles.underlineIcon1} alt="" src="/underline3.svg" />
        <div className={styles.iconDeliveryParent}>
          <img className={styles.iconDelivery} alt="" src="/icondelivery.svg" />
          <div className={styles.freeDeliveryParent}>
            <div className={styles.addToCart}>Free Delivery</div>
            <div className={styles.enterYourPostal}>
              Enter your postal code for Delivery Availability
            </div>
          </div>
        </div>
        <div className={styles.iconReturnParent}>
          <img className={styles.iconDelivery} alt="" src="/iconreturn.svg" />
          <div className={styles.freeDeliveryParent}>
            <div className={styles.addToCart}>Return Delivery</div>
            <div className={styles.free30DaysContainer}>
              {`Free 30 Days Delivery Returns. `}
              <span className={styles.details}>Details</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.categoryRectangleParent}>
          <div className={styles.categoryRectangle}>
            <div className={styles.categoryRectangleChild} />
          </div>
          <div className={styles.relatedItem}>Related Item</div>
        </div>
        <div className={styles.cartWithFlatDiscountParent}>
          <div className={styles.cartWithFlatDiscount}>
            <div className={styles.discountPercentParent}>
              <div className={styles.discountPercent}>
                <div className={styles.div2}>-40%</div>
              </div>
              <div className={styles.fillHeartParent}>
                <img
                  className={styles.fillHeartIcon}
                  alt=""
                  src="/fill-heart.svg"
                />
                <img
                  className={styles.fillHeartIcon}
                  alt=""
                  src="/fill-eye.svg"
                />
              </div>
              <div className={styles.g922500x5001Wrapper}>
                <img
                  className={styles.g922500x5001Icon}
                  alt=""
                  src="/g922500x500-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.havitHvG92GamepadParent}>
              <div className={styles.addToCart}>HAVIT HV-G92 Gamepad</div>
              <div className={styles.parent}>
                <div className={styles.addToCart}>$120</div>
                <div className={styles.div4}>$160</div>
              </div>
              <div className={styles.fiveStarParent}>
                <div className={styles.fourStar}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
                <div className={styles.div5}>(88)</div>
              </div>
            </div>
          </div>
          <div className={styles.cartWithFlatDiscount}>
            <div className={styles.discountPercentParent}>
              <div className={styles.discountPercent}>
                <div className={styles.div2}>-35%</div>
              </div>
              <div className={styles.rectangleDiv} />
              <div className={styles.addToCart1}>Add To Cart</div>
              <div className={styles.fillHeartParent}>
                <img
                  className={styles.fillHeartIcon}
                  alt=""
                  src="/fill-heart.svg"
                />
                <img
                  className={styles.fillHeartIcon}
                  alt=""
                  src="/fill-eye.svg"
                />
              </div>
              <div className={styles.ak90001500x5001Wrapper}>
                <img
                  className={styles.ak90001500x5001Icon}
                  alt=""
                  src="/ak90001500x500-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.havitHvG92GamepadParent}>
              <div className={styles.addToCart}>AK-900 Wired Keyboard</div>
              <div className={styles.parent}>
                <div className={styles.addToCart}>$960</div>
                <div className={styles.div4}>$1160</div>
              </div>
              <div className={styles.fiveStarParent}>
                <div className={styles.fourStar}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img
                    className={styles.vectorIcon4}
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className={styles.div5}>(75)</div>
              </div>
            </div>
          </div>
          <div className={styles.cartWithFlatDiscount}>
            <div className={styles.discountPercentParent}>
              <div className={styles.discountPercent}>
                <div className={styles.div2}>-30%</div>
              </div>
              <div className={styles.fillHeartParent}>
                <img
                  className={styles.fillHeartIcon}
                  alt=""
                  src="/fill-heart.svg"
                />
                <img
                  className={styles.fillHeartIcon}
                  alt=""
                  src="/fill-eye.svg"
                />
              </div>
              <div className={styles.g922500x5001Wrapper}>
                <img
                  className={styles.g27cq4500x5001Icon}
                  alt=""
                  src="/g27cq4500x500-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.havitHvG92GamepadParent}>
              <div className={styles.addToCart}>IPS LCD Gaming Monitor</div>
              <div className={styles.parent}>
                <div className={styles.addToCart}>$370</div>
                <div className={styles.div4}>$400</div>
              </div>
              <div className={styles.fiveStarParent}>
                <div className={styles.fourStar}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
                <div className={styles.div5}>(99)</div>
              </div>
            </div>
          </div>
          <div className={styles.cart}>
            <div className={styles.discountPercentParent}>
              <div className={styles.fillHeartParent}>
                <img
                  className={styles.fillHeartIcon}
                  alt=""
                  src="/fill-heart.svg"
                />
                <img
                  className={styles.fillHeartIcon}
                  alt=""
                  src="/fill-eye.svg"
                />
              </div>
              <div className={styles.gammaxxL240Argb1500x5001Wrapper}>
                <img
                  className={styles.gammaxxL240Argb1500x5001Icon}
                  alt=""
                  src="/gammaxxl240argb1500x500-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.freeDeliveryParent}>
              <div className={styles.addToCart}>RGB liquid CPU Cooler</div>
              <div className={styles.parent}>
                <div className={styles.addToCart}>$160</div>
                <div className={styles.div4}>$170</div>
              </div>
              <div className={styles.fiveStarParent}>
                <div className={styles.fourStar}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img
                    className={styles.starHalfFilledIcon}
                    alt=""
                    src="/starhalffilled.svg"
                  />
                </div>
                <div className={styles.div5}>(65)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.underlineGroup}>
          <img className={styles.underlineIcon2} alt="" src="/underline.svg" />
          <div className={styles.frameWrapper}>
            <div className={styles.iconCopyrightParent}>
              <img
                className={styles.starHalfFilledIcon}
                alt=""
                src="/iconcopyright1.svg"
              />
              <div className={styles.exclusivegmailcom}>
                Copyright Rimel 2022. All right reserved
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
