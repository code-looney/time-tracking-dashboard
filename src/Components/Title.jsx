import React from 'react'

const Title = (props) => {
    const {className, children} = props;

  return (
    <h1 className={className}>{children}</h1>
  )
}

export default Title