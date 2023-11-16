import "../styles/admin.css";
import { AdminSidebar } from "./AdminSidebar";

export const AdminDashboard = () => {
    return (
        <div>
            <AdminSidebar />
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