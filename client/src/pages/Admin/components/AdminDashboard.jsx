import "../styles/admin.css";
import { AdminSidebar } from "./AdminSidebar";
import {AdminOverview} from "./AdminOverview";

export const AdminDashboard = () => {
    return (
        <div>
            <AdminSidebar activeLink="adminDashboard"/>
            <section className="home-section">
                <nav>
                    <div className="sidebar-button">
                        <i className='bx bx-menu sidebarBtn'></i>
                        <span className="dashboard">Dashboard</span>
                    </div>
                    <div className="search-box">
                        <input type="text" placeholder="Search..." />
                        <i className='bx bx-search'></i>
                    </div>
                </nav>

                <div className="home-content">
                    <AdminOverview />
                    <div className="sales-boxes">
                        <div className="recent-sales box">
                            <div className="title">Recent Sales</div>
                            <div className="sales-details">
                                <ul className="details">
                                    <li className="topic">Date</li>

                                </ul>
                                <ul className="details">
                                    <li className="topic">Customer</li>

                                </ul>
                                <ul className="details">
                                    <li className="topic">Total</li>

                                </ul>
                            </div>
                            <div className="button">
                                <a href="/admin/myOrders">See All</a>
                            </div>
                        </div>
                        <div className="top-sales box">
                            <div className="title">Top Selling Products</div>
                            <ul className="top-sales-details">

                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}