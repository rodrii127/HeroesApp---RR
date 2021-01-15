import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { Navbar } from '../components/ui/Navbar';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className='ml-4 mt-3'>
                <Switch>
                    <Route exact path ="/marvel" component= { MarvelScreen } />
                    <Route exact path ="/dc" component= { DcScreen } />
                    <Route exact path ="/search" component= { SearchScreen } />
                    <Route exact path ="/hero/:heroeId" component= { HeroScreen } />

                    <Redirect to='/marvel' />
                </Switch>
            </div>
        </>
    )
}
