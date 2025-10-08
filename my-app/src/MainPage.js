import { Fragment } from "react/jsx-runtime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import girl from "./asets/girl.jsp";
import { useNavigate } from "react-router-dom";


import { useState } from "react";
import axios from "axios";


function MainPage() {
    const [query, setQuery] = useState("");
    const [jobs, setJobs] = useState([]);
    const information = useNavigate();
    const navigate = useNavigate();

    const navigate5 = useNavigate();
    const goTOprofile = () => {
        information("/profile")
    }
    const gotojobsearch = () => {
        navigate("/Jobsearchpage")
    }
    const goToSignUp = () => {
        navigate5("/home")
    }




    const handleSearch = () => {
        axios
            .get("https://remotive.com/api/remote-jobs", { params: { search: query } })
            .then((response) => {
                setJobs(response.data.jobs);
                console.log("Jobs fetched:", response.data.jobs);
            })
            .catch((error) => {
                console.error("Error fetching jobs:", error);
            });
    };

    return (
        <Fragment>
            <div className="mainContainer">
                <div className="monster">
                    <div>
                        <h3 style={{ fontSize: "39px", color: "white", fontWeight: "bold" }}>MONSTER</h3>
                    </div>
                    <div className="search-boxs">
                        <input className="search-inputs"
                            type="text"
                            placeholder="Search jobs,Keywords,Companies"

                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button className="search-btns"

                            onClick={handleSearch}
                        ><FontAwesomeIcon icon={faMagnifyingGlass} />Search
                        </button>



                        {query && jobs.length > 0 && (
                            <div
                                style={{
                                    position: "absolute", top: "90px", background: "white", width: "700px", maxHeight: "300px", overflowY: "auto", boxShadow: "0px 4px 8px rgba(0,0,0,0.2)", zIndex: 1000, borderRadius: "10px", marginTop: "5px"
                                }}
                            >
                                {jobs.slice(0, 10).map((job, index) => (
                                    <div
                                        key={index}
                                        style={{ padding: "12px 15px", borderBottom: "1px solid #ddd", cursor: "pointer", }}



                                        onClick={() => {
                                            setQuery(job.title);
                                            setJobs([]);
                                        }}
                                    >
                                        <strong>{job.title}</strong> — {job.company_name}
                                    </div>
                                ))}
                            </div>
                        )}







                    </div>

                    <div>
                        <button onClick={goTOprofile}
                            style={{ height: "45px", borderRadius: "15px", backgroundColor: "purple", color: "white", width: "150px", display: "flex", justifyContent: "space-around", alignItems: "center", }} >
                            <FontAwesomeIcon icon={faBars} /> MY ACCOUNT
                        </button>
                    </div>
                </div>

                <div className="linkSide" style={{ marginBottom: "20px", paddingBottom: "30px" }}>
                    <div className="firstlink">
                        <div>
                            <a href="#">Find jobs</a>
                        </div>
                        <div>
                            <a href="#">Salary Tools</a>
                        </div>
                        <div>
                            <a href="#">Career Advice</a>
                        </div>
                        <div>
                            <a href="#">Upload Resume</a>
                        </div>
                    </div>
                    <div>
                        <a href="https://hiring.monster.com/?intcid=skr_www_TopNav_Employer&ch=MONS">
                            Employers / Post Job <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>
                </div>
            </div>



            {/* main second phase */}
            <div>
                <div>
                    <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>Your LAUNCHPAD to What’s Next</h1>
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                        Start strong, stay confident—this is your space to grow and land your best-fit job.
                    </p>
                    <div className="myList">
                        <ul style={{ fontWeight: "bold" }}>
                            <li>Practice with <span style={{ color: "purple" }}>AI Interview Prep</span> that gets you ready for the real thing.</li>
                            <li>
                                Get <span style={{ color: "purple" }}>Smart Feedback</span> on your resume before you apply—because you deserve your best shot.
                            </li>
                            <li><span>Track</span> Every Job you Apply to, even from other sites, all in one spot.</li>
                            <li>
                                <span>Boost your chances</span>  with handpicked job recs and let recruiters come to you.
                            </li>
                        </ul>

                        <button className="signup" onClick={goToSignUp}>Sign Up Now</button>
                    </div>
                </div>
            </div>

            {/* third phase main */}
            <div className="thirdphase">
                <div>
                    <h1>Find your next job.</h1>
                </div>


                <div className="search-box">
                    <input type="text" placeholder="Search jobs, Keywords, Companies" className="search-input" />
                    <button onClick={gotojobsearch} className="search-btn">🔍 Search</button>
                </div>


                <p>
                    <FontAwesomeIcon icon={faCloudArrowUp} /> <a href="#">Upload Your Resume</a><input type="file" />-Get noticed by
                    top employers!
                </p>
                <div className="popular">
                    <button><FontAwesomeIcon icon={faMagnifyingGlass} /> Work from Home</button>
                    <button> <FontAwesomeIcon icon={faMagnifyingGlass} /> Part Time</button>
                    <button> <FontAwesomeIcon icon={faMagnifyingGlass} /> Customer Service</button>
                    <button> <FontAwesomeIcon icon={faMagnifyingGlass} /> Data Analyst</button>
                    <button><FontAwesomeIcon icon={faMagnifyingGlass} /> Delivery Driver</button>
                    <button><FontAwesomeIcon icon={faMagnifyingGlass} /> Engineering</button>
                    <button><FontAwesomeIcon icon={faMagnifyingGlass} /> IT</button>
                    <button><FontAwesomeIcon icon={faMagnifyingGlass} /> Marketing</button>
                    <button><FontAwesomeIcon icon={faMagnifyingGlass} /> Medical</button>
                    <button><FontAwesomeIcon icon={faMagnifyingGlass} /> Nurse</button>
                    <button><FontAwesomeIcon icon={faMagnifyingGlass} /> Project Manager</button>
                    <button><FontAwesomeIcon icon={faMagnifyingGlass} /> Sales</button>
                    <button><FontAwesomeIcon icon={faMagnifyingGlass} /> WareHouse</button>
                    <button><FontAwesomeIcon icon={faMagnifyingGlass} /> Welder</button>
                </div>
            </div>


            {/* fourth phase of main */}

            <div className="fourthPhase">
                <div className="girlimage">
                    <img src={girl} />
                </div>
                <div>
                    <h2 style={{ color: "white", marginBottom: "30px" }}>Just graduating? We can help.</h2>
                    <div>
                        <button style={{ marginBottom: "20px" }}>vist the student career center</button>
                    </div>
                    <div>
                        <button style={{ marginBottom: "20px" }}>search salaries </button>
                    </div>
                    <div>
                        <button style={{ marginBottom: "20px" }}>search entry-level jobs </button>
                    </div>
                </div>



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
                            <li><a href="https://www.monster.com/jobs">Browse jobs</a></li>
                            <li><a href="https://www.monster.com/jobs">Salary Tools </a></li>
                            <li><a href="https://www.monster.com/jobs">Career Advice </a></li>
                            <li><a href="https://www.monster.com/jobs">Company Profile </a></li>
                            <li><a href="https://www.monster.com/jobs">Student Career Center </a></li>
                        </ul>

                        <ul>
                            <li><a href="https://hiring.monster.com/products/">Products </a></li>
                            <li><a href="https://hiring.monster.com/products/">Solutions </a></li>
                            <li><a href="https://hiring.monster.com/products/">Pricing </a></li>
                            <li><a href="https://hiring.monster.com/products/">Resources </a></li>
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
        </Fragment>
    );
}
export default MainPage;
