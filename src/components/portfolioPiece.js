import React from "react"
import PropTypes from "prop-types"

const PortfolioPiece = ({title, description, children}) => (
    <div className="flex flex-col md:flex-row my-2 portfolio-piece">
        <div className="w-full md:w-1/3 flex justify-center">
            {children}
        </div>
        <div className="w-full md:w-2/3 md:px-6">
            <h3 className="mb-2">{title}</h3>
            <p>{description}</p>
        </div>
    </div>
)

PortfolioPiece.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

export default PortfolioPiece;


