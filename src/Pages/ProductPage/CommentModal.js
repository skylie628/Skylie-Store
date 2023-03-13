import React, {useEffect, useState} from 'react'
import styles from './CommentModal.module.css'
import Logo from '../../Components/Logo/Logo'
import BlackStar from '../../assets/images/rating-start-black-large.png'
import GrayStar from '../../assets/images/rating-start-gray-large.png'
import CloseIcon from '../../assets/images/close-icon-black.png'
import {TextareaAutosize} from '@mui/material'
import { Button } from '@mui/material'
import TextField from '@mui/material'
export default function CommentModal({ProductInfo,writeComment,setWriteComment}) {
    document.body.style.overflowY = writeComment? "hidden" :"visible";
    const [myRating,setMyRating] = useState()
  return (
    <div className={styles.commentModal} style ={{height: writeComment? '100vh' : '0px',transition:'0.2s ease-in-out'}}>
    <div className = {styles.header}>
        <div className ={styles.productCard}>
            <img src = {ProductInfo.img} style={{width:'100px'}}></img>
            <div className={styles.productInfo}>
                <div>{ProductInfo.name} </div>
                <div>{ProductInfo.price} Vnd</div>
                <div>Option 1</div>
            </div>
        </div>
        <div  className = {styles.closeBtn} onClick = {()=>{setWriteComment(prev => !prev)}}>
    <Logo src = {CloseIcon} style ={{width:'20px'}}></Logo>
    </div>
    </div>
    <div className={styles.ratingForm}>
    <div className = {styles.rating}>
        {
                [1,2,3,4,5].map(x =>   <img className ={styles.star} src={myRating < x ? GrayStar : BlackStar} onClick ={()=>setMyRating(x)}></img>)
                }
    </div>
        <textarea>What is in your mind?</textarea>
        <div className={styles.rateBtn}>Rate me</div>
    </div>
    <div className={styles.AllReviewSection}>
        <div className={styles.Counting}>
            <div className ={styles.numRating}>68 Review</div>
            <div className ={styles.scoreRating}>3.5/5</div>
        </div>
    <div className ={styles.userReview}>
    <div className = {styles.userInfo}>
        <div className={styles.userName}>Skylie</div>
        <div className={styles.product}>Option1, Nano Glass Case</div>
        <div className={styles.postedTime}>Posted on 21, January, 2022</div>
        <div className={styles.name}></div>
    </div>
    <div className = {styles.userContent}>
    A string test involves swallowing a string to obtain a sample from the upper part of the small intestine. The sample is then tested to look for intestinal parasites.
    </div>
    <div className = {styles.userRating}>
    <div className = {styles.rating}>
        {
                [1,2,3,4,5].map(x =>   <img className ={styles.userStar} src={3 < x ? GrayStar : BlackStar}></img>)
                }
            </div>
    </div>
    </div>

    <div className ={styles.userReview}>
    <div className = {styles.userInfo}>
        <div className={styles.userName}>Skylie</div>
        <div className={styles.product}>Option1, Nano Glass Case</div>
        <div className={styles.postedTime}>Posted on 21, January, 2022</div>
        <div className={styles.name}></div>
    </div>
    <div className = {styles.userContent}>
    A string test involves swallowing a string to obtain a sample from the upper part of the small intestine. The sample is then tested to look for intestinal parasites.
    </div>
    <div className = {styles.userRating}>
    <div className = {styles.rating}>
        {
                [1,2,3,4,5].map(x =>   <img className ={styles.userStar} src={3 < x ? GrayStar : BlackStar}></img>)
                }
            </div>
    </div>
    </div>


    <div className ={styles.userReview}>
    <div className = {styles.userInfo}>
        <div className={styles.userName}>Skylie</div>
        <div className={styles.product}>Option1, Nano Glass Case</div>
        <div className={styles.postedTime}>Posted on 21, January, 2022</div>
        <div className={styles.name}></div>
    </div>
    <div className = {styles.userContent}>
    A string test involves swallowing a string to obtain a sample from the upper part of the small intestine. The sample is then tested to look for intestinal parasites.
    </div>
    <div className = {styles.userRating}>
    <div className = {styles.rating}>
        {
                [1,2,3,4,5].map(x =>   <img className ={styles.userStar} src={3 < x ? GrayStar : BlackStar}></img>)
                }
            </div>
    </div>
    </div>


    <div className ={styles.userReview}>
    <div className = {styles.userInfo}>
        <div className={styles.userName}>Skylie</div>
        <div className={styles.product}>Option1, Nano Glass Case</div>
        <div className={styles.postedTime}>Posted on 21, January, 2022</div>
    </div>
    <div className = {styles.userContent}>
    A string test involves swallowing a string to obtain a sample from the upper part of the small intestine. The sample is then tested to look for intestinal parasites.
    </div>
    <div className = {styles.userRating}>
    <div className = {styles.rating}>
        {
                [1,2,3,4,5].map(x =>   <img className ={styles.userStar} src={3 < x ? GrayStar : BlackStar}></img>)
                }
            </div>
    </div>
    </div>
    
    </div>
    </div>
  )
}
