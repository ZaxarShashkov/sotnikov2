import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const MyDropDown = ({ sortByIdDown, sortByIdUp, postsLocal }) => {


    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Post sorting
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => sortByIdDown(postsLocal)} href="#">By id down</Dropdown.Item>
                <Dropdown.Item onClick={() => sortByIdUp(postsLocal)} href="#">By id up</Dropdown.Item>
                <Dropdown.Item href="#">Descending</Dropdown.Item>
                <Dropdown.Item href="#">Ascending else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default MyDropDown