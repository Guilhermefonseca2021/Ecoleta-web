import { Routes, Route, BrowserRouter} from 'react-router-dom'
import { Home } from './pages/Home'

export function Routes() {
    return (
        <>
            <BrowserRouter>
                <Routes path='/' element=''>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}