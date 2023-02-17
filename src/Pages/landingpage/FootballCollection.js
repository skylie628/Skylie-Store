import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './footballcollection.module.css'
import { useEffect, useState } from "react";
import footballCollection1 from  '../../assets/images/football-collection-1.png'
import footballCollection2 from  '../../assets/images/football-collection-2.png'
import footballCollection3 from  '../../assets/images/football-collection-3.png'
import footballCollection4 from  '../../assets/images/football-collection-4.png'
export default function FootballCollection() {
  const {current, setCurrent} = useState(1)
  const {disableTransition,setDisableTransition} = useState(false)
  const goback = () =>{
    if(current == 1){
      setDisableTransition(true);
      setCurrent(5);
      goback();
    }
    else{
      if(disableTransition){
        setDisableTransition(false)
      }
      setCurrent((current)=> current-1)
    }
  }
  const goforward = () =>{
    if(current == 5){
      setDisableTransition(true);
      setCurrent(1);
      goforward();
    }
    else{
      if(disableTransition){
        setDisableTransition(false)
      }
      setCurrent((current)=> current+1)
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      goforward()
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className = {styles.footballCollectionWrapper}>
    <div className={styles.footballCollectionContentWrapper }>
        <div className={styles.footballCollectionImageWrapper }>
        <img src = {footballCollection4} className = {styles.footballCollectionImg} ></img>
        </div>
        <div className={styles.footballCollectionImageWrapper }>
        <img src = {footballCollection1} className = {styles.footballCollectionImg} ></img>
        </div>
        <div className={styles.footballCollectionImageWrapper }>
        <img src = {footballCollection2} className = {styles.footballCollectionImg} ></img>
        </div>
        <div className={styles.footballCollectionImageWrapper }>
        <img src = {footballCollection3} className = {styles.footballCollectionImg} ></img>
        </div>
        <div className={styles.footballCollectionImageWrapper }>
        <img src = {footballCollection4} className = {styles.footballCollectionImg} ></img>
        </div>
        <div className={styles.footballCollectionImageWrapper }>
        <img src = {footballCollection1} className = {styles.footballCollectionImg} ></img>
        </div>
        <div className={styles.footballCollectionImageWrapper }>
        <img src = {footballCollection2} className = {styles.footballCollectionImg} ></img>
         </div>
       </div>
    </div>
  )
}
