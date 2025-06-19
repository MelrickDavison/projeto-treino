import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
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
     <header className="header">
        <h1 className="logo">📚 Estante Virtual</h1>
      </header>
      <div className="book-container">
        {livros.map((livro) => {
          const coverUrl = livro.formats["image/jpeg"];
          return (
            <Link to={`/livro/${livro.id}`} style={{textDecoration: "none", color: 'inherit'}} className="book-card">
                <div key={livro.id}>
                    <img
                    className="img-book"
                    src={coverUrl}
                    alt={`Capa do livro ${livro.title}`}
                    />
                    {/* <p className="book-info">{livro.title}</p> */}
                  <p className="book-info">{livro.title}</p>
                </div>
            </Link>
          );
        })}
      </div>
    </div>
  )
}