import React from 'react'

const Imagevar = ({ img }) => {
  return (
    <div className="my-4">
      <img
        src={img}
        alt=""
        className="w-full"
      />
    </div>
  )
}

export default Imagevar
