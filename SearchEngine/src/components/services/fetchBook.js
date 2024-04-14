const cleanedData = (data) => {
  return data.map((book) => {
    const author = book.volumeInfo.authors
      ? book.volumeInfo.authors[0]
      : "No author info available";
    return {
      title: book.volumeInfo?.title ?? "No title available",
      description: book.volumeInfo?.description ?? undefined,
      author,
      image: book.volumeInfo?.imageLinks?.thumbnail ?? undefined,
      releaseDate:
        book.volumeInfo?.publishedDate ?? "No publish date available",
      language:
        book.volumeInfo?.language.toUpperCase() ?? "No language info available",
    };
  });
};

export const fetchBook = async (searchTerm) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=20&key=AIzaSyAmmNmQtSvaZbbermSfT3i_obTF1Bi6uX8`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  // const response = await fetch(
  //   `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`,
  //   {
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   }
  // );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  if (!data.items || data.items.length === 0) {
    throw new Error(`No books containing: ${searchTerm}`);
  }
  return cleanedData(data.items);
};