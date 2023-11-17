import "../styles/admin.css";
import { AdminSidebar } from "./AdminSidebar";
import {AdminOverview} from "./AdminOverview";

export const OrdersList = ({ orders }) => {
    return (
        <div>
            <AdminSidebar />
            <section className="home-section">
            <div className="home-content">
                <AdminOverview />
                <h2>Orders List:</h2>
                <br />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th><b>Product Code</b></th>
                            <th><b>Product Image</b></th>
                            <th><b>Product Name</b></th>
                            <th><b>Quantity</b></th>
                            <th><b>Price</b></th>
                            <th><b>Order Placed</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((checkout) => (
                            checkout.items.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.productCode}</td>
                                    <td><img src={`/${item.imagePath}`} alt="img" /></td>
                                    <td>{item.title}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.price}</td>
                                    {/* <td>{new Date(checkout.createdAt).toDateString()}</td> */}
                                </tr>
                            ))
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
        </div>
    );
}