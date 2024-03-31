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
            play: 'play',
            study: 'study',
            exercise: 'exercise',
            social: 'social',
            selfCare: 'self-care'
        }
    });
    const colors = [ 
        'bg-work', 
        'bg-play', 
        'bg-study', 
        'bg-exercise', 
        'bg-social', 
        'bg-self-care' 
    ]

    useEffect(() => {
        fetch(`./data.json`)
        .then(res => res.json())
        .then(data => {
            setList(data)
        })
    }, [])
    
    function handleCardIcon(index) {
        if (index === 0) {
            return patern.endpoint.work
        } else if (index === 1) {
            return patern.endpoint.play
        } else if (index === 2) {
            return patern.endpoint.study
        } else if (index === 3) {
            return patern.endpoint.exercise
        } else if (index === 4) {
            return patern.endpoint.social
        } else if (index === 5) {
            return patern.endpoint.selfCare
        } 
    }

    function handleCardBackgroundColor(index) {
        if (index === 0) {
            return 'work'
        } else if (index === 1) {
            return 'play'
        } else if (index === 2) {
            return 'study'
        } else if (index === 3) {
            return 'exercise'
        }
    }

  return (
    <Container className={`h-screen flex justify-center items-center`}>
        <ul className={`flex flex-col gap-10`}>
            {list && list.map((item, index) => <li key={index}>
            <Card className={`outline bg-${handleCardBackgroundColor(index)} relative`}>
                <Container className={`absolute outline right-0`}>
                    <img 
                    className={`bg-no-repeat bg-right-top w-[30px] flex`} 
                    src={`./images/icon-${handleCardIcon(index)}.svg`} 
                    alt="" />
                    </Container>
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