import ReactMarkdown from 'react-markdown'
import react from 'react';
import './markdown.css'

const md =  require(`./md.md`);



export function Markdown() {
    
    const [read, setRead] = react.useState(false);
    const [text, setText] = react.useState("");
    /*
    react.useEffect(()=> {
        fetch(md)
        .then(response => {
            return response.text();
        })
        .then(text=> {
            setText(text)
        })
    },[])
    */
    console.log(md)

    return (
        <ReactMarkdown 
        children={md}
        className="body-container"
        components={{
            h1: 'h2',
            a: ({node, ...props}) => <a className="hello" {...props} />
        }}
        />

    );
}