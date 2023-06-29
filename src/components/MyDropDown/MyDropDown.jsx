import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const MyDropDown = ({ sortByIdDown }) => {


    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Post sorting
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={sortByIdDown} href="#">By name up</Dropdown.Item>
                <Dropdown.Item onClick={() => console.log('asdsa')} href="#">By name down</Dropdown.Item>
                <Dropdown.Item href="#">Descending</Dropdown.Item>
                <Dropdown.Item href="#">Ascending else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default MyDropDown