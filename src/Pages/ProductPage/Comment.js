import React from 'react'
import styles from './Comment.module.css'
import CommentModal from './CommentModal'
import BlackStar from '../../assets/images/rating-star-black.png'
import GrayStar from '../../assets/images/rating-star-gray.png'
import { useState } from 'react'
import ShowHideLayout from '../../Components/Show Hide Layout/ShowHideLayout'
export default function Comment({ProductInfo}) {
    const [score,setScore] = useState(4);
    const [writeComment,setWriteComment] =useState(false);
  return (
    <ShowHideLayout header='Đánh giá và bình luận'>
    <CommentModal ProductInfo ={ProductInfo} writeComment={writeComment}  setWriteComment ={setWriteComment}></CommentModal>
    <div className={styles.header}>
        <div style={{flex:'1 0 0'}}><a style={{textDecoration:'none',cursor:'pointer'}}  onClick ={()=>setWriteComment(prev=>!prev)}>Viết bình luận</a></div>
        <div style={{flex:'0 0 0'}}>3.5/5</div>
    </div>
    <div className ={styles.commentContainer}>
    <div className={styles.commentItem}>
    <div className = {styles.rating}>
        {
                [1,2,3,4,5].map(x =>   <img className ={styles.star} src={score < x ? GrayStar : BlackStar}></img>)
                }
            </div>
        <div className = {styles.comment}>a fshvfdsvgdfbgv</div>
        <div className={styles.ratingInfo}>
        rating by Alias on Jan, 3, 2021
        </div>
    </div>

    <div className={styles.commentItem}>
    <div className = {styles.rating}>
        {
                [1,2,3,4,5].map(x =>   <img className ={styles.star} src={score < x ? GrayStar : BlackStar}></img>)
                }
            </div>
        <div className = {styles.comment}>a fshvfdsvgdfbgv</div>
        <div className={styles.ratingInfo}>
        rating by Alias on Jan, 3, 2021
        </div>
    </div>

    <div className={styles.commentItem}>
    <div className = {styles.rating}>
        {
                [1,2,3,4,5].map(x =>   <img className ={styles.star} src={score < x ? GrayStar : BlackStar}></img>)
                }
            </div>
        <div className = {styles.comment}>a fshvfdsvgdwuygfbwtefw4uaFRqefwveefvwefwerffbgv</div>
        <div className={styles.ratingInfo}>
        rating by Alias on Jan, 3, 2021
        </div>
    </div>
    </div>
    </ShowHideLayout>
  )
}
