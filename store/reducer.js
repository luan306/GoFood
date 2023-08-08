import PRODUCTS from "../data/products";


const initialState = {
    products: PRODUCTS, //quản lí sản phẩm
    favProducts: [],//quản lí yêu thích
    filterProducts: PRODUCTS,
    giohang: [],
    SearchProducts: [],
}
const reducer = (state = initialState, action) => {
    if (action.type === 'THEM_VAO_YEU_THICH') {
        const index = state.favProducts.findIndex(product => product.id === action.productId)

        if (index >= 0) {
            const copy = [...state.favProducts]
            copy.splice(index, 1)
            return { ...state, favProducts: copy }
        }
        else {
            let copy = [...state.favProducts]
            console.log(copy)
            const product = state.products.find(product => product.id === action.productId)
            copy = copy.concat(product)
            console.log(copy)
            return { ...state, favProducts: copy }
        }
    }
    if (action.type === 'THEM_VAO_Gio_Hang') {
        const index = state.giohang.findIndex(product => product.id === action.productId)

        if (index >= 0) {
            const copy = [...state.giohang]
            copy.splice(index, 1)
            return { ...state, giohang: copy }
        }
        else {
            let copy = [...state.giohang]
            console.log(copy)
            const product = state.products.find(product => product.id === action.productId)
            copy = copy.concat(product)
            console.log(copy)
            return { ...state, giohang: copy }
        }
    }
    if (action.type === 'Xóa_Gio_Hang') {
        const index = state.giohang.findIndex(product => product.id === action.productId)

        if (index >= 0) {
            const copy = [...state.giohang]
            copy.splice(index, 1)
            return { ...state, giohang: copy }
        }
        else {
            let copy = [...state.giohang]
            // console.log(copy)
            const product = state.products.find(product => product.id === action.productId)
            copy = copy.remove(product)
            // console.log(copy)
            return { ...state, giohang: copy }
        }
    }
    else if (action.type === 'TIM_KIEM') {
        if (action.search !== "") {
            const ch = action.search.toLowerCase();
            const cpsearch = [...state.products]

            const Search = []
            for (const key in cpsearch) {
                if (cpsearch[key].name.toLocaleLowerCase().indexOf(ch) >= 0) {
                    Search.push(cpsearch[key])
                }
            }
            return { ...state, SearchProducts: Search }
        }
        else {
            return { ...state, SearchProducts: state.products }
        }
    }

    if (action.type === 'LOC_SAN_PHAM') {
        console.log(action.filters)
        // if (action.filters.isBrandNewOn === true) {
        //     const copyProduct = state.products.filters(item => item.isBrandNewOn === true)
        //     consle.log(copyProduct)
        //     if (action.filters.isSaleOn === true) {
        //         copyProduct = copyProduct.filters(item => item.isSaleOn === true)

        //         return { ...state, products: copyProduct }


        //     }
        // }


    }
    return state
}
export default reducer;