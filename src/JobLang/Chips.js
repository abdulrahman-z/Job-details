import React, { useState } from 'react';
import chips from './Chips.module.css';

function Chips(props) {
   const [arr ,setArr] = useState(['html','css','Javascript','JQuery','Python']);
    const [current,setCurrent] = useState('');

    function addElem(event){
        if(event.key === 'Enter'){
            console.log('enter key')
           //console.log(element);
         
           //console.log(current)
            setArr([...arr,current])
        //console.log(arr)
            setCurrent('');
            return arr;
        }
    
       

    }

    return (
        
        <div>
            <h1 className={chips.title} titlename={props.titlename} > {props.titlename} </h1>
            <input className={chips.inputBox} value={current}  onChange={(e) =>setCurrent(e.target.value)} 
            onKeyPress={(k) => addElem(k)} />
            <div className={chips.displayLanguages}>
                {arr.map((el) => {
                   return <p className={chips.lang} key={el}>{el} <span>&times;</span></p>
                })}
            </div>
            </div>
    );
}

export default Chips;