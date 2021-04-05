
const SET_REVIEWS = 'reviews/SET'      

const CREATE_REVIEWS = 'reviews/CREATE'


const set = reviews => ({
    type: SET_REVIEWS,
    reviews
})

const create = reviews => ({
    type: CREATE_REVIEWS,
    reviews
})


export const setReviews = () => async (dispatch) => {
    const theResponse = await fetch('/api/products')
    // console.log("RESPONSE IS:". theResponse);
    if(theResponse.ok) {
        const actualReviews = await theResponse.json();
        // console.log(actualReviews.reviews);
        dispatch(set(actualReviews.reviews))

    }
}

export const createReview = () => async (dispatch) => {
    
}





const initialReviewState = {};

const reviewsReducer = (state = initialReviewState, action) => {
    let newState;
    switch(action.type){
        case SET_REVIEWS: {
            newState = { ...state, reviews: action.reviews }
            return newState
        }
        default: return state;
    }


}

export default reviewsReducer;