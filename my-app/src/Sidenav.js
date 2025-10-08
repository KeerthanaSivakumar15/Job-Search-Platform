import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import naukri from "./asets/naukri.jpg"
import { useNavigate } from "react-router-dom";

function Sidenav() {
    const [selected, setSelected] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [agree, setAgree] = useState(false);

    // it will go to mainpage and us ethe register button to navigate 
    const main = useNavigate();
    const gotomain = () => {
        main("/MainPage")
    }

    const isNameValid = name.trim().length >= 3;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 8;
    const isMobileValid = /^[0-9]{10}$/.test(mobile);
    const isWorkStatusSelected = selected !== "";

    
    const isFormValid =
        isNameValid &&
        isEmailValid &&
        isPasswordValid &&
        isMobileValid &&
        isWorkStatusSelected &&
        agree;



    return (
        <Fragment>
            <div className="sideMain">
                <div className="side1" style={{ height: "450px" }}>
                    <img src={naukri} />
                    <h4>On Registering, you can</h4>
                    <p>✅ Build your profile and let recruiters find you</p>
                    <p>✅ Get job postings delivered right to your email</p>
                    <p>✅ Find your job and grow your career</p>
                </div>

                <div className="side2">
                    <div className="info">

                        <h3 style={{ marginTop: "20px",fontWeight:"bolder",fontSize:"40px" }}>Create your MONSTER profile</h3>
                        <p style={{  color: "#6e6a6aff" }}>earch & apply to jobs from India's No.1 Job Site</p>
                        <form>

                            <div className="form-group">
                                <label for="name"  style={{ marginRight: "480px",fontSize:"20px" }} >Full name <span>*</span></label>
                                <input type="text" placeholder="What is your name?" id="name" className="input-box" onChange={(e) => setName(e.target.value)}></input>
                                {!isNameValid && name && (
                                    <p style={{ color: "red" }}>Name must be at least 3 letters</p>
                                )}
                            </div>



                            <div className="form-group">
                                <label for="email" style={{ marginRight: "490px",fontSize:"20px" }} >Email id <span>*</span></label>
                                <input type="email" placeholder="Tell us your email id" id="email" className="input-box" onChange={(e) => setEmail(e.target.value)}></input>
                                {!isEmailValid && email && (
                                    <p style={{ color: "red" }}>Enter a valid email</p>
                                )}
                            </div>


                            <div className="form-group">
                                <label for="pass" style={{ marginRight: "486px",fontSize:"20px" }} >Password <span>*</span></label>
                                <input type="password" placeholder="(minimun 6 characters)" id="pass" className="input-box" onChange={(e) => setPassword(e.target.value)}></input>
                                {!isPasswordValid && password && (
                                    <p style={{ color: "red" }}>
                                        Password must be at least 8 characters
                                    </p>
                                )}
                            </div>


                            <div className="form-group">
                                <label for="mobile" style={{ marginRight: "440px",fontSize:"20px" }} >Mobile Number <span>*</span></label>
                                <input type="text" placeholder="Enter your mobile number" id="mobile" className="input-box" onChange={(e) => setMobile(e.target.value)} ></input>
                                {!isMobileValid && mobile && (
                                    <p style={{ color: "red" }}>Enter a valid 10-digit number</p>
                                )}
                            </div>


                            <div className="work-status-container">
                                <h2 style={{ fontSize: "18px", marginRight: "420px",fontSize:"20px",fontWeight:"bold" }}>Work status</h2>
                                <div className="work-status">
                                    <div
                                        className={`status-card ${selected === "experienced" ? "active" : ""}`}
                                        onClick={() => setSelected("experienced")}>
                                        <h3>I'm experienced</h3>
                                        <p>I have work experience (excluding internships)</p>
                                    </div>

                                    <div
                                        className={`status-card ${selected === "fresher" ? "active" : ""}`}
                                        onClick={() => setSelected("fresher")}>


                                        <h3>I'm a fresher</h3>
                                        <p>I am a student/ Haven’t worked after graduation</p>
                                    </div>
                                </div>
                                {!isWorkStatusSelected && (
                                    <p style={{ color: "red" }}>Please select work status</p>
                                )}
                                <div className="checkbox-row">
                                    <input type="checkbox" checked={agree} id="updates"  onChange={(e) => setAgree(e.target.checked)} />
                                    <label for="updates" style={{ fontWeight:"bold"}}>
                                        Send me important updates & promotions via SMS, email, and WhatsApp
                                    </label>
                                </div>


                                <p className="register-info">
                                    By clicking Register, you agree to the
                                    <a href="#">Terms and Conditions</a> &
                                    <a href="#"> Privacy Policy</a> of Naukri.com
                                </p>

                                <button disabled={!isFormValid}
                                    style={{
                                        background: isFormValid ? "#0073e6" : "#ccc",
                                        cursor: isFormValid ? "pointer" : "not-allowed"
                                    }} className="btn-register" onClick={gotomain}>Register now</button>

                            </div>
                        </form>
                    </div>
                </div>

            </div>




        </Fragment >
    )
} export default Sidenav;