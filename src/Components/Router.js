import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Component} from "react";
import App from '../App';
import {Login} from "./Login";
import Register from "./Register";

export class IRouter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Router>
            <Routes>
                <Route exact path="/" element={<App/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
        </Router>)
    }
}