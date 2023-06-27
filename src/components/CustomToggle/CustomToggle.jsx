import React from 'react';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Button from 'react-bootstrap/Button';


const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log()
    );

    return (
        <Button
            type="button"
            variant='outline-secondary'
            onClick={decoratedOnClick}
        >
            {children}
        </Button>
    );
}

export default CustomToggle;