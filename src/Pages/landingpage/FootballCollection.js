import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './footballcollection.module.css';
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import { useEffect, useState } from "react";
import footballCollection1 from  '../../assets/images/football-collection-1.png'
import footballCollection2 from  '../../assets/images/football-collection-2.png'
import footballCollection3 from  '../../assets/images/football-collection-3.png'
import footballCollection4 from  '../../assets/images/football-collection-4.png'
export default function FootballCollection() {
  const [cur, setCur] = useState(1);
  //const [speed,setSpeed] = useState(2000)
  let speed = 2000;
  const [disableTransition,setDisableTransition] = useState(false);
  //const { height, width } = useWindowDimensions();
  const width = 1263;
  let timer;
  const updateCur = () =>{
    timer = !timer && setInterval(()=>{
      setCur(preCur => {
        if(preCur == 5){
          setDisableTransition(true);
          return 1;
        }
        else{
          speed=2000;
          setDisableTransition(false);
          console.log(disableTransition)
          return preCur +1 ;
        }
      });
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
  const goforward = () =>{
    if(cur == 5){
      setDisableTransition(true);
      setCur(1);
      goforward();
    }
    else{
      console.log(cur)
      if(disableTransition){
        setDisableTransition(false)
      }
      setCur(precur => precur +1 )
    }
  }
  useEffect(() => {
   /* const interval = setInterval(() => {
      console.log(width)
      goforward()
    }, 5000); */
    updateCur()
  },[cur]);
  return (
    <div className = {styles.footballCollectionWrapper}>
    <div>{cur }aa</div>
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
        <img src = {footballCollection3} className = {`${styles.footballCollectionImg} ${(cur === 3)? '': styles.outfocus } `} ></img>
        </div>
        <div className={styles.footballCollectionImageWrapper }>
        <img src = {footballCollection4} className = {`${styles.footballCollectionImg} ${(cur === 4)? '': styles.outfocus } `} ></img>
        </div>
        <div className={styles.footballCollectionImageWrapper }>
        <img src = {footballCollection1} className = {`${styles.footballCollectionImg} ${(cur === 5)? '': styles.outfocus } `} ></img>
        </div>
        <div className={styles.footballCollectionImageWrapper }>
        <img src = {footballCollection2} className = {`${styles.footballCollectionImg} ${(cur === 6)? '': styles.outfocus } `} ></img>
         </div>
       </div>
    </div>
  )
}
