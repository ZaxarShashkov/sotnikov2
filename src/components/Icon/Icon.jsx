import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Icon = ({ postId }) => {

    const [elected, setElected] = useState(false);
    const [selected, setSelected] = useState(false)

    const ref = useRef([])

    useEffect(() => {
        setElected(localStorage.getItem(postId))
    }, [])

    useEffect(() => {
        setSelected(selected => !selected)
    }, [elected])

    const onElected = (e) => {
        setElected((elected) => {
            return !elected
        })
        console.log(selected)
        console.log(elected)
        const value = e.currentTarget.dataset.id
        e.currentTarget.dataset.elected = selected
        localStorage.getItem(value) !== null ? localStorage.removeItem(value) : localStorage.setItem(value, selected);
    }

    return (
        <>
            <Button ref={ref} variant="secondary" data-elected={selected} onClick={(e) => { onElected(e) }} data-id={postId}>
                {elected ? <FontAwesomeIcon icon={faStar} style={{ color: "#ffec70" }} />
                    : <FontAwesomeIcon icon={faStar} style={{ color: "#ffffff" }} />}

            </Button >
        </>
    )
}

export default Icon;