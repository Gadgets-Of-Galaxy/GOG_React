import "../styles/admin.css";

export const AdminSidebar = () => {
    return (
        <div className="sidebar">
            <a href="/admin">
                <div className="logo-details">
                    <i className='bx bxs-home-smile'></i>
                    <span className="logo_name">GOG</span>
                </div>
            </a>
            <ul className="nav-links">
                <li>
                    <a href="/admin" className="active">
                        <i className='bx bx-grid-alt'></i>
                        <span className="links_name">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="/admin/productDetails">
                        <i className='bx bx-box'></i>
                        <span className="links_name">Products</span>
                    </a>
                </li>
                <li>
                    <a href="/admin/userDetails">
                        <i className='bx bx-heart'></i>
                        <span className="links_name">Users</span>
                    </a>
                </li>
                <li>
                    <a href="/admin/ordersList">
                        <i className='bx bx-list-ul'></i>
                        <span className="links_name">Order list</span>
                    </a>
                </li>
                <li>
                    <a href="/admin/addProduct">
                        <i className='bx bx-pie-chart-alt-2'></i>
                        <span className="links_name">Add Product</span>
                    </a>
                </li>
                <li>
                    <a href="/admin">
                        <i className='bx bx-user'></i>
                        <span className="links_name">Employees</span>
                    </a>
                </li>
                <li>
                    <a href="/admin/messages">
                        <i className='bx bx-message'></i>
                        <span className="links_name">Messages</span>
                    </a>
                </li>
                <li className="log_out">
                    <a href="/logout">
                        <i className='bx bx-log-out'></i>
                        <span className="links_name">Log out</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}