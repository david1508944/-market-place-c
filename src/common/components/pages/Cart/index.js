import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import instance from "../../../../api/axios";
import CartProduct from "../../CartProduct";
import { balanceSelector, cartsSelector, changeBalance, clearCart } from "../../redux/slices/cartSlice";
import { getCarts } from "../../redux/thunks/cartThunks";

const Cart = () => {
    const dispatch = useDispatch();
    const carts = useSelector(cartsSelector);
    const balance = useSelector(balanceSelector)

    useEffect(() => {
        dispatch(getCarts())
    }, [])
   
    const sumOfPrice = () => {
        return carts.map(item => Number(item.price.slice(0, -1))).reduce((acc, curr) => acc + curr, 0)
    }
    
    const pay = () => {
        const newBalance = balance - sumOfPrice();
        if(newBalance >= 0) {
            const deletePromises = carts.map(({id}) => instance.delete(`cart/${id}`))

            Promise.all(deletePromises)
            .then(res => {
                console.log('res', res)
                dispatch(clearCart())
            })            
        } else {
            console.log('not enough money')
        }
        
    }

    return (
        <>
            <div className="cart-container">
            {
                carts.map(({id, url, model, price}) => (
                    <CartProduct key={id} id={id} url={url} model={model} price={price} />
                ))
            }
            </div>
            <div className="payment">
                <button onClick={pay} className="button">Оплатить {sumOfPrice()}$</button>
            </div>        
        </>
       
    )
}

export default Cart