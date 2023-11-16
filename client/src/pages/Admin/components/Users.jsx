import "../styles/admin.css";
import { AdminSidebar } from "./AdminSidebar";

export const Users = ({ users }) => {
    return (
        <div>
            <AdminSidebar />
            <section className="home-section">
                <h2>User List:</h2>
                <br />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th><b>Username</b></th>
                            <th><b>Email</b></th>
                            <th><b>Created At</b></th>
                            <th><b>Delete</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>Today</td>
                                <td>
                                    <a href={`/admin/deleteUser/${user._id}`}>
                                        <button name="delete" type="submit">Delete</button>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};
