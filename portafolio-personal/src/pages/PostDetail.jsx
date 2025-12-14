import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import client from "../api/client";

export default function PostDetail() {
  const { id } = useParams(); // id viene como string
  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Convertimos el id a número
    client
      .get(`/posts/${Number(id)}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch(() => {
        setError(true);
      });
  }, [id]);

  if (error) return <p>Error cargando el post</p>;
  if (!post) return <p>Cargando...</p>;

  return (
    <div className="container card fade-in">
      <h1>{post.title}</h1>
      <p className="date">{post.date}</p>
      <p style={{ whiteSpace: "pre-line" }}>{post.content}</p>
    </div>
  );
}
