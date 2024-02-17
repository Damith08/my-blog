import { useEffect, useState } from "react";
import Post from "../Post";

function IndexPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post")
      .then((response) => {
        response.json().then((posts) => {
          setPosts(posts);
        });
      })
      .catch();
  }, []);
  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => <Post {...post} key={post._id} />)}
    </>
  );
}

export default IndexPage;
