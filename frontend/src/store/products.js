


const LOAD = 'products/LOAD';

const ADD_PRODUCT = 'products/ADD'




const add = product => ({
    type: ADD_PRODUCT,
    product
})

const load = products => ({
    type: LOAD,
    products
})





export const grabListings = () => async (dispatch) => {
    const response = await fetch('/api/products');
    // console.log("REPONSE:", response);
    if (response.ok) {
        
        const actualListings = await response.json();
        console.log(actualListings.products);
        dispatch(load(actualListings.products))
    } 

}

export const addListing = (listingForm) => async (dispatch) => {
    const response = await fetch('/create', {
        method: "POST",
         
    });

    

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
        default: return state;
    }
}

export default listingReducer;




