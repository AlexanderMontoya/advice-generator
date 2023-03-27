import { AdviceContext } from "./context/AdviceContext";
import { FavoriteContext } from "./context/FavoriteContext";
import { useContext } from "react";
import toast, { Toaster } from 'react-hot-toast';
import CardAdvice from "./components/Advice/CardAdvice";
import { FaHeart } from "react-icons/fa";

function ContentAdvice(){
    const {advice}= useContext(AdviceContext);
    const { addAdviceFavorite}= useContext(FavoriteContext);
    return (
        <section className="conteiner__card">
            <CardAdvice advice={advice}/>
            <form onSubmit={addAdviceFavorite} className="form__favorite">
                <button aria-label="btnAgregar" className="btn form__favorite__btn"><FaHeart/></button>
            </form>
            <Toaster/>
        </section>
    ) 
}

export default ContentAdvice