import "../styles/admin.css";

export const AdminOverview = () => {
    return (
        <div>
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
        </div>
    );
}