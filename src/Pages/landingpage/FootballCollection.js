import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './footballcollection.module.css';
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import { useEffect, useState,useRef } from "react";
import footballCollection1 from  '../../assets/images/football-collection-1.png'
import footballCollection2 from  '../../assets/images/football-collection-2.png'
import footballCollection3 from  '../../assets/images/football-collection-3.png'
import footballCollection4 from  '../../assets/images/football-collection-4.png'
export default function FootballCollection() {
  const [cur, setCur] = useState(1);
  let transitionTime = 500;
  //const [speed,setSpeed] = useState(2000)
  let speed = 3000;
  const [disableTransition,setDisableTransition] = useState(false);
  //const { height, width } = useWindowDimensions();
  const width = 1263;
  let timer = useRef();;
  const stop = () =>{
    clearInterval(timer.current);
  }
  useEffect(() => {
    if(cur === 5){
      setTimeout(() => {
      	setDisableTransition(prev =>true);
      	setCur(1);
      }, transitionTime)
    }
    if(cur === 1){
      setTimeout(() => {
        setDisableTransition(false);
      }, transitionTime)
    }
   },[cur]);
  const updateCur = () =>{
    timer.current = !timer.current && setInterval(()=>{
      setCur(preCur => {
          return preCur +1 ;
      }
      );
    },speed)
  }
  const goback = () =>{
    if(cur == 1){
      setDisableTransition(true);
      setCur(5);
      goback();
    }
    else{
      if(disableTransition){
        setDisableTransition(false)
      }
      setCur((cur)=> cur-1)
    }
  }

  useEffect(() => {
   /* const interval = setInterval(() => {
      console.log(width)
      goforward()
    }, 5000); */
    console.log('clear')
    updateCur()
  },[]);

  return (
    <div className = {styles.footballCollectionWrapper}>
    <div>{disableTransition && 1 }aa</div>
    <div className= {`${styles.footballCollectionContentWrapper} ${!disableTransition && styles.transition}`}  style = {{right : `${0.85*width + 30 + (cur-1)*(0.9*width + 20)}px`}}>
        <div className={styles.footballCollectionImageWrapper }>
        <img src = {footballCollection4} className = {`${styles.footballCollectionImg} ${styles.outfocus}`} ></img>
        </div>
        <div className={styles.footballCollectionImageWrapper }>
        <img src = {footballCollection1} className = {`${styles.footballCollectionImg} ${(cur == 1)? '': styles.outfocus } `} ></img>
        </div>
        <div className={styles.footballCollectionImageWrapper }>
        <img src = {footballCollection2} className = {`${styles.footballCollectionImg} ${(cur == 2)? '': styles.outfocus } `} ></img>
        </div>
        <div className={styles.footballCollectionImageWrapper }>
        <img src = {footballCollection3} className = {`${styles.footballCollectionImg} ${(cur == 3)? '': styles.outfocus } `} ></img>
        </div>
        <div className={styles.footballCollectionImageWrapper }>
        <img src = {footballCollection4} className = {`${styles.footballCollectionImg} ${(cur == 4)? '': styles.outfocus } `} ></img>
        </div>
        <div className={styles.footballCollectionImageWrapper }>
        <img src = {footballCollection1} className = {`${styles.footballCollectionImg} ${(cur == 5)? '': styles.outfocus } `} ></img>
        </div>
        <div className={styles.footballCollectionImageWrapper }>
        <img src = {footballCollection2} className = {`${styles.footballCollectionImg} ${(cur == 6)? '': styles.outfocus } `} ></img>
         </div>
       </div>
       <div className= {styles.buttonswrapper} >
        <div className= {styles.buttons} >
          <button className= {styles.button} onClick = {()=>setCur(1)}></button>
          <button className= {styles.button} onClick = {()=>setCur(2)}></button>
          <button className= {styles.button} onClick = {()=>setCur(3)}></button>
          <button className= {styles.button} onClick = {()=>setCur(4)}></button>
        </div>
       </div>
    </div>
  )
}
