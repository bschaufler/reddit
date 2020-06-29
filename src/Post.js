import React, { useState, useEffect } from 'react';
import CommentsIcon from './mode_comment - material.svg';
import Comment from './Comment';
import { formatScore, createDataTree, findAndDelete} from './utilities'

const Post = () => {
  const [comments, setComments] = useState([]);
  const [commentTree, setCommentTree] = useState([])
  const [data, setData] = useState({});
  const url = 'https://gist.githubusercontent.com/mkg0/6a4dca9067ad7a296204e7c9ecd977b0/raw/0b1ec16580ea1e970a73f5c85563c22631be7ad7/unpopularopinion-dataset.json';


  useEffect(() => {
    fetch(url)
      .then(results => results.json())
      .then(data => {
        setData(data);
        setComments(data.comments)
        setCommentTree(createDataTree(data.comments));
      });
  }, []);

  const title = data.title;
  const caption = data.subreddit_name_prefixed
  const post = data.selftext
  const score = formatScore(data.score);
  const commentCount = comments.length + ' Comments';

  const deleteComment = (id) => {
    const result = findAndDelete(commentTree, id)
    setCommentTree(result);

  }
  return (
    <div className="page">
      <div className="spacer-headline"></div>
      <div className="caption">
        <div>{caption}</div>
      </div>
      <div className="spacer-headline"></div>
      <div className="headline-count">
        <div>{score.toString()}</div>
      </div>
      <div className="headline">
        <div>{title}</div>
      </div>
      <div className="spacer"></div>
      <div className="post-container">
        <div className="post-content">
          <div className="post-content-text">
            {post}
          </div>
          <div className="post-comment-icon-container">
            <img className="post-comment-icon" src={CommentsIcon} alt="comments icon" />
            <div className="post-comment-text">{commentCount}</div>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="spacer-headline"></div>
      <div className="comments-container">
        {commentTree.map((comment, index) => (
          <Comment key={index} {...comment} deleteComment={deleteComment} />
        ))}
      </div>
      <div className="spacer-headline"></div>
    </div>
  );
}

export default Post;