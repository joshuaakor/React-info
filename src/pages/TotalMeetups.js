import {useState} from 'react';
import {useEffect} from 'react';

import classes from './Loader.module.css';

import MeetupList from "../components/meetups/meetupList";

function TotalMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  
  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-info-f2fb0-default-rtdb.firebaseio.com/meetups.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const meetupss = [];

      for (const key in data){
        const meetup = {
          id: key,
          ...data[key]
        };

        meetupss.push(meetup);
      }
      
      
      setIsLoading(false);
      setLoadedMeetups(meetupss);
    });
  }, []);

 

    if (isLoading){
      return (
        <div className={classes.loadingContainer}>
          <div className={classes.loadingIcon}></div>
        </div>

      );
    }
  
  

    
    return (
        <section>
            <h1>All meetups</h1>
            <MeetupList meetups={loadedMeetups }/>
        </section>
    );
}

export default TotalMeetups;