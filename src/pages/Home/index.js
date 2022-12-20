import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Product";
import { productsSelector } from "../../redux/slices/productSlice";
import { getProducts } from "../../redux/thunks/productThunk";

const Home = () => {
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, [])
  return (
    <>
      {
        products.map(({id, productType, url, model, price}) => (
          <Product key={id} id={id} productType={productType} url={url} model={model} price={price} />
        ))
      }
    </>
      
  )
}

export default Home