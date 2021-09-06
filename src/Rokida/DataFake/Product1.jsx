import img_item from '../images/item_sp1.jpg';
export const data = [
  {
    id: 'p01',
    text: 'Bộ chăn gối lông cừu Anh',
    price: 850.0,
    price__old: 850.0,
    img: img_item,
    is_ship: true,
    is_sale: true,
    salesPercent: 30,
    quantity: 21,
    size: ['M', 'L', 'XL'],
    color: ['Red', 'Blue', 'Green'],
    detail: '',
  },
  {
    id: 'p02',
    text: 'Bộ chăn gối lông cừu Anh',
    price: 850.0,
    price__old: 850.0,
    img: img_item,
    is_ship: true,
    is_sale: false,
    salesPercent: 30,
    quantity: 21,
    size: ['M', 'L', 'XL'],
    color: ['Red', 'Blue', 'Green'],
    detail: '',
  },
  {
    id: 'p03',
    text: 'Bộ chăn gối lông cừu Anh',
    price: 850.0,
    price__old: 850.0,
    img: img_item,
    is_ship: true,
    is_sale: false,
    salesPercent: 30,
    quantity: 21,
    size: ['M', 'L', 'XL'],
    color: ['Red', 'Blue', 'Green'],
    detail: '',
  },
  {
    id: 'p04',
    text: 'Bộ chăn gối lông cừu Anh',
    price: 850.0,
    price__old: 850.0,
    img: img_item,
    is_ship: true,
    is_sale: false,
    salesPercent: 30,
    quantity: 21,
    size: ['M', 'L', 'XL'],
    color: ['Red', 'Blue', 'Green'],
    detail: '',
  },
  {
    id: 'p05',
    text: 'Bộ chăn gối lông cừu Anh',
    price: 850.0,
    price__old: 850.0,
    img: img_item,
    is_ship: true,
    is_sale: false,
    salesPercent: 30,
    quantity: 21,
    size: ['M', 'L', 'XL'],
    color: ['Red', 'Blue', 'Green'],
    detail: '',
  },
  {
    id: 'p06',
    text: 'Bộ chăn gối lông cừu Anh',
    price: 850.0,
    price__old: 850.0,
    img: img_item,
    is_ship: true,
    is_sale: false,
    salesPercent: 30,
    quantity: 21,
    size: ['M', 'L', 'XL'],
    color: ['Red', 'Blue', 'Green'],
    detail: '',
  },
  {
    id: 'p07',
    text: 'Bộ chăn gối lông cừu Anh',
    price: 850.0,
    price__old: 850.0,
    img: img_item,
    is_ship: true,
    is_sale: true,
    salesPercent: 30,
    quantity: 21,
    size: ['M', 'L', 'XL'],
    color: ['Red', 'Blue', 'Green'],
    detail: '',
  },
  {
    id: 'p08',
    text: 'Bộ chăn gối lông cừu Anh',
    price: 850.0,
    price__old: 850.0,
    img: img_item,
    is_ship: true,
    is_sale: true,
    salesPercent: 30,
    quantity: 21,
    size: ['M', 'L', 'XL'],
    color: ['Red', 'Blue', 'Green'],
    detail: '',
  },
  {
    id: 'p09',
    title: 'Bộ chăn gối lông cừu Anh',
    description: 'description',
    price: 850.0,
    price__old: 850.0,
    img: img_item,
    is_ship: true,
    salesPercent: 30,
    is_sale: false,
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
