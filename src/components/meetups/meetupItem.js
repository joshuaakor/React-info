import {useContext} from 'react';
import FavoritesContext from '../../store/favorites-context';

import classes from '../meetups/MeetupItem.module.css';
import Card from '../ui/Card';


function MeetupItem(props) {
    const Favoritescntxt = useContext(FavoritesContext);
    
    const itemIsFavorite = Favoritescntxt.itemIsFavorite(props.id);
    
    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            Favoritescntxt.removeFavorite(props.id);
        } else{
            Favoritescntxt.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                description: props.description,
                address: props.address,
            });
        }
    }

    return(
        <Card>
            <li className={classes.item}>
            <div className={classes.image}>
                <img src={props.image} alt={props.title}/>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
            </div>
        </li>
        </Card>
    );
}

export default MeetupItem;