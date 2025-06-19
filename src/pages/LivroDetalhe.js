import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function LivroDetalhe() {
  const { id } = useParams(); // pega o id da URL
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    axios.get(`https://gutendex.com/books/${id}`)
      .then(res => setLivro(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!livro) return <p>Carregando livro...</p>;

  return (
    <div>
      <h1>{livro.title}</h1>
      <p>Autor: {livro.authors[0]?.name}</p>
      <p>Idioma(s): {livro.languages.join(', ')}</p>
    </div>
  );
}
