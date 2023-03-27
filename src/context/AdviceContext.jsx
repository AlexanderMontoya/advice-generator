import {createContext} from 'react';
import {useState,useEffect} from 'react';
export const AdviceContext = createContext();
export function AdviceContextProvider(props){
    const url= "https://api.adviceslip.com/advice/";
    const [advice,setAdvice]=useState({
        id: '',
        text_advice: '',
    })
    useEffect(()=>{
        fetchApi()
    },[])

    const fetchApi = async()=>{
        const response = await fetch(url+ 117);
        const responseJSON=await response.json();
        setAdvice({
            id: responseJSON.slip.id,
            text_advice: responseJSON.slip.advice
        });
    }
    
    const newAdvice = async()=>{
        const number= Math.floor(Math.random() * (200 - 1) + 1);
        setAdvice({
            id: number,
            text_advice: "Cargando..."
        })
        const response = await fetch( url + number);
        const responseJSON=await response.json();
        setAdvice({
            id: responseJSON.slip.id,
            text_advice: responseJSON.slip.advice
        });
    }
    return (
        <AdviceContext.Provider value={{
            advice,
            newAdvice
        }}>
            {props.children}
        </AdviceContext.Provider>
    )
}