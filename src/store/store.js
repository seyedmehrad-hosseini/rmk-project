import { configureStore , getDefaultMiddleware} from "@reduxjs/toolkit";

import Products from "./middleware/ProductsApi"
import reducer from './reducer'






export default configureStore({
    
    reducer ,
    middleware : [
        ...getDefaultMiddleware(),
        Products,


    ],
    devTools: true,
})

