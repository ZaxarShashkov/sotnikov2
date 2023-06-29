import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const MyDropDown = ({ sortByIdDown, sortByIdUp, sortByUserNameDown, sortByUserNameUp }) => {


    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Post sorting
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => sortByIdDown()} href="#">By id down</Dropdown.Item>
                <Dropdown.Item onClick={() => sortByIdUp()} href="#">By id up</Dropdown.Item>
                <Dropdown.Item onClick={() => sortByUserNameDown()} href="#">By user name down</Dropdown.Item>
                <Dropdown.Item onClick={() => sortByUserNameUp()} href="#">By user name up</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default MyDropDown