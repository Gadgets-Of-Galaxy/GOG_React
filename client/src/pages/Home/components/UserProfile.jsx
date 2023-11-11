import "../styles/MyAccount.css"

export const UserProfile = () => {
    return (
        <div>
            <section className="home-section">
                <nav>
                    <div className="sidebar-button">
                        <i className='bx bx-menu sidebarBtn'></i>
                        <span className="dashboard">My Profile</span>
                    </div>
                    <div className="search-box">
                        <input type="text" placeholder="Search..." />
                        <i className='bx bx-search'></i>
                    </div>
                </nav>

                <div className="home-content uprofilepage">
                    <h3 className="font-weight-bold"><i className='bx bxs-user'></i> MY PROFILE</h3>
                    <br />
                    <div id="profile-info">
                        <div className="flex-item ">
                            <p className='key'>Full Name</p>
                            <p className='value'>
                                Unknown
                            </p>
                        </div>
                        <div className="flex-item ">
                            <p className='key'>Email ID</p>
                            <p className='value'>
                                Unknown@gmail.com
                            </p>
                        </div>
                        <div className="flex-item ">
                            <p className='key'>Mobile</p>
                            <p className='value'>
                                9988776655
                            </p>
                        </div>
                        <div className="flex-item ">
                            <p className='key'>Gender</p>
                            <p className='value'>
                                Male
                            </p>
                        </div>
                        <div className="flex-item ">
                            <p className='key'>Date of Birth</p>
                            <p className='value'>
                                01-01-2000
                            </p>
                        </div>
                        <div className="flex-item ">
                            <p className='key'>Location</p>
                            <p className='value'>
                                Sricity
                            </p>
                        </div>
                    </div>
                    <a href="/editProfile">
                        <button type="button" id="edit-profile-btn" className="edit-button btn"
                            aria-label='edit button'>EDIT</button>
                    </a>
                </div>
            </section>
        </div>
    );
}