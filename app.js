import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";

const Home = ({ route }) => <div>
    <pre>
        {JSON.stringify(matchRoutes(routeConfig, window.location.pathname), undefined, 2)}
    </pre>
    <h1>Home</h1>
    {renderRoutes(route && route.routes)}
</div>
const Exact = () => <div><h2>Exactly</h2></div>
const CantRender = () => <div><h2>CantRender</h2></div>

const routeConfig = [{
    path: "/",
    component: Home,
    routes: [{
        path: "/content",
        component: Exact,
        exact: true
    }, {
        path: "/content/child",
        component: CantRender
    }]
}];

render(<BrowserRouter>
    <div>
        <ul>
            <li><Link to="/">/</Link></li>
            <li><Link to="/content">/content</Link></li>
            <li><Link to="/content/child">/content/child</Link></li>
        </ul>
        {renderRoutes(routeConfig)}
    </div>
</BrowserRouter>, document.getElementById("root"));
