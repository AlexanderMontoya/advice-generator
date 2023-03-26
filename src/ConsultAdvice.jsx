import { useState, useEffect } from "react";
import CardAdvice from "./components/CardAdvice";
function ConsultAdvice(){
    const url= "https://api.adviceslip.com/advice/";
    const [adviceId,setAdviceId]=useState()
    const [advice,setAdvice]=useState()
    const fetchApi = async()=>{
        const number= Math.floor(Math.random() * (200 - 1) + 1);
      const response = await fetch(url + number);
      const responseJSON=await response.json();
      setAdviceId(responseJSON.slip.id);
      setAdvice(responseJSON.slip.advice);
    }
    useEffect(()=>{
      fetchApi()
    },[])
    function newAdvice(){
        fetchApi();
    }
    return (
        <section className="conteiner__card">
            <CardAdvice id_advice={adviceId} text_advice={advice} newAdvice={newAdvice}/>
        </section>
    ) 
}

export default ConsultAdvice