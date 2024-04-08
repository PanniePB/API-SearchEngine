export const fetchBooks = async (searchTerm) => {
  if (searchTerm === "") {
    throw new Error("Search term is required");
  }
  const response = await fetch(
     `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=20&key=AIzaSyAmmNmQtSvaZbbermSfT3i_obTF1Bi6uX8`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  const { results } = data;
  if (results.length === 0) {
    throw new Error("No jokes found for search term " + searchTerm);
  }
  return results;
};