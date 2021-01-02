import React from "react";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Messages from "./Components/Messages/Messages";
import News from "./Components/News/News";
import Communities from "./Components/Communities/Communities";
import Photos from "./Components/Photos/Photos";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="container">
                    <Nav/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/messages' component={Messages}/>
                    <Route path='/news' component={News}/>
                    <Route path='/communities' component={Communities}/>
                    <Route path='/photos' component={Photos}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
