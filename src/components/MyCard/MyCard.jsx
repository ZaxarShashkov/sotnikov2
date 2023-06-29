import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import CustomToggle from '../../components/CustomToggle/CustomToggle';
import Modal from '../../components/Modal/Modal';
import Form from 'react-bootstrap/Form';
import Icon from '../../components/Icon/Icon';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPosts, fetchUsers, fetchComments } from '../../store/reducers/ActionCreators';

const MyCard = ({ postId, postTitle, postBody, postComments, contentEditable, setContentEditable, setPostsLocal, postsLocal }) => {

    const [comment, setComment] = useState(0)
    const { comments, isLoadingComments } = useAppSelector((state) => state.commentsReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchComments(comment));
    }, [comment])

    const editable = () => {
        setContentEditable(contentEditable => !contentEditable)
    }

    const onRemove = (e) => {
        setPostsLocal(postsLocal.filter((post) => post.id !== +e.currentTarget.dataset.id))
    }
    return (
        <Card key={postId} className='mt-3' style={{ background: 'grey' }}>
            <Card.Body>
                <Card.Title><span contentEditable={contentEditable}>{postId}. {postTitle}</span></Card.Title>
                <Card.Text><span contentEditable={contentEditable}>Text: {postBody}</span></Card.Text>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <CustomToggle eventKey={postId} id={postId} setComment={setComment}>Comments</CustomToggle>
                    <Button variant="secondary" onClick={editable}>Edit</Button>
                    <Modal id={postId} onRemove={onRemove}></Modal>
                    <Icon />
                    <Form.Check aria-label="option 1" className='mt-2' />
                </div>
            </Card.Body>
            {postComments.map((comment) => (
                <Accordion.Collapse eventKey={postId} key={comment.id}>
                    <Card.Body>Name: {comment.name}<br />Email: {comment.email}<br />Text: {comment.body}</Card.Body>
                </Accordion.Collapse>
            ))}
        </Card>
    )
}

export default MyCard