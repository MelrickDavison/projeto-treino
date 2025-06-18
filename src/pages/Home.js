import { useEffect, useState } from "react";
import axios from 'axios';

export default function Home(){
    const [livros, setLivros] = useState([])

  useEffect( () => {
      axios.get('http://gutendex.com/books')
      .then(res => setLivros(res.data.results))
      .catch(err => console.error(err));
  }, []);

  return(
  <div>
      <h1>Catálogo PNLD</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {livros.map((livro) => {
          // Pega a URL da capa
          const coverUrl = livro.formats["image/jpeg"];

          // Se tiver capa, mostra
          return (
            <div key={livro.id} style={{ width: "150px" }}>
              {coverUrl ? (
                <img
                  src={coverUrl}
                  alt={`Capa do livro ${livro.title}`}
                  style={{ width: "100%", height: "auto" }}
                />
              ) : (
                <div
                  style={{
                    width: "150px",
                    height: "200px",
                    backgroundColor: "#ccc",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "12px",
                    color: "#555",
                  }}
                >
                  Sem capa
                </div>
              )}
              <p>{livro.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}