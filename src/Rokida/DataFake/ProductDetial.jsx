import img_detail from '../images/item_sp1.jpg';
export const data = [
  {
    text: 'Bộ chăn gối lông cừu Anh giảm giá 30%',
    price: 850.0,
    price__old: 850.0,
    img: img_detail,
    is_ship: true,
    is_sale: true,

    id: 'p01',
    quantity: 21,
    size: ['M', 'L', 'XL'],
    color: ['Red', 'Blue', 'Green'],
    detail: '',
  },
  {
    text: 'Bộ chăn gối lông cừu Anh giảm giá 30%',
    price: 850.0,
    price__old: 850.0,
    img: img_detail,
    is_ship: true,
    is_sale: false,

    id: 'p01',
    quantity: 21,
    size: ['M', 'L', 'XL'],
    color: ['Red', 'Blue', 'Green'],
    detail: '',
  },
];
export const PaginationData = (data, page = 1, limit = 5) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const result = data.slice(startIndex, endIndex);
  return result;
};
