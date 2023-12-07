import "../styles/adminLists.css"
import { AdminSidebar } from "./AdminSidebar";
import { AdminOverview } from "./AdminOverview";

export const OrdersList = ({ orders }) => {
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    let serialNumber = 1;

    return (
        <div>
            <AdminSidebar activeLink="orderslist" />
            <section className="orders-section">
                <div className="orders-content">
                    <h2 className="orders-heading">Orders List:</h2>
                    <br />
                    <table className="orders-table">
                        <thead>
                            <tr>
                                <th><b>S.No</b></th>
                                <th><b>Product Code</b></th>
                                <th><b>Product Image</b></th>
                                <th><b>Product Name</b></th>
                                <th><b>Quantity</b></th>
                                <th><b>Price</b></th>
                                <th><b>Order Placed</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders && orders.map((checkout) => (
                                checkout.items.map((item, itemIndex) => (
                                    <tr key={itemIndex} className="orders-row">
                                        <td>{serialNumber++}</td>
                                        <td>{item.productCode}</td>
                                        <td>
                                            <img src={`/${item.imagePath}`} alt="Product" className="product-image" />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.qty}</td>
                                        <td>{item.price}</td>
                                        <td>{formatDate(checkout.createdAt)}</td>
                                    </tr>
                                ))
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};
