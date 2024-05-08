import React from 'react'
import './Container.scss'
import { Header } from '../Header/Header'

export const Container = ({children}) => {
  return (
    <div className='higher-order-container'>
        <Header/>
        {children}

    </div>
  )
}
