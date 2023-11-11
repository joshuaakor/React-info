import {useContext} from 'react';

import FavoritesContext from '../../store/favorites-context';

import {Link} from 'react-router-dom';

import classes from './Navbar.module.css';

function Navbar() {

    const Favoritescntxt = useContext(FavoritesContext);


    return (
        <header className={classes.header}>
            <div className={classes.logo}>MEETUPS</div>
            <nav>
                <ul> 
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/Newmeetups'> New Meetups</Link>
                    </li>
                    <li>
                        <Link to='/fave'>Favorite Meetups</Link>
                        <span className={classes.badge}>{Favoritescntxt.totalFavorites}</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;