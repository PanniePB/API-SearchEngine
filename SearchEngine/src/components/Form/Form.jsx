import { useState } from "react";
import styles from "./Form.module.scss";

export const Form = ({onSumbit}) => {
const [searchTerm,setSearchTerm]=useState(null)
const handleSubmit=(e)=>{
  e.preventDefault();
  onSumbit(searchTerm);

}
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (

    <form  className={styles.form} action="">
      <input  className={styles.form__input}
        onChange={onInputChange}
         type="text" 
         placeholder="Search by title"/>
      <button onClick={handleSubmit}></button>
    </form>
  )
}

export default Form;
