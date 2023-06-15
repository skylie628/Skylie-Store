import React, {useEffect, useState} from 'react'
import styles from './CommentModal.module.css'
import Logo from '../../../Components/Logo/Logo'
import CloseIcon from '../../../assets/images/close-icon-black.png'
import moment from 'moment'
import actionTypes from '../../../store/actions/actionTypes'
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, updateComment, deleteComment } from '../../../store/actions/comment'
export default function CommentModal({enableComment,score,userInfo,comments,productInfo,writeComment,setWriteComment}) {
    const [myRating,setMyRating] = useState(5);
    const [myContent,setMyContent] = useState('');
    const [isEdited,setIsEdited] = useState(false);
    const dispatch = useDispatch();
    const [commented,setCommented] = useState(null);
    const commentAction = useSelector(state => state.comment).action
    useEffect(()=>{
        if(!enableComment&& userInfo ){
            console.log('enable Comment',enableComment);
            comments.forEach(comment => {
                if(comment.account_id == userInfo.id){
                    setCommented(comment);
                    setMyContent(comment.content);
                    setMyRating(comment.rating)
                }
            })
        }
    },[enableComment,comments])

const handleRate = async () =>{
    dispatch(addComment(
        {
            product_id: productInfo.id ,
            content: myContent,
            rating: myRating,
            account_id: userInfo.id,
            account: {
                firstname: userInfo.firstname,
                lastname: userInfo.lastname
            }
        }
    ))
}
const handleEdit =()=>{
setIsEdited(true);
}
const handleDelete = async()=>{
    await dispatch(deleteComment(commented.id));
    setCommented(null);
    setMyContent('what is on your mind?');
    setMyRating(5);
}
const handleSaveEdit =async()=>{
    await myContent&&dispatch(updateComment({
        id:commented.id,
        content: myContent,
        rating: myRating
    }))
    myContent&&setIsEdited(false)
}
const handleCancelEdit = ()=>{
    setIsEdited(false);
    setMyContent(commented.content);
    setMyRating(commented.rating);
}
  return (
    <div className={styles.commentModal} style ={{height: writeComment? '100vh' : '0px',transition:'0.2s ease-in-out'}}>
    <div className = {styles.header}>
        <div className ={styles.productCard}>
            <img src = {productInfo?.options[0]?.straight_img_thumbnail} style={{width:'100px'}}></img>
            <div className={styles.productInfo}>
                <div>{productInfo.name} </div>
                <div>{productInfo.price} Vnd</div>
            </div>
        </div>
        <div  className = {styles.closeBtn} onClick = {()=>{setWriteComment(prev => !prev)}}>
    <Logo src = {CloseIcon} style ={{width:'20px'}}></Logo>
    </div>
    </div>
    {
    userInfo&&<LoadingSpinner overlay ={{backgroundColor: 'white'}} isLoading={(commentAction == actionTypes.ADD)||(commentAction == actionTypes.DELETE)}>
    {
    enableComment != 0 && <div className={styles.ratingForm}>
    <div className = {styles.rating}>
        {
                [1,2,3,4,5].map(x =>   <img className ={styles.star} src={myRating < x ? "/rating-start-gray-large.png" : "/rating-start-black-large.png"} onClick ={()=>setMyRating(x)}></img>)
                }
    </div>
        
        <textarea value ={myContent} onChange={(event)=>setMyContent(event.target.value)}>What is in your mind?</textarea>
        <div className={styles.rateBtn} onClick ={handleRate}>Rate me</div>
    </div> }</LoadingSpinner>
}
    {
        commented && 
        <LoadingSpinner overlay ={{backgroundColor: 'white'}} isLoading={(commentAction == actionTypes.UPDATE)}>
        <div className={styles.ratingForm}>
    <div className = {styles.rating}>
        {
                [1,2,3,4,5].map(x =>   <img className ={styles.star} src={myRating < x ? "/rating-start-gray-large.png" : "/rating-start-black-large.png"} onClick ={()=>isEdited&&setMyRating(x)}></img>)
                }
    </div>
        {!isEdited&&<div style ={{fontSize:'30px',margin:'50px auto',textAlign:'center',color:'rgba(0,0,0,0.5)',fontFamily:'sans-serif',width:'70%'}}><i>{`" ${commented.content} "`}</i></div>}
        {isEdited&&<textarea value ={myContent} onChange={(event)=>setMyContent(event.target.value)}></textarea>}
        {!isEdited&&<div style ={{display:'flex',justifyContent:'space-between'}}>
        <div className={styles.controlBtn} onClick ={handleEdit}>Edit</div>
        <div className={styles.controlBtn} onClick ={handleDelete}>Remove</div>
        </div>}
        {isEdited&&<div style ={{display:'flex',justifyContent:'space-between'}}>
        <div className={styles.controlBtn} onClick ={handleSaveEdit}>Save</div>
        <div className={styles.controlBtn} onClick ={handleCancelEdit}>Cancle</div>
        </div>}
    </div>
    </LoadingSpinner>
    }
    <div className={styles.AllReviewSection}>
        <div className={styles.Counting}>
            <div className ={styles.numRating}>{comments.length} Review</div>
            <div className ={styles.scoreRating}>{score}/5</div>
        </div>


    {comments.map(comment =>
    <div style ={{   margin: '20px 0px', padding:'5px'}}>
        <div className ={styles.userReviewInfo}>
    <div className = {styles.userInfo}>
        <div className={styles.userName}>{`${comment.account.firstname} ${comment.account.lastname}`}</div>
       { //<div className={styles.product}>Option1, Nano Glass Case</div>
       }
        <div className={styles.postedTime}>Posted on {moment(comment.createdAt).format('YYYY-MM-DD')}</div>
        <div className={styles.name}></div>
    </div>
    <div className = {styles.userRating}>
    <div className = {styles.rating}>
        {
                [1,2,3,4,5].map(x =>   <img className ={styles.userStar} src={ comment.rating< x ? "/rating-start-gray-large.png" : "/rating-start-black-large.png"}></img>)
                }
            </div>
    </div>

    </div>
    <div className = {styles.userContent}>
    {comment.content}
    </div>
  </div>
        )}
    

    



    
    </div>
    </div>
  )
}
