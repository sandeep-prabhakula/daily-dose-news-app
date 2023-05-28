import React from 'react'
import { Link } from 'react-router-dom'
import DarkSwitch from './DarkSwitch'
import { useLocation } from 'react-router-dom'

const Navbar = (props) => {
    let location = useLocation();
    React.useEffect(() => {
    }, [location]);

    const handleSelect = () => {
        // document.querySelector('.navbar-collapse').classList.remove('show');

        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse) {
            navbarCollapse.classList.remove('show');
        }
    }
    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} onSelect={handleSelect()}>
                <div className="container-fluid">
                    <Link className={`navbar-brand`} to="/">Daily Dose</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==='/'?'active':''}`} to="/">Home</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==='/business'?'active':''}`} to="/business">Business</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==='/entertainment'?'active':''}`} to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==='/politics'?'active':''}`} to="/politics">Politics</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==='/science'?'active':''}`} to="/science">Science</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==='/sports'?'active':''}`} to="/sports">Sports </Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==='/technology'?'active':''}`} to="/technology">Technology</Link></li>
                        </ul>
                        <DarkSwitch mode={props.mode} toggleMode={props.toggleMode} />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
