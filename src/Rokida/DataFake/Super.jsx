import img_supersale from '../images/product-sale-1.png'
export const data = [
    {
        text :  "Cây mây cảnh trong nhà lọc khí độc - đẹp và thân thiện",
        price : 850.000,
        img : img_supersale,
    },
    {
        text :  "Cây mây cảnh trong nhà lọc khí độc - đẹp và thân thiện",
        price : 850.000,
        img : img_supersale,
    },
    {
        text :  "Cây mây cảnh trong nhà lọc khí độc - đẹp và thân thiện",
        price : 850.000,
        img : img_supersale,
    },
    {
        text :  "Cây mây cảnh trong nhà lọc khí độc - đẹp và thân thiện",
        price : 850.000,
        img : img_supersale,
    },
    {
        text :  "Cây mây cảnh trong nhà lọc khí độc - đẹp và thân thiện",
        price : 850.000,
        img : img_supersale,
    },
    {
        text :  "Cây mây cảnh trong nhà lọc khí độc - đẹp và thân thiện",
        price : 850.000,
        img : img_supersale,
    },
    {
        text :  "Cây mây cảnh trong nhà lọc khí độc - đẹp và thân thiện",
        price : 850.000,
        img : img_supersale,
    },
    {
        text :  "Cây mây cảnh trong nhà lọc khí độc - đẹp và thân thiện",
        price : 850.000,
        img : img_supersale,
    }
]
export const PaginationData = ( data , page = 1, limit = 5) => {
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const result = data.slice(startIndex , endIndex)
    return result
}