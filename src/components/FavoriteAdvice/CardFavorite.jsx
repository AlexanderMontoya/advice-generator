import { MdDelete } from "react-icons/md";
import './CardFavorite.css'
function CardFavorite({id_advice, text_advice, removeAdviceFavorite}){
    return (
        <div className="card__favorite">
            <p className="favorite__id">#{id_advice}</p>
            <p className="favorite__text">“{text_advice}”</p>
            <button className="btn favorite__btnDelete" aria-label="btnFavorito" onClick={()=>{removeAdviceFavorite(id_advice)}}>
                <MdDelete color="white" className="favorite__btnDelete__img"/>
            </button>
        </div>
    )
}
export default CardFavorite;