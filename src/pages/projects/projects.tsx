import './projects.css';

export function Projects() {

    return (
        
        <div className="body-container">
            <div className="projects-container">
                <div className="image">
                    picture
                </div>

                <div className="content-wrapper">
                    <h1>
                        UNSW Degree Planner 
                    </h1>
                    <div className="content">
                        A simple Drag and drop UI for a degree planner for UNSW courses, Functionality includes an interactive UI, Oauth2 implementation for Facebook and a search functionality.
                    </div>
                </div>
                
            </div>
            <div className="projects-container">
                <div className="image">
                    picture
                </div>

                <div className="content-wrapper">
                    <h1>
                        Linux Rootkit
                    </h1>
                    <div className="content">
                        A simple linux Rootkit created for linux kernel version 4.15, Rootkit functionality includes hiding from system processes, root privilege escallation for non-privileged user, hiding outbound TCP connections to a reverse shell.
                    </div>
                </div>

            </div>          
            <div className="projects-container">
                <div className="image">
                    picture
                </div>

                <div className="content-wrapper">
                    <h1>
                        NUIBot
                    </h1>
                    <div className="content">
                        A simple discord music streaming bot. This bot allows you to query and play the first song in a youtube search as well as play from a direct link. Utilises yt-dl library and transforms audio into FFMPEG format to be streamed in a discord server. Also deployed on heroku
                    </div>
                </div>
            </div>          

        </div>

    )
}