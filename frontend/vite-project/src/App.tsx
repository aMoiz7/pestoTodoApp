

import TodoCard from './components/todoCard';
import Newtodo from './pages/newtodo';
import { lazy } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { Route , BrowserRouter ,Routes } from 'react-router-dom';

const Login = lazy(()=>import('./pages/login'))
const Signup = lazy(()=>import('./pages/signup'))


function App() {

  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>

    </Provider>
    
    </>
  )
}

export default App
