import { useState } from "react";
import axios from "axios";
import "../styles/login.css";

export const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    const formvalidate = async (event) => {
        event.preventDefault();

        try {
            let endpoint = "/login";
            if (isSignUp) {
                endpoint = "/register";
            }
            const response = await axios.post(`http://localhost:5000${endpoint}`, formData);

            if (response.status === 200 || response.status === 201) {
                console.log(response.data.message);
            }
        } catch (error) {
            console.error("Error:", error.response.data.message);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <section>
                <div className="container">
                    <div className={`user ${isSignUp ? "signupBx" : "signinBx"}`}>
                        <div className="formBx">
                            <form
                                name="validatelogin"
                                onSubmit={formvalidate}
                            >
                                <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
                                {isSignUp && (
                                    <div>
                                        <label htmlFor="namer">Name</label>
                                        <input
                                            type="text"
                                            id="namer"
                                            name="name"
                                            placeholder="Username"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                        <br />
                                    </div>
                                )}
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <br />
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <br />
                                {isSignUp && (
                                    <div>
                                        <label htmlFor="cpasswordr">
                                            Confirm password
                                        </label>
                                        <input
                                            type="password"
                                            id="cpasswordr"
                                            name="confirmPassword"
                                            placeholder="Confirm Password"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                        />
                                        <br />
                                    </div>
                                )}
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="button"
                                />
                                <p className="signup">
                                    {isSignUp
                                        ? "Already have an account?"
                                        : "Don't have an account?"}
                                    <a onClick={toggleForm}>
                                        {isSignUp ? " Login" : " Sign Up"}
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                    <div className="imgBx">
                        <img
                            src="https://thumbs.dreamstime.com/b/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-164230611.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
