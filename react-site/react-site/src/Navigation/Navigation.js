import './navigation.scss'
import './mixins.scss'

function Navigation() {
    return (
        <header>
        <div className = "navigation">
            <div className="nav">
            <div className="logo"><h1>React <i class="fab fa-react"></i></h1></div>
            <div className="openmenu"> 
             <i className="fa fa-bars"></i>
             </div>
            <ul className="mainmenu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                <div className="closemenu">
                <i class="fa fa-times"></i>
                </div>
            </ul>
            </div>
        </div>
        </header>
    )
}

export default Navigation