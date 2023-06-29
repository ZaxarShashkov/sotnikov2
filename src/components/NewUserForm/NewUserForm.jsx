import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import uuid from 'react-uuid';

const NewUserForm = ({ usersLocal, setUsersLocal, postsLocal, setPostsLocal }) => {
    const [show, setShow] = useState(false);
    const [userName, setUserName] = useState('')
    const [post, setPost] = useState({ postTitle: '', postText: '' })



    const handleShow = () => setShow(true);

    const handleClose = () => {
        const { postTitle, postText } = post;
        setShow(false)
        setUsersLocal([...usersLocal, { id: 11, name: userName, email: `${userName}@gmail.com` }])
        setPostsLocal([...postsLocal, { userId: 11, id: 101, title: postTitle, body: postText }])

    };

    const onChangeUserName = (e) => {
        setUserName(e.currentTarget.value)
    }

    const onChangeTitle = (e) => {
        setPost({ ...post, postTitle: e.currentTarget.value })
    }

    const onChangeText = (e) => {
        setPost({ ...post, postText: e.currentTarget.value })
    }

    return (
        <>
            <Button variant="secondary" onClick={handleShow} className='mt-3'>
                Create new post
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Form.Select aria-label="Default select example" onChange={(e) => onChangeUserName(e)}>
                        <option>Select user</option>
                        {usersLocal.map((item) => {
                            return (
                                <option key={item.id} value={item.name} >{item.name}</option>
                            )
                        })}
                    </Form.Select>
                    <Form.Control
                        placeholder="Post Title"
                        aria-label="Post Title"
                        aria-describedby="basic-addon1"
                        defaultValue={post.postTitle}
                        onChange={(e) => onChangeTitle(e)}
                    />
                    <Form.Control
                        placeholder="Post text"
                        aria-label="Post text"
                        aria-describedby="basic-addon1"
                        defaultValue={post.postText}
                        onChange={(e) => onChangeText(e)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default NewUserForm