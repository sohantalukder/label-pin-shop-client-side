import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NoteAvailable from './Pages/NoteAvilable/NoteAvailable';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider';
import AddNewServices from './Pages/AddNewService/AddNewServices';
import Explores from './Pages/Home/Explores/Explores';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Purchase from './Pages/Purchase/Purchase';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ShowAllOrder from './Pages/ShowAllOrder/ShowAllOrder';
import ManageAllOrder from './Pages/MangeAllOrder/ManageAllOrder';
import Dashboard from './Pages/Dashboard/Dashboard';
import Reviews from './Pages/Reviews/Reviews';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import MyOrder from './Pages/MyOrder/MyOrder';
import Pay from './Pages/Dashboard/Pay/Pay';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/register'>
              <Register></Register>
            </Route>

            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path='/explore'>
              <Explores></Explores>
            </Route>

            <Route path='/reviews'>
              <Reviews></Reviews>
            </Route>
            <Route path='/pay'>
              <Pay></Pay>
            </Route>
            <Route path='/addReview'>
              <AddReview></AddReview>
            </Route>
            <Route path='/addNewService'>
              <AddNewServices></AddNewServices>
            </Route>
            <Route path='/manageOrder'>
              <ManageAllOrder></ManageAllOrder>
            </Route>

            <Route path='/myOrder'>
              <MyOrder></MyOrder>
            </Route>
            <PrivateRoute path='/purchase/:productId'>
              <Purchase></Purchase>
            </PrivateRoute>

            <Route path='*'>
              <NoteAvailable></NoteAvailable>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
