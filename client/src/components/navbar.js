import { Link } from 'react-router-dom'

import '../css/Navbar.css'

function Navbar() {
    return(
        <div className="navbar">
            <div className="spacer"></div>
            <Link to='/'> <h1>PLACEHOLDER TITLE</h1> </Link>
            <div className="nav-buttons">
                <div>
                    USER
                </div>
                <Link to='/login'> <button>Login</button> </Link>
                <Link to='/register'> <button>Sign Up</button> </Link>
            </div>
            
        </div>
    )
};

export default Navbar;