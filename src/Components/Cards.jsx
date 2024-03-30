import React, { useEffect, useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import Container from './Container'
import Card from './Card'
import Title from './Title'
import Sub from './Sub'

const Cards = () => {
    const [list, setList] = useState(null);
    const [patern, setPatern] = useState({
        endpoint: {
            work: 'work',
            play: 'play'
        }
    });

    useEffect(() => {
        fetch(`./data.json`)
        .then(res => res.json())
        .then(data => {
            // console.log(data[0].patern) 
            setList(data)
        })
    }, [])
    // public/images/icon-work.svg

    
  return (
    <Container className={`h-screen w-full outline`}>
        <ul className={`grid place-content-center gap-10`}>
            {list && list.map((item, index) => <li key={index}>
            <Card className={`outline bg-[url('/public/images/icon-${(index === 0) ? patern.endpoint.work : (item.title === 'Play') ? patern.endpoint.play : ''}.svg')] bg-no-repeat bg-right-top bg-[length:40px_40px]`}>
                <Card className={`text-white outline translate-y-5`}> {/* data op bases van index en niet in the return statement via the item check */}
                    <Container>
                        <Title>{item.title}</Title>
                        <Sub className={`uppercase`}>{item.timeframes.weekly.current}hrs</Sub>
                    </Container>
                        <BsThreeDots />
                        <Sub>Last week - {item.timeframes.weekly.previous}hrs</Sub>
                    <Container>
                    </Container>
                </Card>
            </Card>
            </li>)}
        </ul>
    </Container>
  )
}

export default Cards