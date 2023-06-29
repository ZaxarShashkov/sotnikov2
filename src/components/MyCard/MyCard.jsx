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
import CustomModal from '../Modal/CustomModal';

const MyCard = ({ postId, postTitle, postBody, postComments, contentEditable, setContentEditable, setPostsLocal, postsLocal, setRemove, removeGroup, id, setId }) => {

    const [checked, setChecked] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [elected, setElected] = useState(false);
    const [selected, setSelected] = useState(false)

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

    const onChecked = (e) => {
        setChecked(checked => !checked)
        setId([...id, e.currentTarget.dataset.id])
    }

    const onVisibleRemove = () => {
        setIsVisible(isVisible => !isVisible)
        setRemove(true)
    }

    const onVisible = () => {
        setIsVisible(isVisible => !isVisible)
    }

    const onElected = (e) => {
        setElected((elected) => {
            return !elected
        })
        const value = e.currentTarget.dataset.id
        e.currentTarget.dataset.elected = selected
        localStorage.getItem(value) !== null ? localStorage.removeItem(value) : localStorage.setItem(value, selected);
        setIsVisible(false)
        setChecked(false)
    }


    // const removeGroup = () => {
    // 	const filter = postsLocal.filter((post) =>
    // 		id.every((id) => post.id !== +id))
    // 	if (remove) {
    // 		setRemove(false)
    // 		return setPostsLocal(filter)
    // 	} else {
    // 		return null
    // 	}
    // }


    return (
        <Card key={postId} className='mt-3' style={elected ? { background: 'grey' } : { background: 'transparent' }}>
            <Card.Body>
                <Card.Title><span contentEditable={contentEditable}>{postId}. {postTitle}</span></Card.Title>
                <Card.Text><span contentEditable={contentEditable}>Text: {postBody}</span></Card.Text>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <CustomToggle eventKey={postId} id={postId} setComment={setComment}>Comments</CustomToggle>
                    <Button variant="secondary" onClick={editable}>Edit</Button>
                    <Modal id={postId} onRemove={onRemove}></Modal>
                    <Icon postId={postId} elected={elected} setElected={setElected} setSelected={setSelected} selected={selected} onElected={onElected} />
                    <Form.Check data-id={postId} data-elected={selected} aria-label="option 1" className='mt-2' onClick={onChecked} />
                    {checked ? <><Button variant="secondary" setRemove={setRemove} data-id={postId} onClick={onVisibleRemove}>Remove</Button>
                        <Button variant="secondary" data-id={postId} onClick={onVisible}>Select</Button>
                    </> : null}
                    {isVisible ? <CustomModal removeGroup={removeGroup} onVisible={onVisible} onElected={onElected}></CustomModal> : null}
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