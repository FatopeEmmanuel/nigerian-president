import { Link } from "react-router-dom"
function Home(){
    return(
        <>
            <div className="main">
                <div className="content">
                    <h4>CELBRATING OUR GREAT PRESIDENTS</h4>
                    <p>Throughout Nigeria’s history, our presidents have played pivotal roles in shaping the nation’s destiny. From fostering unity in times of division to advancing the country’s economic and political standing, their leadership has left a lasting legacy. These visionary leaders have steered Nigeria through triumphs and challenges alike, always with the goal of building a stronger, more prosperous nation. As we reflect on their contributions, we honor the impact they’ve had on our past, present, and future.</p>
                    <div className="buttons">
                        <ul>
                            <li><Link to="/Tinubu" className="links">Tinubu</Link></li>
                            <li><Link to="/Jonathan" className="links">Jonathan</Link></li>
                            <li><Link to="/Buhari" className="links">Buhari</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home