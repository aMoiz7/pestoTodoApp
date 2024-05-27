import  { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store/store';
import Auth from './middleware/auth';

const Login = lazy(() => import('./pages/login'));
const Signup = lazy(() => import('./pages/signup'));
const Home = lazy(() => import('./pages/todo'));

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/login' element={<Auth type="public"><Login /></Auth>} />
                        <Route path='/signup' element={<Auth type="public"><Signup /></Auth>} />
                        <Route path='/' element={<Auth type="private"><Home /></Auth>} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
