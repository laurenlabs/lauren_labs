import React from "react"
import PropTypes from "prop-types"

const PageHeading = ({heading}) => (
    <div className="border-b-2">
      <h1 className="mb-2">{heading}</h1>
    </div>
)

PageHeading.propTypes = {
    heading: PropTypes.string.isRequired,
}

export default PageHeading;


