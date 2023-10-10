import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './routes/ProtectedRoutes.tsx'
import SignUp from './routes/SingUp.tsx'
import Login from './routes/Login.tsx'
import Dashboard from './routes/Dashboard.tsx'
import { AuthProvider } from './auth/AuthProvider.tsx'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';



const router = createBrowserRouter(
  [
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/singup',
      element: <SignUp/>
    },
    {
      path: '/',
      element: <ProtectedRoute/>,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard/>
        }
      ]
    }
  ]
)

const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql',
  cache: new InMemoryCache()
});

    

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>,
)