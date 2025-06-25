import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

export default function LivroDetalhe() {
  const { id } = useParams();
  const [livro, setLivro] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://gutendex.com/books/${id}`)
      .then((res) => setLivro(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!livro) {
    return (
      <div className="loading-container">
        <p className="loading-text">Carregando livro...</p>
      </div>
    );
  }
 const coverUrl = livro.formats["image/jpeg"];
  return (
    <div>
      <header className="header">
        <button onClick={() => navigate("/")} className="btn-voltar">
          ← Voltar
        </button>
      </header>
      <div className="container-detalhes">
        <img
          className="img-book"
          src={coverUrl}
          alt={`Capa do livro ${livro.title}`}
        />
        <h1>{livro.title}</h1>
        <p>Autor: {livro.authors[0]?.name}</p>
        <p>Idioma(s): {livro.languages.join(", ")}</p>
      </div>
    </div>
  );
}
