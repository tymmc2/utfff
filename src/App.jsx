import { Outlet } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FNavbar from './components/navbar/FNavbar';

const App = () => {
    return (
        <div className="App">
            <FNavbar />
            <div style={{ height: 56 }}></div>
            <Outlet />
        </div>
    );
};

export default App;
