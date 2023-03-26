import icon_dice from '../assets/icon-dice.svg';
import pattern_divider_desktop from '../assets/pattern-divider-desktop.svg';
import pattern_divider_mobile from '../assets/pattern-divider-mobile.svg';
import './CardAdvice.css'
function CardAdvice({id_advice, text_advice, newAdvice}){
    return (
        <div className="card__advice">
            <h2 className="card__id">ADVICE #{id_advice}</h2>
            <p className="card__text">“{text_advice}”</p>
            <img src={pattern_divider_desktop} alt="" width={200} className="card_pattern__divider"/>
            <img src={pattern_divider_mobile} alt="" width={200}
            className="card_pattern__divider--mobile"/>
            <button className="card__button" onClick={newAdvice}>
                <img src={icon_dice} alt="" width={25}/>
            </button>
        </div>
    )
}
export default CardAdvice;