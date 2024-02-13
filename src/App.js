
import './App.css';
import LoginForm from './component/LoginForm';

import Employee from './pages/Employee/Employee';
import Home from './pages/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/employee",
    element: <Employee />
  },
  
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <LoginForm/> */}
    </div>
  );
}

export default App;
