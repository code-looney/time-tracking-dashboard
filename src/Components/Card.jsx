import React from 'react'
import Container from './Container'

const Card = (props) => {
    const {className, url, children} = props;

  return (
    <Container url={url} className={className}>{children}</Container>
  )
}

export default Card