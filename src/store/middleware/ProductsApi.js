import axios from "axios"
import { fetchproductsSucces  } from "../entities/products"
// import config from "../../configuration/ApiConfig.json"

const ProductsApi =({dispatch}) => next => async action =>{

    if(action.type !== "getproducts") return next(action)


    next(action)// getbugs برای نشون دادن اکشن دریافتی  در دوتولز با تایپ  

    const { url ,method,data } = action.payload
    console.log('aaaaa')

    try{
        const respone = await axios.request({
            baseURL :"https://dummyjson.com/auth/",
            url,
            method,
            data,
            headers: {
                'Authorization': localStorage.getItem('token') 
              }

        })

        console.log(respone.data)
        dispatch(fetchproductsSucces({data : respone.data}))


    }catch(error)
    {



    }


}
export default ProductsApi