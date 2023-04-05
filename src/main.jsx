import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Home from './Home';
import First from './First';
import Friends from './Friends';
import FriendDetails from './components/FriendDetails';
import CountryDetails from './CountryDetails';

const router = createBrowserRouter([
 {
  path: '/',
  element: <Home></Home>,
  children: [
    {
      path: '/',
      element: <First></First>,
      loader: () => fetch('https://restcountries.com/v3.1/all'),
    },
    {
      path: 'friends',
      element: <Friends></Friends>,
      loader: () => fetch('https://jsonplaceholder.typicode.com/users')
    },
    {
      path: 'friends/:friendId',
      element: <FriendDetails></FriendDetails>,
      loader: (params) => fetch(`https://jsonplaceholder.typicode.com/users/${params.params.friendId}`)
    },
    {
      path: '/:countryId',
      element: <CountryDetails></CountryDetails>,
      loader: ({params}) => fetch(`https://restcountries.com/v3.1/alpha/${params.countryId}`)
    },
    {
      path: 'about',
      element: <About></About>
    },
    {
      path: 'contact',
      element: <Contact></Contact>
    }
  ]
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
