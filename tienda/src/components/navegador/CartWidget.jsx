import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navegador.css'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    let productsCounter = 0;
    return (
        <div className="carWidget">
            <FontAwesomeIcon icon={faBasketShopping} size="lg" color='brown' />
            <div className="qty-display">{productsCounter}</div>
        </div>
    );
}

export default CartWidget;