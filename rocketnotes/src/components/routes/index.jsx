import { BrowserRouter } from 'react-router-dom';

import { AppRoutes} from './app.routes';
import { AlthRoutes} from './alth.routes';

export function Routes() {
    return (
        <BrowserRouter>
         <AlthRoutes />
        </BrowserRouter>
    )
}