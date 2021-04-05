import { grabListings } from '../../store/products';
import { setReviews } from '../../store/reviews'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'




const ProductFeedContainer = () => {
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

    


    return(

        <div>
            <div>
            {products.map((product) =>{
                return <div>
                    <NavLink to={`/products/${product.id}`}>{product.productName}</NavLink>
                    <ul>
                        <li>
                                {product.description}
                        </li>
                        <li>
                                ${product.price}
                        </li>
                    </ul>
                </div>
            })}
            </div>
        </div>
    )

}

export default ProductFeedContainer
