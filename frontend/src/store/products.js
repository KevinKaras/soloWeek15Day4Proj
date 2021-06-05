import { baseUrl } from "../config"


const LOAD = 'products/LOAD';

const ADD_PRODUCT = 'products/ADD'

const GET_PRODUCT = 'product/GET_PRODUCT'




const add = product => ({
    type: ADD_PRODUCT,
    product
})

const load = products => ({
    type: LOAD,
    products
})

const getProd = product => ({
    type: GET_PRODUCT,
    product
})





export const grabListings = () => async (dispatch) => {
    const response = await fetch(`${baseUrl}/api/products`);
    // console.log("REPONSE:", response);
    if (response.ok) {
        
        const actualListings = await response.json();
        // console.log(actualListings.products);
        dispatch(load(actualListings.products))
    } 

}

export const addListing = (listingForm) => async (dispatch) => {
    console.log(listingForm)
    const response = await fetch(`${baseUrl}/api/create`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(listingForm)
    });

    

}

export const grabCurListing = (prodId) => async (dispatch) => {
    const response = await fetch(`${baseUrl}/api/products/${prodId}`)
    if(response.ok){
        const currentListing = await response.json();
        dispatch(getProd(currentListing.product))
        
    }
    
}




const initialState = {
    products: []
};


const listingReducer = (state = initialState, action) => {
    let newState;
    switch(action.type){
        case LOAD: {
            newState = {...state, products: [...action.products]}
            // action.products.forEach((product) => { 
            //     newState.products[product.id] = product
            // })
            return newState;
        }
        case ADD_PRODUCT: {
            newState = {...state, products: [...action.products]}
             
            return newState;
        }
        case GET_PRODUCT: {
            return {...state, products: [...state.products, action.product]}
            
        }
        default: return state;
    }
}

export default listingReducer;




