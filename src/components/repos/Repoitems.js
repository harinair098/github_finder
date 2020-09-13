import React from 'react'
import PropTypes from 'prop-types'
const Repoitems = ({repo}) => {
    return (
        <div classname='card'>
            <h3>
                <a href={repo.html_url}>{repo.name}</a>
            </h3>
        </div>
    )
}
Repoitems.prototype={
    repo:PropTypes.array.isRequired,
}
export default Repoitems