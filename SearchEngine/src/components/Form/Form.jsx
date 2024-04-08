import { useState } from "react";
import styles from "./Form.module.scss";

export const Form = ({onSubmit}) => {

const [searchTerm,setSearchTerm] = useState(null)

const handleSubmit = (e) => {
  e.preventDefault();
  onSubmit(searchTerm);

}
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (

    <form  className={styles.form} action="">
      <input  
        className={styles.form__input}
        onChange={onInputChange}
        type="text" 
        placeholder="Search by title"/>

      <button onClick={handleSubmit}> 
      <img src="src\assets\searchLogo.jpg"></img>
      </button>
    </form>
  )
}

export default Form;
