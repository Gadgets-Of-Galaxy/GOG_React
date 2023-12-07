import "../styles/admin.css";
import { AdminSidebar } from "./AdminSidebar";

export const AddProduct = () => {
    return (
        <div>
            <AdminSidebar activeLink="addproduct"/>
            <section className="home-section">
                <nav>
                    <div className="sidebar-button">
                        <i className='bx bx-menu sidebarBtn'></i>
                        <span className="dashboard">Add Product</span>
                    </div>
                    <div className="search-box">
                        <input type="text" placeholder="Search..."/>
                            <i className='bx bx-search'></i>
                    </div>
                </nav>
                <div className="uprofilepage">
                    <h3 className="font-weight-bold">ADD PRODUCT</h3>
                    <hr/>
                        <form className='edit-profile-form' action="/admin/addProduct" method="post">
                            <div className="mb-3">
                                <label htmlFor="productcode" className="form-label">Product Code</label>
                                <input placeholder="Product code" type="text" className="form-control" id="productcode" name="productcode"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input placeholder="Title" type="text" className="form-control" id="title" name="title"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="imagepath" className="form-label">ImagePath</label>
                                <input placeholder="Imagepath" type="text" className="form-control" id="imagepath" name="imagepath"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="imagethumbnail1" className="form-label">Thumbnail Image 1</label>
                                <input placeholder="Thumbnail Image 1" type="text" className="form-control" id="imagethumbnail1" name="imagethumbnail1"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="imagethumbnail2" className="form-label">Thumbnail Image 2</label>
                                <input placeholder="Thumbnail Image 2" type="text" className="form-control" id="imagethumbnail2" name="imagethumbnail2"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="imagethumbnail3" className="form-label">Thumbnail Image 3</label>
                                <input placeholder="Thumbnail Image 3" type="text" className="form-control" id="imagethumbnail3" name="imagethumbnail3"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input placeholder="Description" type="text" className="form-control" id="description" name="description"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="features1" className="form-label">Features 1</label>
                                <input placeholder="Features 1" type="text" className="form-control" id="features1" name="features1"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="features2" className="form-label">Features 2</label>
                                <input placeholder="Features 2" type="text" className="form-control" id="features2" name="features2"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="features3" className="form-label">Features 3</label>
                                <input placeholder="Features 3" type="text" className="form-control" id="features3" name="features3"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="features4" className="form-label">Features 4</label>
                                <input placeholder="Features 4" type="text" className="form-control" id="features4" name="features4"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mrp" className="form-label">mrp</label>
                                <input placeholder="mrp" type="text" className="form-control" id="mrp" name="mrp"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input placeholder="price" type="text" className="form-control" id="price" name="price"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="reviewed" className="form-label">Reviewed</label>
                                <input placeholder="Reviewed" type="text" className="form-control" id="reviewed" name="reviewed"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="sold" className="form-label">Sold</label>
                                <input placeholder="Sold" type="text" className="form-control" id="sold" name="sold"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="stock" className="form-label">Stock</label>
                                <input placeholder="Stock" type="text" className="form-control" id="stock" name="stock"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="brand" className="form-label">Brand</label>
                                <input placeholder="Brand" type="text" className="form-control" id="brand" name="brand"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="manufacturer" className="form-label">Manufacturer</label>
                                <input placeholder="Manufacturer" type="text" className="form-control" id="manufacturer" name="manufacturer"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="available" className="form-label">Available</label>
                                <input placeholder="Available" type="text" className="form-control" id="available" name="available"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Category</label>
                                <input placeholder="Category" type="text" className="form-control" id="category" name="category"/>
                            </div>
                            <div className="button-group d-flex flex-column mt-3" id="btn-group">
                                <input type="submit" value="Add Product" className="add-button"/>
                            </div>
                        </form>
                </div>
            </section>
        </div>
    );
}