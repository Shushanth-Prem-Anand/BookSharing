// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const TrendingBooksPage = () => {
// //   const [books, setBooks] = useState([]);

// //   useEffect(() => {
// //     const fetchBooks = async () => {
// //       try {
// //         const response = await axios.get(
// //           "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=newest&maxResults=10"
// //         );
// //         setBooks(response.data.items);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };
// //     fetchBooks();
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Trending Books</h1>
// //       <ul>
// //         {books.map((book) => (
// //           <li key={book.id}>
// //             <h2>{book.volumeInfo.title}</h2>
// //             <p>{book.volumeInfo.authors.join(", ")}</p>
// //             <p>{book.volumeInfo.publishedDate}</p>
// //             <p>{book.volumeInfo.description}</p>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default TrendingBooksPage;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TrendingBooksPage = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get(
//           'https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=newest&maxResults=10'
//         );
//         setBooks(response.data.items);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchBooks();
//   }, []);

//   return (
//     <div>
//       <h1>Trending Books</h1>
//       <ul>
//         {books.map((book) => (
//           <li key={book.id}>
//             {book.volumeInfo.imageLinks && (
//               <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
//             )}
//             <h2>{book.volumeInfo.title}</h2>
//             <p>{book.volumeInfo.authors.join(', ')}</p>
//             <p>{book.volumeInfo.publishedDate}</p>
//             <p>{book.volumeInfo.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TrendingBooksPage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrendingBooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=newest&maxResults=10'
        );
        setBooks(response.data.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Trending Books</h1>
      <div className="book-images-container">
        {books.map((book) => (
          <img
            key={book.id}
            className="book-image"
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingBooksPage;
