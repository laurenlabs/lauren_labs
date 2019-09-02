import React from "react"
import PropTypes from "prop-types"

const SecondaryHeading = ({heading}) => (
    <div className="">
      <h2 className="my-6">{heading}</h2>
    </div>
)

SecondaryHeading.propTypes = {
    heading: PropTypes.string.isRequired,
}

export default SecondaryHeading;


