import React from "react"

const Header = () => (
    <footer style={{
        background: `black`,
        color: 'white'
      }}
      className="p-3"
      >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        height: '100%'
      }}
    className="flex flex-col md:flex-row justify-between"
    >
        <div>
            &copy; {new Date().getFullYear()} Lauren Labs
        </div>
        <div>
          Icons Here
        </div>
      </div>
    </footer>
)

export default Header


