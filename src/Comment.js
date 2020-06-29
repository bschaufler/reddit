import React from 'react';
import moment from 'moment';
import DeleteIcon from './delete - material.svg';
import { formatScore } from './utilities'

export default function Comment(props) {
    const formattedTime = moment.unix(props.created_utc).fromNow();
    const formattedScore = formatScore(9800);

    return ( <
        div style = {
            { 'margin-left': props.depth * 2.2 + '%' } }
        className = "flex-column" >
        <
        div className = "flex-row" >
        <
        div className = "post-comment-author" > { props.author } <
        /div> <
        div className = "post-comment-score-time" > { formattedScore } - { formattedTime } <
        /div> <
        div onClick = {
            () => { props.deleteComment(props.id) } }
        className = "post-comment-delete-icon" >
        <
        img src = { DeleteIcon }
        alt = "delete icon" / >
        <
        /div> <
        /div> <
        div className = "post-comment-body" > { props.body } <
        /div> {
            props.comments.map((comment, index) => ( <
                Comment deleteComment = { props.deleteComment }
                key = { index } {...comment }
                />
            ))
        } <
        /div>

    )
}