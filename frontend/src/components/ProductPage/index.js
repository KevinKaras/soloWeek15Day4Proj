import { grabListings, grabCurListing } from '../../store/products';
import { setReviews } from '../../store/reviews'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import meme from './meme.jpg';
import "./product.css"



const ProductPage = () => {
    const { prodId } = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(grabCurListing(prodId));
        dispatch(setReviews())
    }, [dispatch])
    const products = useSelector(state => {
        return state.listings.products
    })
    const reviews = useSelector(state => {
        return state.reviews.reviews
    })
    
    


    
    const pageProduct = products.find((product) => product.id === +prodId);
    if (!pageProduct) {
        return (<div></div>)
    }
    // console.log(products)
    // console.log(pageProduct)

    const curProductReviews = []

    // console.log(curProductReviews)
    
    
    

    return(
        <div>
           <div>
            <a>
                <img alt="meme" className="photo" src={meme} />
            </a>
           </div>
           <h1 className="titleText">{pageProduct.productName}</h1>
           <h2>"{pageProduct.description}"</h2>
           <h3 className="price">${pageProduct.price} </h3>
           <button className="addBtn">Add to cart</button>

            <div>
                <h1 className="reviewTitle">Reviews:</h1>
                <div className="reviewEntity">
                    {/* <h3>{curProductReviews.title}</h3>
                    <p className="reviewTextBody">{curProductReviews.textBody}</p> */}
                </div> 
                    

                <form className="form">
                    <label className="text">
                        <h2 className="reviewFormTitle">Add a review</h2>
                    </label>
                        <textarea type="text" className="textBox" name="review" />
                        <input type="submit" value="Submit Review" className="submitBtn" />
                </form>

            </div>

            


        </div>
    )

}

export default ProductPage