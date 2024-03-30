import React from 'react'

const Sub = (props) => {
    const {className, children} = props;

  return (
    <sub className={className}>{children}</sub>
  )
}

export default Sub