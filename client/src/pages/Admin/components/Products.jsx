import "../styles/admin.css";
import { AdminSidebar } from "./AdminSidebar";
import {AdminOverview} from "./AdminOverview";

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
                    <AdminOverview/>

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