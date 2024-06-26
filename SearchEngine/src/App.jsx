
import Header from "./components/Header/Header";
import { useState } from "react";
import Form from "./components/Form/Form";
import BooksList from "./components/BooksList/BooksList"



const App = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [emptySearch, setEmptySearch] = useState(null);

  const handleSubmit = (searchTerm) => {
    if (!searchTerm) {
      setEmptySearch(true);
      return;
    }
    setEmptySearch(false);
    setSearchTerm(searchTerm);
  };

  return (
    <div  >
    <Header/>
    <main >
      <Form onSubmit={handleSubmit}/>
      <BooksList emptySearch={emptySearch} searchTerm={searchTerm}/>
    </main>
    </div>
  );
};

export default App;