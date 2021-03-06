import React from 'react';
import Landing from '../shared/Landing';
import PageDivider from '../shared/PageDivider';
import MenuSection from './MenuSection';

const Menu = (props) => {
    return(
        <React.Fragment>
            <Landing title="Menu" image="empty-bar.jpg" />
            <MenuSection title="Appetizers" />
            <PageDivider image="spicy-nachos.jpg" />
            <MenuSection title="Drinks" />
            <PageDivider image="bar-drinks.jpg" />
            <MenuSection title="Cafe" />
            <PageDivider image="coffee-and-cream.jpg" />
            <MenuSection title="Entrees" />
            <PageDivider image="burger-fries-beer.jpg" />
        </React.Fragment>
    );
}

export default Menu;
