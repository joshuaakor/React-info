import {useState} from 'react';
import {useEffect} from 'react';

import { motion} from 'framer-motion';

import classes from './Loader.module.css';

import MeetupList from "../components/meetups/meetupList";

function TotalMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
 // const [move, setMove] = useState(true);
  
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
            <motion.div animate={{x:[-200,200,-200]}} transition={{repeat:Infinity, duration:8}}>
            <MeetupList meetups={loadedMeetups }/>
            </motion.div>
        </section>
    );
}

export default TotalMeetups;