import React from 'react'

const Header = ({ vari }) => {
  return (
    <header className="fixed top-0 bg-[#f5f5f5]">
      <div className="mx-3 my-3 flex gap-3 items-center">
        <div>
          <img
            src="/arrow.png"
            alt=""
            className="w-7"
          />
        </div>
        <div>
          <p className="font-semibold">{`Embedded systems Rub2_${vari} (Құрамдас...`}</p>
        </div>
      </div>
    </header>
  )
}

export default Header
