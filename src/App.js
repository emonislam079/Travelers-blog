import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Component/Shared/Header/Header';
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login/Login';
import Registration from './Component/Registration/Registration';
import NotFound from './Component/NotFound/NotFound';
import Footer from './Component/Shared/Footer/Footer';
import AddBlogs from './Component/AddBlog/AddBlogs';
import AuthProvider from './Contex/AuthProvider'


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/addBlogs">
              <AddBlogs></AddBlogs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Registration></Registration>
            </Route>

            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        </AuthProvider>
      
    </div>
  );
}

export default App;