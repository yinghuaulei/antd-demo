import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Component} from "react";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import App from "../App";

export class IRouter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Router>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/app" element={<App/>}></Route>
            </Routes>
        </Router>)
    }
}