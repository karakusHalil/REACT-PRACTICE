
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slice/productSlice';

const ProductList = () => {

    const dispatch = useDispatch();
    const {products} = useSelector((store)=> store.product)
    console.log(products)

    useEffect(()=>{
        dispatch(getAllProducts())
    },[])
  return (
    <>
    
    </>
  )
}

export default ProductList