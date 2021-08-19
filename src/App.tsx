import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const SecondRoute = lazy(() => import('./routes/second/SecondRoute'));
const FirstRoute = lazy(() => import('./routes/first/FirstRoute'));

const App = () => {
    return (
        <Suspense fallback={<div className="loader">Loading...</div>}>
            <Router>
                <Switch>
                    <Route exact path="/second" component={SecondRoute} />
                    <Route path="/" component={FirstRoute} />
                </Switch>
            </Router>
        </Suspense>
    );
};
export default App;
