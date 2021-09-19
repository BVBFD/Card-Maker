import React from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'
import styles from './styles.module.css';


const Login = ({ authService }) => {
  const onLogin = (event) => {
      console.log(event.target.innerText);
    authService
      .login(event.target.textContent)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <section className={styles.login}>
      <Header/>
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>Google</button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
      <Footer/>
    </section>
  )
}

export default Login