import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Icon = () => {

    const [elected, setElected] = useState(false);

    const onElected = () => {
        setElected(elected => !elected)
    }

    return (
        <>
            <Button variant="secondary" onClick={() => onElected()} >
                {elected ? <FontAwesomeIcon icon={faStar} style={{ color: "#ffec70" }} />
                    : <FontAwesomeIcon icon={faStar} style={{ color: "#ffffff" }} />}

            </Button>
        </>
    )
}

export default Icon;