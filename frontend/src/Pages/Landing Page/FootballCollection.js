import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './footballcollection.module.css';
import { useEffect, useState,useRef,useTransition } from "react";
import { useNavigate } from "react-router-dom";
import footballCollection1 from  '../../assets/images/football-collection-1.webp'
import footballCollection2 from  '../../assets/images/football-collection-2.webp'
import footballCollection3 from  '../../assets/images/football-collection-3.webp'
import footballCollection4 from  '../../assets/images/football-collection-4.webp'
import playingVideo from '../../assets/images/play-video-button.png'
import shoppingIcon from  '../../assets/images/shopping-icon.png'
import playIcon from  '../../assets/images/play-icon.png'
import pauseIcon from  '../../assets/images/pause-icon.png'
import VideoModal from "../../Components/Video Modal/VideoModal";
export default function FootballCollection({windowDimensions,setWindowDimensions}) {
  const [cur, setCur] = useState(1);
  const [isPlay,setIsPlay] = useState(true);
  const [isPending, startTransition] = useTransition();
  const [isPlayVideo,setIsPlayVideo] = useState(false);
  const navigate = useNavigate();
  let firstTurn = false;
  let transitionTime = 800;
  //const [speed,setSpeed] = useState(2000)
  let speed = 5000;
  const [disableTransition,setDisableTransition] = useState(false);
  //const { height, width } = useWindowDimensions();

  const showVideoModal = () =>{
    setIsPlayVideo(!isPlayVideo);
  }

  let timer = useRef(null);
  const stop = () =>{
    clearInterval(timer.current);
    timer.current= null;
  }
  const handlePauseBtn = ()=>{
    setIsPlay(prev=>!prev)
  }
  useEffect(() => {
    if(isPlay){
      updateCur();
    }
    else {
      stop();
    }
  },[isPlay])
  const handleOnclick = () =>{
    navigate('./shopping')
  }
  useEffect(() => {
    if(cur === 5){
      setTimeout(() => {
        startTransition(()=>{	setDisableTransition(prev =>true);
      	setCur(1);})
      }, transitionTime)
    }
    if(cur === 1){
      setTimeout(() => {
        startTransition(()=>
        setDisableTransition(false))
      }, transitionTime)
    }
   },[cur]);

  const updateCur = () =>{
    console.log('mount')
    if(timer.current || !isPlay){}
    else {
      timer.current = setInterval(()=>{
      if(firstTurn){
        firstTurn = false
      }
      else{
      startTransition(()=>setCur(preCur =>preCur +1 ))
      ;}
    },speed)
  }
  }
  const setCurClick = (index) =>{
    setCur(index);
    //clearInterval(timer.current);
    //timer.current= null;
    stop();
    firstTurn = true;
    updateCur();
  }
  useEffect(() => {
    updateCur();
    return ()=>{
      console.log("unmount")
      clearInterval(timer.current);
      timer.current = null;
    }
  },[]);

  return (
    <div style={{display: 'block'}}>
    {isPlayVideo && <VideoModal closeModal = {setIsPlayVideo}/>}
    <div className = {styles.footballCollectionWrapper}>
    <div className= {`${styles.footballCollectionContentWrapper} ${!disableTransition && styles.transition}`}  style = {{right : `${0.85*windowDimensions.width + 30 + (cur-1)*(0.9*windowDimensions.width + 20)}px`}}>
        <div className={styles.footballCollectionImageWrapper } onMouseOver = {()=>setCurClick(1)}>
        <img src = {footballCollection4} className = {`${styles.footballCollectionImg} ${styles.outfocus} ${styles.transition}`}  ></img>
        </div>
        <div className={styles.footballCollectionImageWrapper }>
        <img src = {footballCollection1} className = {`${styles.footballCollectionImg} ${(cur == 1 )? '': styles.outfocus } ${!disableTransition && styles.transition}`} ></img>
        
        <div onClick ={handleOnclick} className= {`${styles.shoppingButtonWrapper}`} style = {{ transition : `all 0.8s ease-in-out ${(cur == 1 )? '0s':'0.2s'}`, bottom : (cur == 1 || cur == 5 )? '50px': '-50px' ,opacity : (cur == 1 || cur == 5 )? 1: 0}}>
        <div>
        <div className= {`${styles.shoppingButton}`} style = {{backgroundColor: '#ffedc7'}}  >
        <span>Neymar Collection</span>
        <img src = {shoppingIcon}></img>
        </div>
        </div>
        </div>

        </div>
        <div className={styles.footballCollectionImageWrapper }>
        <img src = {footballCollection2} className = {`${styles.footballCollectionImg} ${(cur == 2)? '': styles.outfocus } ${styles.transition}`} ></img>
        
        <div onClick ={handleOnclick} className= {`${styles.shoppingButtonWrapper}`} style = {{ transition : `all 0.8s ease-in-out ${(cur == 2 )? '0s':'0.2s'}`, bottom : (cur == 2)? '50px': '-50px' ,opacity : (cur == 2)? 1: 0}}>
        <div>
        <div  className= {`${styles.shoppingButton}`} style = {{backgroundColor: '#fff3f0'}} >
        <span>Ronaldo Collection</span>
        <img src = {shoppingIcon}></img>
        </div>
        </div>
        </div>

        </div>
        <div className={styles.footballCollectionImageWrapper }>
        <img src = {footballCollection3} className = {`${styles.footballCollectionImg} ${(cur == 3)? '': styles.outfocus } ${styles.transition}`} ></img>
        
        <div onClick ={handleOnclick} className= {`${styles.shoppingButtonWrapper}`} style = {{ transition : `all 0.8s ease-in-out ${(cur == 3 )? '0s':'0.2s'}`, bottom : (cur == 3)? '50px': '-50px' ,opacity : (cur == 3)? 1: 0}}>
        <div>
        <div className= {`${styles.shoppingButton}`} style = {{backgroundColor: '#fce8f2'}} >
        <span>Messi Collection</span>
        <img src = {shoppingIcon}></img>
        </div>
        </div>
        </div>

        </div>
        <div className={styles.footballCollectionImageWrapper }>
        <img src = {footballCollection4} className = {`${styles.footballCollectionImg} ${(cur == 4)? '': styles.outfocus } ${styles.transition}`} ></img>
        
        <div onClick ={handleOnclick} className= {`${styles.shoppingButtonWrapper}`} style = {{ transition : `all 0.8s ease-in-out ${(cur == 4 )? '0s':'0.2s'}`, bottom : (cur == 4)? '50px': '-50px' ,opacity : (cur == 4)? 1: 0}}>
        <div>
        <div className= {`${styles.shoppingButton}`} style = {{backgroundColor: '#eff5df'}}>
        <span>Mbappe Collection</span>
        <img src = {shoppingIcon}></img>
        </div>
        </div>
        </div>

        </div>
        <div className={styles.footballCollectionImageWrapper }>
        <img src = {footballCollection1} className = {`${styles.footballCollectionImg} ${(cur == 5)? '': styles.outfocus } ${styles.transition}`} ></img>
        
        <div className= {`${styles.shoppingButtonWrapper}`} style = {{ transition : `bottom 0.8s ease-in-out ${cur == 1? '0s':'0.2s'}`, bottom : cur == 1? '50px': '-50px' }}>
        <div>
        <div className= {`${styles.shoppingButton}`} >
        <span>Neymar Collection</span>
        <img src = {shoppingIcon}></img>
        </div>
        </div>
        </div>
        </div>
        <div className={styles.footballCollectionImageWrapper }>
        <img src = {footballCollection2} className = {`${styles.footballCollectionImg} ${(cur == 6)? '': styles.outfocus } ${styles.transition}`} ></img>
         </div>
       </div>
    </div>
    <div className= {styles.controlGroup}>
    <div className= {`${styles.buttonswrapper} ${styles.centerXY}`} >
        <div className= {styles.buttons} >
          <button id={styles.first} className= {styles.button} style = {{backgroundColor : (cur == 1)? '#f2a127 ' : '#d4d4d4',opacity: (cur == 1)? 1: 0.5 }} onClick = {()=>setCurClick(1)}></button>
          <button id='2' className= {`${styles.button} ${styles.transition}`} style = {{backgroundColor : (cur == 2)? '#ba143f ' : '#d4d4d4',opacity: (cur == 2)? 1: 0.5  }} onClick = {()=>setCurClick(2)}></button>
          <button id='3' className= {`${styles.button} ${styles.transition}`} style = {{backgroundColor : (cur == 3)? '#6c009e ' : '#d4d4d4',opacity: (cur == 3)? 1: 0.5 }} onClick = {()=>setCurClick(3)}></button>
          <button id='4' className= {`${styles.button} ${styles.transition}`} style = {{backgroundColor : (cur == 4)? '#314f40' : '#d4d4d4',opacity: (cur == 4)? 1: 0.5 }} onClick = {()=>setCurClick(4)}></button>
        </div>
       </div>
       <div className= {`${styles.buttonswrapper} ${styles.pause}` } >
          <div style={{display: 'flex'}}>
          <img src = {playingVideo} className = {styles.watchVideo} onClick = {()=>showVideoModal()}></img>
          <img  src = {isPlay? pauseIcon : playIcon} onClick = {()=>handlePauseBtn()}></img>
          </div>
       </div>
      </div>
    </div>
  )
}
