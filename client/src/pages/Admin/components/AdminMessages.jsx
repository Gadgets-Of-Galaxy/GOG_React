import "../styles/adminLists.css";
import { AdminSidebar } from "./AdminSidebar";
import { AdminOverview } from "./AdminOverview";

export const AdminMessages = ({ messages }) => {
    return (
        <div>
            <AdminSidebar activeLink="messageslist"/>
            <section className="orders-section">
                <div className="orders-content">
                    <br />
                    <h2 className="orders-heading">Customer Messages:</h2>
                    <br />
                    <table className="orders-table">
                        <thead>
                            <tr>
                                {/* <th><b>Name</b></th> */}
                                <th><b>Email</b></th>
                                <th><b>Subject</b></th>
                                <th><b>Phone</b></th>
                                <th><b>Message</b></th>
                                <th><b>Reply</b></th>
                                <th><b>Delete</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((message, index) => (
                                <tr key={index} className="orders-row">
                                    {/* <td>{message.name}</td> */}
                                    <td>{message.email}</td>
                                    <td>{message.subject}</td>
                                    <td>{message.phone["$numberLong"]}</td>
                                    <td>{message.message}</td>
                                    <td>
                                        <button className="reply-button" type="submit">Reply</button>
                                    </td>
                                    <td>
                                        <a href={`/admin/deleteMessage/${message._id['$oid']}`}>
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
