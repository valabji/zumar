import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout'
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import CategoryPage from '../pages/CategoryPage'
import SearchPage from '../pages/searchPage'
import ServicesPage from '../pages/servicesPage'
import OrdersPage from '../pages/ordersPage'
import AccountPage from '../pages/accountPage'
import CartPage from '../pages/cartPage'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'category/:id',
        element: <CategoryPage />
      },
      {
        path: 'product/:id',
        element: <ProductPage />
      },
      {
        path: 'search',
        element: <SearchPage />
      },
      {
        path: 'services',
        element: <ServicesPage />
      },
      {
        path: 'orders',
        element: <OrdersPage />
      },
      {
        path: 'account',
        element: <AccountPage />
      },
      {
        path: 'cart',
        element: <CartPage />
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  }
])
export default router
