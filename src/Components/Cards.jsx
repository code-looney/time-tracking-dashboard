import React, { useEffect, useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import Container from './Container'
import Card from './Card'
import Title from './Title'
import Sub from './Sub'

const Cards = () => {
    const [list, setList] = useState(null);

    useEffect(() => {
        fetch(`./data.json`)
        .then(res => res.json())
        .then(data => {
            console.log(data[0].timeframes.weekly)
            setList(data)
        })
    }, [])

  return (
    <Container className={`h-screen w-full outline`}>
        <ul className={`grid place-content-center gap-6`}>
            {list && list.map(item => <li>
                <Card className={`text-white outline`}>
                    <Container>
                        <Title>{item.title}</Title>
                        <Sub className={`uppercase`}>{item.timeframes.weekly.current}hrs</Sub>
                    </Container>
                        <BsThreeDots />
                        <Sub>Last week - {item.timeframes.weekly.previous}hrs</Sub>
                    <Container>

                    </Container>
                </Card>
            </li>)}
        </ul>
    </Container>
  )
}

export default Cards