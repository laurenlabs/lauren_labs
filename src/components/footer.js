import React from "react"

const Header = () => (
    <footer style={{
        background: `black`,
        color: 'white'
      }}
        className="p-2"
      >
        <div
        style={{
            margin: `0 auto`,
            maxWidth: 960,
            height: '100%'
        }}
        className="flex flex-row justify-between"
        >
            <div>
            &copy; {new Date().getFullYear()} Lauren Labs
            </div>
            <div>
              <a href="https://www.linkedin.com/in/lauren-lawson-102b4181/" target="_blank">LinkedIn</a>
            </div>
        </div>
    </footer>
)

export default Header


