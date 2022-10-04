import { combineReducers } from "redux";
import productsReduser from "./entities/products"

export default combineReducers({

        products :productsReduser,

})