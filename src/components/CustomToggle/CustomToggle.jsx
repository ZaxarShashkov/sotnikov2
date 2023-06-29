import React, { useState } from 'react';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Button from 'react-bootstrap/Button';


const CustomToggle = ({ children, eventKey, id, setComment }) => {

    const [variant, setVariant] = useState('secondary');

    const decoratedOnClick = useAccordionButton(eventKey, (e) => {
        setVariant(variant === 'secondary' ? 'secondary-outlined' : 'secondary')
        const value = e.currentTarget.dataset.id;
        setComment(value)
    }
    );

    return (
        <Button
            type="button"
            variant={variant}
            onClick={decoratedOnClick}
            data-id={id}
        >
            {children}
        </Button>
    );
}

export default CustomToggle;