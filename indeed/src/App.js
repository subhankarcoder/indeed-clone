import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import AllPosts from './pages/AllPosts';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routePath } from './routes/route';

function App() {
  return (
    <div className="App">
     {/* <Header /> */}
     {/* <Home /> */}
     <Router>
      <Routes>
        <Route path={routePath.home} element={<Home />}></Route>
        <Route path={routePath.posts} element={<AllPosts />}></Route>
        <Route path={routePath.create} element={<CreatePost />}></Route>
        <Route path={routePath.signup} element={<SignUp />}></Route>
        <Route path={routePath.login} element={<Login />}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
