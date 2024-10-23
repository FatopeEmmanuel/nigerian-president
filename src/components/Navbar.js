import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
            <ul className="nav">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Tinubu'>Tinubu</Link></li>
                <li><Link to='/Buhari'>Buhari</Link></li>
                <li><Link to='/Jonathan'>Jonathan</Link></li>
            </ul>
        </>
    )
}
export default Navbar;