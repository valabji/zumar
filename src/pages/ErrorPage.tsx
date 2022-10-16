import React, { ReactElement } from 'react'
import { useRouteError } from 'react-router-dom'

interface RouterError {
  statusText?: string
  message?: string
}

export default function ErrorPage (): ReactElement {
  let error: RouterError = {}
  const err = useRouteError()
  if (typeof err === 'object' && err != null) {
    error = err
  }
  console.error(error)

  return (
    <div className="container">
      <h1>Oops!</h1>
      <p>404 Page Not Found</p>
    </div>
  )
}
