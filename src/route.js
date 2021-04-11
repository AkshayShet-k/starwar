import {Switch,Route} from 'react-router-dom';
import Films from './AllLinks/films';
import Species from './AllLinks/species';
import People from './AllLinks/people';
import Spaceship from './AllLinks/spaceships';
import Planets from './AllLinks/planets';
import Vehicles from './AllLinks/vehicles';
import LegalNotices from './AllLinks/legalnotice';
import TermsOfUse from './AllLinks/termsofuse';
import PrivacyPolicy from './AllLinks/privacypolicy';
import Help from './AllLinks/starwarhelpdesk';
import DisneyStore from './AllLinks/starwaratdisneystore';

import Homepage from './Homepage'

export default()=>
{
return (<Switch>
    <Route path={"/"} exact component={Homepage}/>
    <Route path={"/films"} exact  component={Films}/>
    <Route path={"/species"} exact component={Species}/>
    <Route path={"/planets"} exact component={Planets}/>
    <Route path={"/people"} exact component={People}/>
    <Route path={"/starship"} exact component={Spaceship}/>
    <Route path={"/vehicles"} exact component={Vehicles}/>
    <Route path={"/terms of use"} exact component={TermsOfUse}/>
    <Route path={"/legal notices"} exact component={LegalNotices}/>
    <Route path={"/privacy policy"} exact component={PrivacyPolicy}/>
    <Route path={"/star wars help desk"} exact component={Help}/>
    <Route path={"/star wars at disney stores"} exact component={DisneyStore}/>
</Switch>);
};