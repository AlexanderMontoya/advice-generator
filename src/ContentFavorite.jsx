import { useState } from "react";
import { FavoriteContext } from "./context/FavoriteContext";
import { useContext } from "react";
import CardFavorite from "./components/FavoriteAdvice/CardFavorite";
import { BiBookHeart , BiX} from "react-icons/bi";

function ContentFavorite(){
    const {favoritos, removeAdviceFavorite}= useContext(FavoriteContext);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className="btn btn__active">
                {!isOpen?<div className="content__btn"><BiBookHeart/><p className="content__cont">{favoritos.length}</p></div>:<BiX/>}
            </button>
            <section className={`conteiner__favoritos ${isOpen?'visible':''}`}>
                <h2>My advices favorites</h2>
                {favoritos.length==0?<p className="conteiner__favoritos--vacio">You don't have favorite advices yet</p>:""}
                {favoritos.map((favorito)=>(
                    <CardFavorite key={favorito.id_advice} id_advice={favorito.id_advice} text_advice={favorito.text_advice} removeAdviceFavorite={removeAdviceFavorite}/>
                ))}
            </section>
        </>
        
    ) 
}

export default ContentFavorite