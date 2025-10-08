import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function Profile() {

    const careerRef = useRef(null);
    const educationRef = useRef(null);
    const skillsRef = useRef(null);
    const languagesRef = useRef(null);
    const internshipsRef = useRef(null);
    const projectsRef = useRef(null);
    const summaryRef = useRef(null);
    const accomplishmentsRef = useRef(null);
    const resumeRef = useRef(null);
  

    const [formData, setFormData] = useState({
        degree: "",
        class12: "",
        class10: "",
        keySkills: "",
        languages: "",
        internships: "",
        projects: "",
        summary: "",
        accomplishments: ""
    });

    const [submitted, setSubmitted] = useState(false);


    const scrollTo = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="profile-page-root">
            <div className="monster-head">
                <div>
                    <h1 style={{ color: "rgb(45, 17, 45)", fontWeight: "bold" }}>MONSTER</h1>
                </div>
                <div className="nav-links">
                    <h4>Prepare</h4>
                    <h4>Participate</h4>
                    <h4>Opportunities</h4>
                </div>
                <div style={{ fontSize: "28px" }}><FontAwesomeIcon icon={faBell} /></div>
            </div>
            <div className="profile-container">

                <aside className="sidebar">

                    <ul className="sidebar-list">
                        <li onClick={() => scrollTo(careerRef)}>Preference</li>
                        <li onClick={() => scrollTo(educationRef)}>Education</li>
                        <li onClick={() => scrollTo(skillsRef)}>Key skills</li>
                        <li onClick={() => scrollTo(languagesRef)}>Languages</li>
                        <li onClick={() => scrollTo(internshipsRef)}>Internships</li>
                        <li onClick={() => scrollTo(projectsRef)}>Projects</li>
                        <li onClick={() => scrollTo(summaryRef)}>Profile summary</li>
                        <li onClick={() => scrollTo(accomplishmentsRef)}>Accomplishments</li>
                        <li onClick={() => scrollTo(resumeRef)}>Resume</li>
                    </ul>
                </aside>

                {!submitted ? (
                    <main className="profile-content">

                        <section ref={careerRef} className="card">
                            <div className="card-header">
                                <h4>Your Career Preferences</h4>
                            </div>

                            <div className="form-group">
                                <label htmlFor="jobType">Preferred Job Type <span style={{ color: "red" }}>*</span></label>
                                <input
                                    id="jobType"
                                    type="text"
                                    value={formData.jobType}
                                    onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}
                                    placeholder="e.g. Full-Time, Internship, Remote"
                                    required
                                />
                                {!formData.jobType && <p className="error">Preferred job type is required</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="availability">Availability to Work <span style={{ color: "red" }}>*</span></label>
                                <input
                                    id="availability"
                                    type="text"
                                    value={formData.availability}
                                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                                    placeholder="e.g. Immediate, 1 Month Notice"
                                    required
                                />
                                {!formData.availability && <p className="error">Availability is required</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="location">Preferred Location <span style={{ color: "red" }}>*</span></label>
                                <input
                                    id="location"
                                    type="text"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    placeholder="e.g. Chennai, Bengaluru, Remote"
                                    required
                                />
                                {!formData.location && <p className="error">Preferred location is required</p>}
                            </div>
                        </section>


                        <section ref={educationRef} className="card">
                            <div className="card-header">
                                <h4>Education</h4>
                            </div>

                            <label>Degree</label>
                            <input
                                type="text"
                                value={formData.degree}
                                onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                                placeholder="e.g. B.Tech from College Name"
                            />

                            <label>Class XII</label>
                            <input
                                type="text"
                                value={formData.class12}
                                onChange={(e) => setFormData({ ...formData, class12: e.target.value })}
                                placeholder="e.g. Tamil Nadu Board, 71.1%, 2021"
                            />

                            <label>Class X</label>
                            <input
                                type="text"
                                value={formData.class10}
                                onChange={(e) => setFormData({ ...formData, class10: e.target.value })}
                                placeholder="e.g. Tamil Nadu Board, 61.9%, 2019"
                            />
                        </section>





                        <section ref={skillsRef} className="card">
                            <div className="card-header">
                                <h4>Key Skills</h4>
                            </div>
                            <label>Enter your key skills</label>
                            <input
                                type="text"
                                value={formData.keySkills}
                                onChange={(e) => setFormData({ ...formData, keySkills: e.target.value })}
                                placeholder="e.g. React, Node.js, Python"
                            />
                        </section>







                        <section ref={languagesRef} className="card">
                            <div className="card-header">
                                <h4>Languages</h4>
                            </div>
                            <label>Languages Known</label>
                            <input
                                type="text"
                                value={formData.languages}
                                onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
                                placeholder="e.g. English, Tamil"
                            />
                        </section>

                        <section ref={internshipsRef} className="card">
                            <div className="card-header">
                                <h4>Internships</h4>
                            </div>
                            <label>Internship Details</label>
                            <textarea
                                value={formData.internships}
                                onChange={(e) => setFormData({ ...formData, internships: e.target.value })}
                                placeholder="Company name, role, duration"
                            />
                        </section>

                        <section ref={projectsRef} className="card">
                            <div className="card-header">
                                <h4>Projects</h4>
                            </div>
                            <label>Project Details</label>
                            <textarea
                                value={formData.projects}
                                onChange={(e) => setFormData({ ...formData, projects: e.target.value })}
                                placeholder="Describe your projects"
                            />
                        </section>

                        <section ref={summaryRef} className="card">
                            <div className="card-header">
                                <h4>Profile Summary</h4>
                            </div>
                            <label>Summary</label>
                            <textarea
                                value={formData.summary}
                                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                                placeholder="Describe your professional summary"
                            />
                        </section>

                        <section ref={accomplishmentsRef} className="card">
                            <div className="card-header">
                                <h4>Accomplishments</h4>
                            </div>
                            <label>Accomplishments</label>
                            <textarea
                                value={formData.accomplishments}
                                onChange={(e) => setFormData({ ...formData, accomplishments: e.target.value })}
                                placeholder="List certifications or awards"
                            />
                        </section>



                        <section ref={resumeRef} className="card resume-card">
                            <div className="card-header">
                                <h4>Resume</h4>
                            </div>

                            <p className="section-desc">Your resume is the first impression you make on potential employers. Craft it carefully to secure your desired job or internship.</p>

                            <div className="resume-box">

                                <div className="resume-actions">
                                    <button className="btn-outline">Update resume</button>
                                    <p className="muted small">Supported formats: doc, docx, rtf, pdf, up to 2MB</p>
                                </div>
                            </div>
                        </section>

                        <div style={{ marginTop: "30px", textAlign: "center" }}>
                            <button
                                onClick={() => setSubmitted(true)}
                                className="submit-btn" style={{width:"100px", backgroundColor:"#0073e6",height:"50px",border:"solid black 2px"}}>
                                Submit
                            </button>
                            <button
                                onClick={() => setSubmitted(true)}
                                className="view-btn" style={{width:"160px", height:"50px",backgroundColor:"#0073e6", border:"solid black 2px"}}
                            >
                                View Application
                            </button>
                        </div>

                    </main>

                ) : (
                    <div className="view-page">
                        <h2>Application Details</h2>
                        <p><strong>Degree:</strong> {formData.degree}</p>
                        <p><strong>Class XII:</strong> {formData.class12}</p>
                        <p><strong>Class X:</strong> {formData.class10}</p>
                        <p><strong>Key Skills:</strong> {formData.keySkills}</p>
                        <p><strong>Languages:</strong> {formData.languages}</p>
                        <p><strong>Internships:</strong> {formData.internships}</p>
                        <p><strong>Projects:</strong> {formData.projects}</p>
                        <p><strong>Summary:</strong> {formData.summary}</p>
                        <p><strong>Accomplishments:</strong> {formData.accomplishments}</p>

                        <button onClick={() => setSubmitted(false)}>Go Back</button>
                    </div>
                )}
            </div>



            <footer className="footer">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2 className="logo">MONSTER<span>campus</span></h2>
                        <p>Connect with us</p>
                        <div className="social-icons">
                            <a href="#!"><i className="fab fa-facebook-f"></i></a>
                            <a href="#!"><i className="fab fa-instagram"></i></a>
                            <a href="#!"><i className="fab fa-x-twitter"></i></a>
                            <a href="#!"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <ul>
                            <li><a href="#!">About us</a></li>
                            <li><a href="#!">Careers</a></li>
                            <li><a href="#!">Employer home</a></li>
                            <li><a href="#!">Sitemap</a></li>
                            <li><a href="#!">Credits</a></li>
                        </ul>

                        <ul>
                            <li><a href="#!">Help center</a></li>
                            <li><a href="#!">Summons/Notices</a></li>
                            <li><a href="#!">Grievances</a></li>
                            <li><a href="#!">Report issue</a></li>
                        </ul>

                        <ul>
                            <li><a href="#!">Privacy policy</a></li>
                            <li><a href="#!">Terms & conditions</a></li>
                            <li><a href="#!">Fraud alert</a></li>
                            <li><a href="#!">Trust & safety</a></li>
                        </ul>
                    </div>

                    <div className="footer-app">
                        <h4>Apply on the go</h4>
                        <p>Get real-time job updates on our App</p>
                        <div className="app-buttons">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" />
                            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 MONSTER Campus. All rights reserved.</p>
                </div>
            </footer>
        </div>


    );
}
