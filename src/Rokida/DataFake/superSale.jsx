import imgItem from "../images/product-sale-2.png";

export const data = [
    {
        image : imgItem,
        discount : 30
    },
    {
        image : imgItem,
        discount : 30
    },
    {
        image : imgItem,
        discount : 30
    },
    {
        image : imgItem,
        discount : 30
    },
    {
        image : imgItem,
        discount : 30
    },
    {
        image : imgItem,
        discount : 30
    },
    {
        image : imgItem,
        discount : 30
    },
    {
        image : imgItem,
        discount : 30
    },
    {
        image : imgItem,
        discount : 30
    },

    {
        image : imgItem,
        discount : 30
    },
    {
        image : imgItem,
        discount : 30
    },
    {
        image : imgItem,
        discount : 30
    },
    {
        image : imgItem,
        discount : 30
    }
]
export const PaginationData = ( data , page = 1, limit = 5) => {
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const result = data.slice(startIndex , endIndex)
    return result
}