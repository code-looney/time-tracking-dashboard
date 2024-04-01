import React from 'react'

const Portait = (props) => {
    const {className, src, alt} = props;
    
  return (
    <img src={src} className={className} alt={alt} />
  )
}

export default Portait