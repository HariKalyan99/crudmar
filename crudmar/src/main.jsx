import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './routes/App';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Displaypost from './components/Displaypost';
import Createpost from './components/Createpost';


const router = createBrowserRouter([
  {path: "/", element: <App/>, children: [
    {path: "/", element: <Createpost />},
    {path: "/post-list", element: <Displaypost />},
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
