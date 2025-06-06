import axios from "axios"

import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/productConstants";


export const getProduct=(keyword="")=>async(dispatch)=>{
    try {
        dispatch({
            type:ALL_PRODUCT_REQUEST,
        })
        // const {data}=await axios.get("/api/products/getallproducts")

        let link=`/api/products/getallproducts?keyword=${keyword}`

        const {data}=await axios.get(link)
        // console.log(data)

        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:ALL_PRODUCT_FAIL,
            payload:error.response.data.message
        })
    }
}


export const getProductDetails=(id)=>async(dispatch)=>{
    try {
        dispatch({
            type:PRODUCT_DETAILS_REQUEST,
        })
        const {data}=await axios.get(`/api/products/getproductdetails/${id}`)
        // console.log("DATA",data.product)

        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        // console.log(error)
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload:error.response.data.message
        })
    }
}


export const clearErrors=()=>async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}