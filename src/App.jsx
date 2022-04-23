import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FNavbar from './components/navbar/FNavbar';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <div className="App">
            <FNavbar />
            <Outlet />
        </div>
    );
};

export default App;
