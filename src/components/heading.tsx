import './heading.css'
import { Link } from 'react-router-dom';
export function Heading() {

    return (
        <div className="heading">
            <h1 id="title">
                I'm <u className="Underline">Jacky</u>, a third year Seng <br />
                student at UNSW
            </h1>
            <div className="nav">

                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/about">About me</Link>
                    <Link to="/blogs">Blog</Link>
                </div>
                <div className="icons">
                    <img src="Linkedin.svg" style={{width:"47px", height:"47px", background:"white"}}/>
                    <img src="github.svg" style={{width:"40px", height:"40px", background:"white"}}/>
                </div>

                
            </div>
       
        </div>

    )
};