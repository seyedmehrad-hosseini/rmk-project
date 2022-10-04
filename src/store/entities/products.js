import { createSlice } from "@reduxjs/toolkit";



// let lastId = 0;

const slice = createSlice({
    name : "products",
    initialState : {
        list :[],
        loading :false,
    },
    reducers :{

        loadingTrue :(products)=>{
            products.loading = true

        },
        loadingFalse :(products)=>{
            products.loading = false

        },

        fetchproductsSucces :(products , action)=>{
            products.list = action.payload.data

        },

    }
})


export const{

    fetchproductsSucces
    
} = slice.actions
export default slice.reducer




export const products =() =>{

    return {
        type : "getproducts",
        payload :{
                url : 'products', 
                             
                }
    }
}
