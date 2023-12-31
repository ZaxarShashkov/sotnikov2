import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const MySpinner = () => {
    return (
        <>
            <Spinner animation="border" role="status" style={{ position: 'fixed', top: '50%', left: '50%' }}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </>
    )
}

export default MySpinner