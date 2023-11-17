import "../styles/admin.css";
import { AdminSidebar } from "./AdminSidebar";
import {AdminOverview} from "./AdminOverview";

export const AdminMessages = ({ messages }) => {
    return (
        <div>
            <AdminSidebar />
            <section className="home-section">
                <nav>
                    <div className="sidebar-button">
                        <i className='bx bx-menu sidebarBtn'></i>
                        <span className="dashboard">User Details</span>
                    </div>
                    <div className="search-box">
                        <input type="text" placeholder="Search..." />
                        <i className='bx bx-search'></i>
                    </div>
                </nav>

                <div className="home-content">
                <AdminOverview />

                    <br />
                    <h2>Customer Messages :</h2>
                    <br />
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th><b>Name</b></th>
                                <th><b>Email</b></th>
                                <th><b>Subject</b></th>
                                <th><b>Phone</b></th>
                                <th><b>Message</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            { messages.map((message, index) => (
                                <tr key={ index }>
                                    <td>{ message.name }</td>
                                    <td>{ message.email }</td>
                                    <td>{ message.subject }</td>
                                    <td>{ message.phone["$numberLong"] }</td>
                                    <td>{ message.message }</td>
                                    <td>
                                        <button name="delete" type="submit">Reply</button>
                                    </td>
                                    <td>
                                        <a href={ `/admin/deleteMessage/${message._id['$oid']}` }>
                                            <button name="delete" type="submit">Delete</button>
                                            {/* <button name="delete" type="submit" onClick={ () => deleteFunction(message._id) }>Delete</button> */ }
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