import styles from "./Header.module.scss"

const Header = () => {
  return (
    
    <div className={styles.header}>
        <img src = "src\assets\Googlebooks.jpg"/>
         <h1 className={styles.header__title}>
        Search through the Google books database and find your favourite read!
      </h1>
    
  
    
    </div>
    
  )
}

export default Header