import { Link } from 'react-router-dom'
import '../css/LandingPage.css'

function LandingPage(){
    console.log('LANDING PAGE ACTIVATED')

    return (
        <div className="landing">
            <div className="landing-box create">
                <Link to='/canvas'> <h2>CREATE</h2> </Link>
            </div>
            <div className="landing-box goto-gallery">
                <Link to='/gallery'> <h2>GALLERY</h2> </Link>
            </div>
        </div>
    )
}

export default LandingPage;