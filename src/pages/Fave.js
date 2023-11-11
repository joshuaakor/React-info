import {useContext} from 'react';

import FavoritesContext from '../store/favorites-context';

import MeetupList from '../components/meetups/meetupList';

function Fave() {
   const Favoritescntxt = useContext(FavoritesContext);
    
    let content;
    if(Favoritescntxt.totalFavorites === 0) {
        content = <p>You have no favorite Meetups</p>
    } else{
       content = <MeetupList meetups = {Favoritescntxt.favorites}/>
    }
    
    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
    
   
}

export default Fave;