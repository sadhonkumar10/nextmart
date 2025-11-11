import React from 'react'

import { Outlet } from 'react-router'
import Nav from './Componants/Nav'

export default function Root() {
  return (
    <div>
      <Nav/>

      <Outlet></Outlet>
    </div>
  )
}
