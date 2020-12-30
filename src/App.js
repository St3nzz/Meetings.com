import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <Nav />
                <Profile />
            </div>
        </div>
    );
}

export default App;
