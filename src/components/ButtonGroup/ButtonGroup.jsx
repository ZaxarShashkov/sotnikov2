import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

const ButtonGroup = ({ handleClick }) => {
    return (
        <>
            <InputGroup className='mt-3' style={{ justifyContent: 'center' }}>

                <Button variant='outline-secondary' value={10} onClick={(e) => handleClick(e)}>
                    10
                </Button>
                <Button variant='outline-secondary' value={20} onClick={(e) => handleClick(e)}>
                    20
                </Button>
                <Button variant='outline-secondary' value={50} onClick={(e) => handleClick(e)}>
                    50
                </Button>
                <Button variant='outline-secondary' value={100} onClick={(e) => handleClick(e)}>
                    100
                </Button>
                <Button variant='outline-secondary' value={100} onClick={(e) => handleClick(e)}>
                    All
                </Button>
            </InputGroup>
        </>
    )
}

export default ButtonGroup