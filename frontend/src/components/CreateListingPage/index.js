import { setReviews } from '../../store/reviews'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Redirect } from 'react-router';
import { addListing } from '../../store/products'
import "./createListing.css"






const CreateListingPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');


    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault()

        const listingForm = {
            title,
            description,
            price
        }

        setTitle('')
        setDescription('')
        setPrice('')
        dispatch(addListing(listingForm))

    }
    
    
    

    return(
        <div>
            <div> 
                <h1>Create a Listing:</h1>
            </div>
            <form onSubmit={onSubmit} className="formElement">
                <div className="productTitle">
                    <label>Product Name: </label>
                    <input className="productTitleInput" type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div className="productDescription">
                    <label>Description: </label>
                    <textarea className="productDescriptionInput" type="text" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="productPrice">
                    <label>Price: </label>
                    <input className="productPriceInput" type="text" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                </div>
                <div className="submitBtnDiv">
                    <button className="submitProductBtn" type="submit"> Create Listing</button>
                </div>
            </form>
        </div>
    )

}

export default CreateListingPage