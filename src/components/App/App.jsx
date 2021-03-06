import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Header from '../Header/Header';
import MainPage from '../../pages/MainPage/MainPage';
import PopularPage from '../../pages/PopularPage/PopularPage';
import SoonPage from '../../pages/SoonPage/SoonPage';
import ViewedPage from '../../pages/ViewedPage/ViewedPage';
import { 
    PAGE_MAIN, 
    PAGE_POPULAR, 
    PAGE_SOON, 
    PAGE_VIEWED, 
    PAGE_MOVIE, 
    PAGE_SEARCH } from '../../constants/routers/routers';
import MoviePage from '../../pages/MoviePage/MoviePage';
import ResultPage from '../../pages/ResultsPage/ResultsPage';

const App = () => {
    return (
        <div className='app'>
            <Header />
            <Switch>
                <Route
                    exact={ true }
                    path={ PAGE_MAIN }
                >
                    <MainPage />
                </Route>
                <Route
                    path={ PAGE_POPULAR }
                >
                    <PopularPage />
                </Route>
                <Route
                    path={ PAGE_SOON }
                >
                    <SoonPage />
                </Route>
                <Route
                    path={ PAGE_VIEWED }
                >
                    <ViewedPage />
                </Route>
                <Route
                    path={`${PAGE_MOVIE}:id`}
                >
                    <MoviePage />
                </Route>
                <Route
                    path={PAGE_SEARCH}
                >
                    <ResultPage />
                </Route>
            </Switch>
        </div>
    );
};

export default App;