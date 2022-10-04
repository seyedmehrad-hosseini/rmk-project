import axios from "axios"

const paginApi = async (pageNumber ,callback) =>{
    const skipNumber = (pageNumber -1) *5

    try{
        const response = await axios.request({
            baseURL :`https://dummyjson.com/auth/products?limit=5&skip=${skipNumber}`,
            method : 'get',
            headers: {
                'Authorization': localStorage.getItem('token') 
              }
        })
        console.log(response.data)
        callback(true , response.data)

    }catch(error)
    {}
}
export default paginApi