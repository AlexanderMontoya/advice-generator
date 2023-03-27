import { AdviceContext } from "./AdviceContext";
import { useContext } from "react";
import toast, { Toaster } from 'react-hot-toast';
import {createContext} from 'react';
import {useState,useEffect} from 'react';
export const FavoriteContext = createContext();

const notify = () => toast.success('El consejo fue añadido a tus favoritos!');
const notify_error = () => toast.error("El consejo ya esta en tus favoritos");

export function FavoriteContextProvider(props){
    const {advice}= useContext(AdviceContext);
    const [favoritos, setFavoritos]=useState([])
    useEffect(()=>{
        setFavoritos([])
    },[])
    const addAdviceFavorite = (e)=>{
        e.preventDefault();
        let existe = false;
        favoritos.map((element)=>{
            if(element.id_advice==advice.id){
                existe=true
            }
        })
        if(!existe){
            notify()
            setFavoritos([...favoritos,{
                id: favoritos.length,
                id_advice: advice.id,
                text_advice: advice.text_advice
            }])    
        }else{
            notify_error()
        }
        
    }
    function removeAdviceFavorite(id_advice){
        setFavoritos(favoritos.filter(favorito=>favorito.id_advice != id_advice))
    }
    return (
        <FavoriteContext.Provider value={{
            favoritos,
            addAdviceFavorite,
            removeAdviceFavorite
        }}>
            {props.children}
        </FavoriteContext.Provider>
    )
}