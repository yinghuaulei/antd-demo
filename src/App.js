import './App.css';
import {isLogin} from "./Utils/auth";
import {Component} from "react";
import Login from "./Components/Login";
import Home from "./Components/Home";


export class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (isLogin()) {
            return <Home />
        }

        return <Login />
    }
}

export default App;
