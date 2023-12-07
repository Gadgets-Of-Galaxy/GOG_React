import "../styles/adminLists.css"
import { AdminSidebar } from "./AdminSidebar";
import {AdminOverview} from "./AdminOverview";

export const Products = ({ products }) => {
    return (
        <div>
            <AdminSidebar activeLink="productslist"/>
            <section className="orders-section">
                <div className="orders-content">
                    <h2 className="orders-heading">Product Details:</h2>
                    <br />
                    <table className="orders-table">
                        <thead>
                            <tr>
                                <th><b>Product Image</b></th>
                                <th><b>Product Code</b></th>
                                <th><b>Product Name</b></th>
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
                                <tr key={ product._id } className="orders-row">
                                    <td>
                                        <img src={ `/${product.imagePath}` } alt="Product" className="product-image" />
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
                                            <button className="delete-button" type="submit">Delete</button>
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
