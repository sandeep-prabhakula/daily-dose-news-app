import React from 'react'
import { Link } from 'react-router-dom'
import DarkSwitch from './DarkSwitch'
import { useLocation } from 'react-router-dom'

const Navbar = (props) => {
    let location = useLocation();
    React.useEffect(() => {
    }, [location]);
    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className={`navbar-brand`} to="/">Daily Dose</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==='/'?'active':''}`} to="/">Home</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==='/dailydose/business'?'active':''}`} to="/dailydose/business">Business</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==='/dailydose/entertainment'?'active':''}`} to="/dailydose/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==='/dailydose/politics'?'active':''}`} to="/dailydose/politics">Politics</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==='/dailydose/science'?'active':''}`} to="/dailydose/science">Science</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==='/dailydose/sports'?'active':''}`} to="/dailydose/sports">Sports </Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==='/dailydose/technology'?'active':''}`} to="/dailydose/technology">Technology</Link></li>
                        </ul>
                        <DarkSwitch mode={props.mode} toggleMode={props.toggleMode} />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
