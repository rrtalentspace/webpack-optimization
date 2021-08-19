import React from 'react';
import './second.css';
import { Link } from 'react-router-dom';
import { sortBy as _sort, map as _map } from 'lodash';

const arrayList = [
    'list1',
    'list2',
    'list3',
    'list6',
    'list0',
    'list5',
    'list9'
];
const SecondRoute = () => {
    return (
        <div className="second_route_wrapper">
            <div>Second route</div>
            <Link className="link" to="/">
                ⬅️ Go to first route
            </Link>
            <div className="list">{_map(_sort(arrayList), (i) => (
                <div>{i}</div>
            ))}
            </div>
        </div>
    );
};
export default SecondRoute;
