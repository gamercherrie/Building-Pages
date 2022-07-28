import React from 'react'
import './App.css'
import {Link} from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="page__container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link style={{ color: "black" }}to="/">Back To Homepage</Link>
      
    </div>
  )
}

export default PageNotFound