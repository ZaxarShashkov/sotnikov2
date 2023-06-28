import React from 'react';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Button from 'react-bootstrap/Button';


const CustomToggle = ({ children, eventKey, id, setComment }) => {
    const decoratedOnClick = useAccordionButton(eventKey, (e) => {
        const value = e.currentTarget.dataset.id;
        setComment(value)
    }
    );

    return (
        <Button
            type="button"
            variant='outline-secondary'
            onClick={decoratedOnClick}
            data-id={id}
        >
            {children}
        </Button>
    );
}

export default CustomToggle;