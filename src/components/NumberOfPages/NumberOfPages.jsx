import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';


const NumberOfPages = ({ pages, limit, handleClickLimit }) => {


    const renderButtons = () => {
        const buttons = Array.from({ length: pages }, (x, i) => (
            <Button variant='outline-secondary' key={i} data-id={(i) * limit} onClick={(e) => handleClickLimit(e)}>{i + 1}</Button>
        ));
        return <>{buttons}</>;
    };


    const buttons = renderButtons()

    return (
        <>
            <h3 style={{ textAlign: 'center', marginTop: '1rem' }}>Pages</h3>
            <ButtonToolbar style={{ justifyContent: 'center' }} className="mt-3" aria-label="Toolbar with Button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                    {buttons}
                </ButtonGroup>
            </ButtonToolbar>
        </>
    )
}

export default NumberOfPages