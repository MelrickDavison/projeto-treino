import { useEffect, useState } from "react";
import axios from 'axios';
import '../App.css';

export default function Home(){
    const [livros, setLivros] = useState([])

  useEffect( () => {
      axios.get('https://gutendex.com/books')
      .then(res => setLivros(res.data.results))
      .catch(err => console.error(err));
  }, []);

  return(
  <div>
      <h1 className="title-top">ESTANTE VIRTUAL</h1>
      <div className="book-container">
        {livros.map((livro) => {
          const coverUrl = livro.formats["image/jpeg"];
          return (
            <div  className="book-card">
                <div key={livro.id}>
                    <img
                    className="img-book"
                    src={coverUrl}
                    alt={`Capa do livro ${livro.title}`}
                    />
                    <p className="book-info">{livro.title}</p>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}