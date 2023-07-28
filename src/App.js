import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import RegisterPage from "./component/page/RegisterPage";
import Header from "./component/page/Header";
import Login from "./component/page/Login";
import FeedPage from "./component/page/FeedPage";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<FeedPage/>}/>
                    <Route path="/signup" element={<RegisterPage/>}/>
                    <Route path="/signin" element={<Login />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
