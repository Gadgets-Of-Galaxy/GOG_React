import "../styles/admin.css";
import { AdminSidebar } from "./AdminSidebar";

export const Products = ({ products }) => {
    return (
        <div>
            <AdminSidebar />
            <section className="home-section">
                <nav>
                    <div className="sidebar-button">
                        <i className='bx bx-menu sidebarBtn'></i>
                        <span className="dashboard">Products</span>
                    </div>
                    <div className="search-box">
                        <input type="text" placeholder="Search..." />
                        <i className='bx bx-search'></i>
                    </div>
                </nav>

                <div className="home-content">
                    <div className="overview-boxes">
                        <div className="box">
                            <div className="right-side">
                                <div className="box-topic">Total Order</div>
                                <div className="number">1245</div>
                                <div className="indicator">
                                    <i className='bx bx-up-arrow-alt'></i>
                                    <span className="text">Up from yesterday</span>
                                </div>
                            </div>
                            <i className='bx bx-cart-alt cart'></i>
                        </div>
                        <div className="box">
                            <div className="right-side">
                                <div className="box-topic">Total Sales</div>
                                <div className="number">879</div>
                                <div className="indicator">
                                    <i className='bx bx-up-arrow-alt'></i>
                                    <span className="text">Up from yesterday</span>
                                </div>
                            </div>
                            <i className='bx bxs-cart-add cart two'></i>
                        </div>
                        <div className="box">
                            <div className="right-side">
                                <div className="box-topic">Total Profit</div>
                                <div className="number">INR 5,02,876</div>
                                <div className="indicator">
                                    <i className='bx bx-up-arrow-alt'></i>
                                    <span className="text">Up from yesterday</span>
                                </div>
                            </div>
                            <i className='bx bx-cart cart three'></i>
                        </div>
                        <div className="box">
                            <div className="right-side">
                                <div className="box-topic">Total Return</div>
                                <div className="number">11,086</div>
                                <div className="indicator">
                                    <i className='bx bx-down-arrow-alt down'></i>
                                    <span className="text">Down From Today</span>
                                </div>
                            </div>
                            <i className='bx bxs-cart-download cart four'></i>
                        </div>
                    </div>

                    <h2>Products Details:</h2>
                    <br />
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th><b>Product Image</b></th>
                                <th><b>Productcode</b></th>
                                <th><b>Product name</b></th>
                                <th><b>Brand</b></th>
                                <th><b>Sold</b></th>
                                <th><b>Available</b></th>
                                <th><b>MRP</b></th>
                                <th><b>Current Price</b></th>
                                <th><b>Action</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            { products.map((product) => (
                                <tr key={ product._id }>
                                    <td>
                                        <img src={ `/${product.imagePath}` } alt="img" />
                                    </td>
                                    <td>{ product.productCode }</td>
                                    <td>{ product.title }</td>
                                    <td>{ product.brand }</td>
                                    <td>{ product.sold }</td>
                                    <td>{ product.stock }</td>
                                    <td>{ product.mrp }</td>
                                    <td>{ product.price }</td>
                                    <td>
                                        <a href={ `/admin/deleteProduct/${product._id}` }>
                                            <button name="delete" type="submit">Delete</button>
                                        </a>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>

                </div>
            </section>
        </div>
    );
}