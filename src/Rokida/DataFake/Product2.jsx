
import img_item2 from '../images/products/products-1.jpg'
export const data = [
    {
        text :  "Bộ chăn gối lông cừu Anh giảm giá 30%",
        price : 850.000,
        price__old : 850.000,
        img : img_item2,
        is_ship : true ,
        is_sale : true ,
    },
    {
        text :  "Bộ chăn gối lông cừu Anh giảm giá 30%",
        price : 850.000,
        price__old : 850.000,
        img : img_item2,
        is_ship : true ,
        is_sale : false ,
    },
    {
        text :  "Bộ chăn gối lông cừu Anh giảm giá 30%",
        price : 850.000,
        price__old : 850.000,
        img : img_item2,
        is_ship : true ,
        is_sale : false ,
    },
    {
        text :  "Bộ chăn gối lông cừu Anh giảm giá 30%",
        price : 850.000,
        price__old : 850.000,
        img : img_item2,
        is_ship : true ,
        is_sale : false ,
    },
    {
        text :  "Bộ chăn gối lông cừu Anh giảm giá 30%",
        price : 850.000,
        price__old : 850.000,
        img : img_item2,
        is_ship : true ,
        is_sale : false ,
    },
    {
        text :  "Bộ chăn gối lông cừu Anh giảm giá 30%",
        price : 850.000,
        price__old : 850.000,
        img : img_item2,
        is_ship : true ,
        is_sale : false ,
    },
    {
        text :  "Bộ chăn gối lông cừu Anh giảm giá 30%",
        price : 850.000,
        price__old : 850.000,
        img : img_item2,
        is_ship : true ,
        is_sale : true ,
    },
    {
        text :  "Bộ chăn gối lông cừu Anh giảm giá 30%",
        price : 850.000,
        price__old : 850.000,
        img : img_item2,
        is_ship : true ,
        is_sale : true ,
    },
    {
        text :  "Bộ chăn gối lông cừu Anh giảm giá 30%",
        price : 850.000,
        price__old : 850.000,
        img : img_item2,
        is_ship : true ,
        is_sale : false ,
    },

    {
        text :  "Bộ chăn gối lông cừu Anh giảm giá 30%",
        price : 850.000,
        price__old : 850.000,
        img : img_item2,
        is_ship : true ,
        is_sale : false ,
    },
    {
        text :  "Bộ chăn gối lông cừu Anh giảm giá 30%",
        price : 850.000,
        price__old : 850.000,
        img : img_item2,
        is_ship : true ,
        is_sale : false ,
    },
    {
        text :  "Bộ chăn gối lông cừu Anh giảm giá 30%",
        price : 850.000,
        price__old : 850.000,
        img : img_item2,
        is_ship : true ,
        is_sale : false ,
    }
]
export const PaginationData = ( data , page = 1, limit = 5) => {
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const result = data.slice(startIndex , endIndex)
    return result
}