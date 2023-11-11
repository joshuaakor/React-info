import {useNavigate} from 'react-router-dom';

import MeetupsForm from "../components/meetups/MeetupsForm";

function NewMeetups() {
    const navigate = useNavigate();

    function addMeetupHandler(enteredData){
        fetch('https://react-info-f2fb0-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(enteredData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            navigate('/');
        });
    }
    return (
        <section>
            <h1>Add New Meetups</h1>
            <MeetupsForm onAddmeetup={addMeetupHandler}/>

        </section>
    );
} 

export default NewMeetups;
