import React from 'react'
import Container from './Container'

const Card = (props) => {
    const {className, url, children, style} = props;

  return (
    <Container style={style} url={url} className={className}>{children}</Container>
  )
}

export default Card