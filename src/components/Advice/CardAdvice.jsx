import { AdviceContext } from "../../context/AdviceContext";
import { useContext } from "react";
/* Images */
import icon_dice from './img/icon-dice.svg';
import pattern_divider_desktop from './img/pattern-divider-desktop.svg';
import pattern_divider_mobile from './img/pattern-divider-mobile.svg';
/*Style*/
import './CardAdvice.css'
function CardAdvice({advice}){
    const {newAdvice}= useContext(AdviceContext);
    return (
        <div className="card__advice">
            <h2 className="card__id">ADVICE #{advice.id}</h2>
            <p className="card__text">“{advice.text_advice}”</p>
            <img src={pattern_divider_desktop} alt="" width={200} className="card_pattern__divider"/>
            <img src={pattern_divider_mobile} alt="" width={200}
            className="card_pattern__divider--mobile"/>
            <button className="btn card__button" onClick={newAdvice} aria-label="Card-Button">
                <img src={icon_dice} alt="" width={25}/>
            </button>
        </div>
    )
}
export default CardAdvice;