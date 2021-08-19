import React from 'react';
import './first.css';
import { Link } from 'react-router-dom';

const FirstRoute = () => {
    return (
        <div className="first_route_wrapper">
            <div>First route</div>
            <Link className="link" to="/second">
                Go to second route ➡️
            </Link>
        </div>
    );
};
export default FirstRoute;
