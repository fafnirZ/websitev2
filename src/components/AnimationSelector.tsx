import React from 'react'
import './AnimationSelector.css'
import { OperaBridge } from './legacy/OperaBridge';
import { Opera } from './legacy/Opera';
import { LanguageIcons } from './languages';

export function Animationselector() {

    
    const [display, setDisplay] = React.useState([window.innerWidth, window.innerHeight]);
    //initial display
    React.useEffect(()=> {
      window.addEventListener("resize", ()=> {
        setDisplay([window.innerWidth, window.innerHeight])
      })
  
      //unmount
      return ()=> {
        window.removeEventListener("resize", ()=> {
          setDisplay([window.innerWidth, window.innerHeight])
        })
      }
    }, [])
 
    return (

        <div>
          {display[0] > 800 && <LanguageIcons />}
          {display[0] > 800 && <OperaBridge/> }
          {display[0] <= 800 && <Opera />}
          {display[0] <= 800 && <LanguageIcons />}
        </div>

    )

};