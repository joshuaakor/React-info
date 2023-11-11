import {useRef} from 'react';

import classes from './MeetupsForm.module.css';

import Card from '../ui/Card';

function MeetupsForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addessInputRef = useRef();
    const descriptionInputRef = useRef();

    function SubmitHandler(event){
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addessInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const enteredData = {
            title:enteredTitle,
            image:enteredImage,
            address:enteredAddress,
            description:enteredDescription,
        }
        props.onAddmeetup(enteredData);
    }
    
    return <Card>
        <form className={classes.form} onSubmit={SubmitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type='text' required id='title' ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type='url' required id='image' ref={imageInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type='text' required id='address' ref={addessInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea id='description'  required rows='5' ref={descriptionInputRef}></textarea>

            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}

export default MeetupsForm;