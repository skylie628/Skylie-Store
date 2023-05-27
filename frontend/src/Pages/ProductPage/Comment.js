import React, { useEffect } from 'react'
import styles from './Comment.module.css'
import CommentModal from './CommentModal'
import { useDispatch, useSelector } from 'react-redux'
import { fetchComments } from '../../store/actions/comment'
import BlackStar from '../../assets/images/rating-star-black.png'
import GrayStar from '../../assets/images/rating-star-gray.png'
import moment from 'moment'
import { useState } from 'react'
import ShowHideLayout from '../../Components/Show Hide Layout/ShowHideLayout'
export default function Comment({productInfo,userInfo}) {
    const [score,setScore] = useState(5);
    const {comments,enableComment} = useSelector(state => state.comment)
    const [writeComment,setWriteComment] =useState(false);
    const dispatch = useDispatch();
    
    const getComments = async (payload) => {
        dispatch(fetchComments(payload));
    }
    const calculateRating = ()=>{
        return Math.round(comments.reduce((x,y)=> (x+y.rating),0)/comments.length*10)/10;
    }

    useEffect(()=>{
        comments.length>0 && setScore(calculateRating());
    },[comments])
    useEffect(()=>{
    if(userInfo.id&&productInfo.id)
    {getComments({account_id:userInfo.id,product_id: productInfo.id});}
    },[userInfo,productInfo])
    document.body.style.overflowY = writeComment? "hidden" :"visible";
  return (
    <ShowHideLayout header='Đánh giá và bình luận' >
    {writeComment&&<CommentModal enableComment={enableComment} userInfo ={userInfo} score ={score} comments = {comments} productInfo ={productInfo} writeComment={writeComment}  setWriteComment ={setWriteComment}></CommentModal>}
    <div className={styles.header}>
        <div style={{flex:'1 0 0'}}><a style={{textDecoration:'none',cursor:'pointer'}}  onClick ={()=>setWriteComment(prev=>!prev)}>Viết bình luận</a></div>
        <div style={{flex:'0 0 0'}}>{score}/5</div>
    </div>
    <div className ={styles.commentContainer}>
      {  comments.slice(0,3).map(
        comment => 
        <div className={styles.commentItem}>
        <div className = {styles.rating}>
            {
                    [1,2,3,4,5].map(x =>   <img className ={styles.star} src={comment.rating < x ? GrayStar : BlackStar}></img>)
                    }
                </div>
            <div className = {styles.comment}>{comment.content}</div>
            <div className={styles.ratingInfo}>
            rating by {`${comment.account.firstname} ${comment.account.lastname}`} on {moment(comment.createdAt).format('YYYY-MM-DD')}
            </div>
        </div>
      )}
   
    </div>
    </ShowHideLayout>
  )
}
