import { grabListings } from '../../store/products';
import { setReviews } from '../../store/reviews'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'



const ProductPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(grabListings());
        dispatch(setReviews())
    }, [dispatch])
    const products = useSelector(state => {
        return state.listings.products
    })
    const reviews = useSelector(state => {
        return state.reviews.reviews
    })
    
    const { prodId } = useParams();


    const pageProduct = products[prodId-1];

    const curProductReview = reviews[prodId-1]

    console.log(curProductReview)
    
    
    

    return(
        <div>
           <h1>Product Name: {pageProduct.productName}</h1>
           <h2>Price: ${pageProduct.price} </h2>
           <h3>Description: "{pageProduct.description}"</h3>

           <h1>Reviews:</h1>
           <h3>Title: {curProductReview.title}</h3>
           <p>{curProductReview.textBody}</p>




        </div>
    )

}

export default ProductPage