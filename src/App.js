import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store/store';
import Dashboard from './Pages/Dashboard';
import LoginForm from './Components/Auth/LoginForm';
import SignUpForm from './Components/Auth/SignUpForm'


const token = localStorage.getItem('accessToken')

function App() {
  console.log(token, 'token');
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
          {token ? <Route path="/" element={<Dashboard />}></Route> : <Route path='/' element={<LoginForm />}></Route>}
          <Route path='/signup' element={<SignUpForm/>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
