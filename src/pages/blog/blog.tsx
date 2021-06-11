import './blog.css';
import react from 'react';

type BlogBox = {scrollHeight: number}


export function Blogs() {
    const [blogBox, setBlogBox] = react.useState<BlogBox | null>(null);
    const [scrollHeight, setScrollHeight] = react.useState(0);
    const [elementHeight, setElementHeight] = react.useState(0);


    //add event listener listening to scrollheight increase and decrease as window gets resized
    react.useEffect(()=> {
        document.addEventListener('load', ()=> {
            console.log('loaded');
            setBlogBox(document.getElementById('blog-box'))

        })

        document.addEventListener('resize', ()=> {
            setScrollHeight(document.body.scrollHeight);
        })


        return(()=> {
            document.removeEventListener('load', ()=> {
                setBlogBox(document.getElementById('blog-box'))
            })
            document.removeEventListener('resize', ()=> {
                setScrollHeight(document.body.scrollHeight);
            })  

        })
    }, [])

    //checks scroll height has changed and re-renders height of filter
    react.useEffect(()=> {
        console.log(blogBox)
        blogBox !== null && setElementHeight(blogBox.scrollHeight);
        console.log(scrollHeight)
    },[scrollHeight])

    return (


        <div id="blog-box" className="body-container">

            {elementHeight > 0 &&             
            <div id="filter" style={{height: elementHeight}}>
                <p>
                    this is in work in progress
                </p>

            </div>}


            <div className="blog-container">

                <div className="blog-content-wrapper">
                    <h1>
                        Blog placeholder 1
                    </h1>
                    <div className="blog-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium obcaecati, dolorem possimus id unde animi ratione totam sit earum adipisci consequuntur autem aut laudantium corporis qui expedita libero distinctio suscipit!</div>
                </div>
                <div className="blog-image">
                    picture
                </div>
            </div>
            <div className="blog-container">


                <div className="blog-content-wrapper">
                    <h1>
                        Blog placeholder 2
                    </h1>
                    <div className="blog-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium obcaecati, dolorem possimus id unde animi ratione totam sit earum adipisci consequuntur autem aut laudantium corporis qui expedita libero distinctio suscipit!</div>
                </div>
                <div className="blog-image">
                    picture
                </div>
            </div>          
            <div className="blog-container">

                <div className="blog-content-wrapper">
                    <h1>
                        Blog placeholder 3
                    </h1>
                    <div className="blog-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium obcaecati, dolorem possimus id unde animi ratione totam sit earum adipisci consequuntur autem aut laudantium corporis qui expedita libero distinctio suscipit!</div>
                </div>
                <div className="blog-image">
                    picture
                </div>
            </div>          
            <button className="body-container">
                show more
            </button>
        </div>
        


    )
}