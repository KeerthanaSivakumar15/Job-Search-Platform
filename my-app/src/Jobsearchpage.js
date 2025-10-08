import React, { useEffect, useState } from "react";


export default function Jobsearchpage() {
    const [search, setSearch] = useState("software");
    const [location, setLocation] = useState("chennai");
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);

   
    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        setLoading(true);
        try {
            const res = await fetch(
                `https://remotive.com/api/remote-jobs?search=${search}`
            );
            const data = await res.json();
            setJobs(data.jobs.slice(0, 100)); 
        } catch (err) {
            console.error("Error fetching jobs:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchJobs();
    };

    return (
        <div className="job-page">
           
            <header className="job-header">
                <h1 className="logo">MONSTER</h1>
                <form className="search-bar" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search jobs"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <button type="submit">🔍</button>
                </form>
                <div className="auth-buttons">
                    <button className="signup">Sign up</button>
                    <button className="login">Log in</button>
                </div>
            </header>

          
            <nav className="job-nav">
                <a href="#">Find Jobs</a>
                <a href="#">Salary Tools</a>
                <a href="#">Career Advice</a>
                <a href="#">Upload Resume</a>
                <a href="#" className="employers">Employers / Post Job →</a>
            </nav>

          
            <div className="filters">
                <select>
                    <option>Remote</option>
                    <option>Onsite</option>
                </select>
                <select>
                    <option>All Dates</option>
                    <option>Past 24 hours</option>
                    <option>Past Week</option>
                </select>
                <select>
                    <option>Within 40 Miles</option>
                    <option>Within 30 Miles</option>
                    <option>Within 20 Miles</option>
                    <option>Within 10 Miles</option>
                </select>
            </div>

            <main className="job-content">
               
                <div className="job-list">
                    {loading ? (
                        <p>Loading jobs...</p>
                    ) : jobs.length > 0 ? (
                        jobs.map((job, index) => (
                            <div key={index} className="job-card">
                                <div className="job-icon">
                                    {job.company_name?.[0]?.toUpperCase() || "J"}
                                </div>
                                <div className="job-details">
                                    <h3>{job.title}</h3>
                                    <p className="company">Company Name -{job.company_name}</p>
                                    <p className="location">Location -{location}</p>
                                    <p className="date">Posted On -

                                        {new Date(job.publication_date).toDateString()}
                                    </p>
                                    <a
                                        href={job.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="apply-btn"
                                    >
                                        Apply
                                    </a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No jobs found.</p>
                    )}
                </div>

            
                <aside className="job-sidebar">
                    <h2>Get noticed by top employers!</h2>
                    <p>
                        Do you want to speed up your job search? Post your resume here and
                        let employers know you’re open to opportunities. Plus, receive
                        relevant job recommendations in your inbox.
                    </p>
                    <button className="resume-btn">Send Us Your Resume</button>
                </aside>
            </main>
        </div>
    );
}
