import "../styles/adminLists.css"
import { AdminOverview } from "./AdminOverview";
import { AdminSidebar } from "./AdminSidebar";

export const Users = ({ users }) => {
    if (!users || users.length === 0) {
        return (
            <div>
                <AdminSidebar />
                <section className="orders-section">
                    <div className="orders-content">
                        <h2 className="orders-heading">Users List:</h2>
                        <p className="no-data">No users found.</p>
                    </div>
                </section>
            </div>
        );
    }

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div>
            <AdminSidebar activeLink="userslist" />
            <section className="orders-section">
                <div className="orders-content">
                    <h2 className="orders-heading">Users List:</h2>
                    <br />
                    <table className="orders-table">
                        <thead>
                            <tr>
                                <th><b>Username</b></th>
                                <th><b>Email</b></th>
                                <th><b>Created At</b></th>
                                <th><b>Action</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id} className="orders-row">
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{formatDate(user.createdAt)}</td>
                                    <td>
                                        <a href={`/admin/deleteUser/${user._id}`}>
                                            <button className="delete-button" type="submit">Delete</button>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};
