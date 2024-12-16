import React from 'react'
import { Link } from 'react-router'

const Start = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-10">
      <Link to={'/avar'}>
        <button>Var A</button>{' '}
      </Link>
      <Link to={'/bvar'}>
        <button>Var Б</button>{' '}
      </Link>
      <Link to={'/cvar'}>
        <button>Var С</button>{' '}
      </Link>
    </div>
  )
}

export default Start
