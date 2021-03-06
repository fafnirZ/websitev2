import './about.css'
export function About() {

    return (
            <div className="about-container">
                <div className="info-container">
                    <h1>About me</h1>
                    <p>
                    <b>WHOAMI?</b> I am a budding third year student undertaking a bachelors in Software Engineering at
    				the University of New South Wales. <br/>
    				I strive to achieve a vastly diversified portfolio of projects in multiple fields as I believe in this rapidly changing era of technology; being a 'Jack of All Trades' would be a great addition to any team when engineering a solution.<br/>
                    <br/>
                    My commitments to current team projects include: <br/>
                    @ UNSW Computer Science and engineering society <b>projects</b> subcommittee member <br/>
                    @ UNSW Security Society <b>projects</b> subcommittee member.
                    </p>
                    <div className ="societyimg">
                        <img src="csesoc.jpeg"/>
                        <img src="secsoc.png"/>
                    </div>
                    <p>
                    This website is built using Reactjs, and is deployed on Github pages.
                    For the full source code check out: <br/>
                    <a href="https://github.com/fafnirZ/websitev2">https://github.com/fafnirZ/websitev2</a>
                    </p>
                </div>
                <div className="me-container">
                    <img src="me.jpeg"/>
                </div>
            </div>
    );
};