import { Routes, Route, BrowserRouter} from 'react-router-dom'
import { Home } from './pages/Home'
import { CreatePoint } from './pages/CreatePoint';

export function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/create-point' element={<CreatePoint />} />
            </Routes>
        </>
    );
}