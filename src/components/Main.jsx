import react from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./About";

const Main = () => {
    return (
        <Router>
            <div>
                <div>
                    <Link to="/about">About</Link>
                </div>
                <div>
                    <Switch>
                        <Route path="/">
                            <Main />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default Main;
