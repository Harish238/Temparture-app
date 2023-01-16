import React,{useState} from 'react';


const App =()=>{
  const[temparatureValue,settemparatureValue]=useState(20);
  const[temparatureColour,settemparatureColour]=useState("cold");
  const increaseTemparature = ()=>{
    const newtemparature = temparatureValue+1;
    if(newtemparature>=15){
      settemparatureColour("hot")
    }
    settemparatureValue(newtemparature);
  };
  const decreaseTemparature = ()=>{
    const newtemparature = temparatureValue-1;
    if(newtemparature<15){
      settemparatureColour("cold")
    }
    settemparatureValue(newtemparature);
  };
  return(
    <div className="app-container">
      <div className="temparature-display-container">
      <div className={`temperature-display ${temparatureColour}`} >{temparatureValue}&deg;C</div>
      <div className='button-container'>
        <button onClick={()=> increaseTemparature()}>+</button>
        <button onClick={()=> decreaseTemparature()}>-</button>
      </div>

      </div>


    </div>
  )
};

export default App;