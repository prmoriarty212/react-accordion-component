import React, {useState} from 'react'
import { Data } from './Data'
import styled from 'styled-components'
import {IconContext} from 'react-icons'
import {FiPlus, FiMinus} from 'react-icons/fi'

const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
`;

const Container = styled.div`
    position: absolute;
    top: 30%;
`;

const Wrap = styled.div`
    background: #000;
    color: #e4eff5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: center;
    cursor: pointer;

    h1 {
        padding: 2rem;
        font-size: 2rem;
    }

    span {
        margin-right: 1.5rem;
    }
`;

const DropDown = styled.div`
    background: #000;
    color: #fff;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #00ffb9;

    p {
        font-size: 2rem;
    }
`;

const Accordion = () => {

    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if(clicked === index) {
            return setClicked(null)
        }

        setClicked(index)
    }


    return (

        <IconContext.Provider value = {{color: '#fff', size: '25px'}}>
            <AccordionSection>
                <Container>
                    {Data.map((item, index) => {
                        return (
                            <>
                            <Wrap onClick={() => toggle(index)} key={index}>
                                <h1>{item.question}</h1>
                                <span>{clicked === index ? <FiMinus/> : <FiPlus/>}</span>
                                </Wrap>
                                {clicked === index ? (
                                <DropDown>
                                    <p>{item.answer}</p>
                                </DropDown>) : null}
                            </>
                        )
                    })}
                </Container>
            </AccordionSection>
        </IconContext.Provider>
        
    )

};

export default Accordion