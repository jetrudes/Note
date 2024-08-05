import { Routes, Route } from 'react-router-dom';

import { SingIn } from '../../pages/SingnIn';
import { SingUp } from '../../pages/singnUp';

export function AlthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SingIn />} />
            <Route path="/Register" element={<SingUp />} />
        </Routes>
    )
}