

import Newtodo from './pages/newtodo';
import { lazy } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { Route , BrowserRouter ,Routes } from 'react-router-dom';
import TodoCard from './components/todoCard';

const Login = lazy(()=>import('./pages/login'))
const Signup = lazy(()=>import('./pages/signup'))
const Home = lazy(()=>import('./pages/todo'))


function App() {

  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/tc'  element={<TodoCard  title={"my"} description={"des"} status={"done"} />}/> */}
      </Routes>
    </BrowserRouter>

    </Provider>
    
    </>
  )
}

export default App
