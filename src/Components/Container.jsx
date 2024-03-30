import React from 'react'

const Container = (props) => {
    const  {className, children} = props;
    
  return (
    <div className={className}>{children}</div>
  )
}

export default Container