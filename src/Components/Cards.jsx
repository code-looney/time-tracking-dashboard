import React, { useEffect, useState } from 'react'
import { BsThreeDots } from "react-icons/bs"
import Container from './Container'
import Card from './Card'
import Title from './Title'
import Sub from './Sub'
import Portait from '../Portait'
import { NavLink } from 'react-router-dom'

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
        } else if (index === 4) {
            return 'social'
        } else if (index === 5) {
            return 'self-care'
        }
    }

  return (
    <Container className={`flex flex-col h-screen justify-center items-center relative`}>
        <Container className={`flex flex-col items-center justify-center`}>
            <ul className={`flex flex-col gap-11`}>
            <li>
                <Card className={` bg-blue w-[250px] rounded-xl relative`}>
                        <Container className={`flex gap-3 py-6 px-5 items-center text-white`}>
                            <Portait src={`public/images/image-jeremy.png`} className={`w-[50px] border-2 rounded-full border-white`} />
                             <Container className={`leading-4`}>
                                 <Title>Report for</Title>
                                 <Sub>Jeremy Robson</Sub>
                             </Container>
                        </Container>
                        <Card className={`bg-card-primary flex justify-center rounded-b-xl `}>
                            <Container className={`flex gap-12 p-3 text-[12px]`}>
                                <NavLink className={`text-pale-blue hover:text-white focus:text-white`} href="#">Daily</NavLink>
                                <NavLink className={`text-pale-blue hover:text-white focus:text-white`} href="#">Weekly</NavLink>
                                <NavLink className={`text-pale-blue hover:text-white focus:text-white`} href="#">Monthly</NavLink>
                            </Container>
                        </Card>
                    </Card>
                </li>
                {list && list.map((item, index) => <li key={index}>
                <Card className={`w-[250px] rounded-xl bg-${handleCardBackgroundColor(index)} relative`}>
                    <Container className={`absolute right-0`}>
                        <img
                        className={`bg-no-repeat bg-right-top w-[40px] flex`}
                        src={`./images/icon-${handleCardIcon(index)}.svg`}
                        alt="" />
                        </Container>
                    <Card className={`text-white bg-card-primary flex justify-center rounded-xl translate-y-7`}>
                        <Container className={`w-[220px] h-[100px] flex justify-between items-center`}>
                            <Container>
                                <Title className={`text-[18px] font-medium`}>{item.title}</Title>
                                <Sub className={`uppercase text-[20px] font-thin`}>{}hrs</Sub>
                            </Container>
                            <Container className={`flex flex-col gap-3 items-end`}>
                                <BsThreeDots className={`text-[21px]`} />
                                <Sub>Last week - {}hrs</Sub>
                            </Container>
                        </Container>
                    </Card>
                </Card>
                </li>)}
            </ul>
                </Container>
        </Container>
  )
}

export default Cards