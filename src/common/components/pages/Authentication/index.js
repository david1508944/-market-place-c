import Registration from '../../Registration'
 import Login from "../../Login"
import { useDispatch, useSelector } from 'react-redux'
import { authRouteChanger, authRouteSelector } from '../../redux/slices/appSlice'
import { LOGIN } from '../../constants'
import { useCallback } from 'react'
 const Authentication = () => {
    const authRoute = useSelector(authRouteSelector)
    const dispatch = useDispatch()

    // const navigateTo = useCallback(route =>{
    //     dispatch(authRouteChanger(route))
    // }, []);

    return(
        <>
        {authRoute===LOGIN?<Login />: <Registration/>}
           
            
        </>
    )
}

export default Authentication;