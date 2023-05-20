import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import First from './components/First/First.jsx';
import Friends from './components/Friends/Friends.jsx';
import FriendDetail from './components/FriendDetail/FriendDetail.jsx';
import Posts from './components/posts/Posts.jsx';
import PostDetail from './components/PostDetail/PostDetail.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     // element: <div>This is the default main content</div>
//     element:<App></App>,
//     errorElement: <ErrorPage></ErrorPage>
//   },

//   {
//     path: '/about',
//     // element: <div>This is the about page</div>
//     element: <About></About>
//   },
//   {
//     path:'/contact',
//     // element:<div>Contact us. Right Now</div>
//     element: <Contact></Contact>
//   }
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<First></First>
      },
      {
        path:'friends',
        element:<Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        // path:'friend',
        // path:'friend/1',
        // path:'friend/friendId',
        path:'friend/:friendId',
        element:<FriendDetail></FriendDetail>,
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: 'posts',
        element:<Posts></Posts>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:'post/:postId',
        element:<PostDetail></PostDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path: '*',
        element: <div>Sorry, an unexpected error has occurred</div>
        // element: <div>444444440444444444</div>
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)


// //  ei gula last er video te arekta router create kre then oi khane router kivave dite hoi seita dekhaice jmon...... folder name routed-rest-countries.

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Home from './components/Home/Home.jsx';
// import Countries from './components/Countries/Countries.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     // element: <div>Hello, world</div>
//     element: <Home></Home>,
//     children:[
//       {
//         path:'/',
//         element: <Countries></Countries>,
//         loader: () => fetch('https://restcountries.com/v3.1/all')
//       },
//       {
//         path:'country/:countryId',
//         element:<div></div>,
//         loader:({params})=> fetch(`/${params.countryId}`)
//       }
//     ]
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router}></RouterProvider>
//   </React.StrictMode>,
// )


// // Home folder er jonn.. 
// import React from 'react';
// import { Outlet } from 'react-router-dom';

// const Home = () => {
//     return (
//         <div>
//             <h4>This is header</h4>
//             <Outlet></Outlet>
//         </div>
//     );
// };

// export default Home;

// // countries folder er jonno ... countries.jsx file nicer ei gula 
// import React from "react";
// import { Link, useLoaderData } from "react-router-dom";

// const Countries = () => {
//   const countries = useLoaderData();
//   // console.log(countries);
//   return (
//     <div>
//       <h3>All Countries: {countries.length}</h3>

//       <ul>
//         {countries.map((country) => (
//           <li>{country.name.common} <Link to = {`/country/${country.cca3}`}>Details</Link></li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Countries;