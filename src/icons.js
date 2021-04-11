import React from 'react';
import{ Link} from "react-router-dom";
import icon1 from './images/films_normal.png';
import icon2 from './images/species_normal.png';
import icon3  from './images/planets_normal.png';
import icon4  from './images/characters_normal.png';
import icon5  from './images/droids_normal.png';
import icon6  from './images/vehicles_normal.png';

function Icons(){
return(
    <div  className="icons">
    <ul className="icon">
    
      <li>
        <Link to = '/films'>
      <img src={icon1} className="image"/>
      <div className="name">FILMS </div>
      </Link>
      </li>
      <li>
      <Link to = '/species'>
      <img src={icon2}  className="image" />
      <div className="name">SPECIES </div>
      </Link>
      </li>
      <li>
      <Link to ='/planets'>
      <img src={icon3} className="image"/>
      <div className="name">PLANETS </div>
      </Link>
      </li>
    </ul>
    
    
    <ul className="icon">
      <li>
        <Link to = '/people'>
      <img src={icon4} className="image"/>
      <div className="name">PEOPLE </div>
      </Link>
      </li>
      <li>
        <Link to ='/starship'>
      <img src={icon5} className="image"/>
      <div className="name">SPACESHIPS </div>
      </Link>
      </li>
      <li>
        <Link to = '/vehicles'>
      <img src={icon6} className="image"/>
      <div className="name">VEHICLES </div>
      </Link>
      </li>
    </ul>
    </div>
    )
    }
export default Icons;