
import React from 'react'
import styles from "./Home.module.css";
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
// import { Button } from 'react-bootstrap';
const Home = () => {
  return (
    <div>
    <div className={styles.container}>
      {/* Just one step ahead to check and save your to-do list  */}
    
     <div className={styles.innerBox}>
     <h3>Just one step to check and save your to-do list <FaHeart style={{ color: 'red' }} /></h3>
 <div className={styles.footer}>
      
       <div>
      <span style={{ marginRight: '10px' }}>Already our member 🤩</span>
      <span>
        <Link to="/login">Login</Link>
      </span>
    </div>
          <div>
      <span style={{ marginRight: '10px' }}>Now become our member 😇</span>
      <span>
        <Link to="/signup">Register</Link>
      </span>
    </div>
     </div>
   </div>
   </div>
 </div>
  )
}

export default Home
