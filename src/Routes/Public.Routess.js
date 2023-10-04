import React from 'react';
import { Redirect, Switch } from 'react-router';
import { PublicRoute } from '../Routes/HelperRoutes';
import DashBoard from '../CompuFet/Admin/DashBoard';
import Pastel from '../PastelChile/Pastel';
import NabvarPal from '../PastelChile/Components/Navbar/NabvarPal';
import CatPal from '../PastelChile/Components/Catalogo/catPal';
import ProductPal from '../PastelChile/Components/Product/ProductPal';
import qsPal from '../PastelChile/Components/QSPal/qsPal';
import Inisesion from '../PastelChile/Components/Login/Inisesion';
import Regis from '../PastelChile/Components/Login/Regis';


const PublicRoutess = () => {
    return (
        <Switch>
            {/* Rutas de Pastel Chile */}
            <PublicRoute exact path="/" component={Pastel} />
            <PublicRoute exact path="/Iniciar_Sesion" component={Inisesion} />
            <PublicRoute exact path="/Registrar" component={Regis} />
            <PublicRoute exact path="/Admin" component={DashBoard} />
            <PublicRoute exact path="/barraPal" component={NabvarPal} />
            <PublicRoute exact path="/catalogo" component={CatPal} />
            <PublicRoute exact path="/produ" component={ProductPal} />
            <PublicRoute exact path="/contactenos" component={qsPal} />
            <Redirect path="/**" to="/" />
        </Switch>
    )
}

export default PublicRoutess

// https://www.fiscalia.gov.co/colombia/wp-content/uploads/D-102731.pdf