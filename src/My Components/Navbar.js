import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand mx-3" to="/">News</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item"> <Link className="nav-link" to="/business">Business</Link></li>
                        <li className="nav-item"> <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item"> <Link className="nav-link" to="/general">General</Link></li>
                        <li className="nav-item"> <Link className="nav-link" to="/health">Health</Link></li>
                        <li className="nav-item"> <Link className="nav-link" to="/science">Science</Link></li>
                        <li className="nav-item"> <Link className="nav-link" to="/sports">Sports</Link></li>
                        <li className="nav-item"> <Link className="nav-link" to="/technology">Technology</Link></li>
                    </ul>
                </div>
                <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">INDIA NEWS</label>
                <div className="form-check form-switch mx-3">

                    <input className="form-check-input" onClick={props.handleCountryToggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">USA NEWS</label>

                </div>
            </nav>
        </>
    )

}

export default Navbar