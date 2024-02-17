import { format } from "date-fns";

function Post({ title, summary, cover, content, createdAt, author }) {
  return (
    <div className="post">
      <div className="img">
        <img src={"http://localhost:4000/" + cover} alt="post-image" />
      </div>
      <div className="texts">
        <h2>{title}</h2>
        <p className="info">
          <a href="" className="author">
            {author.username}
          </a>
          <time>{format(new Date(createdAt), "MMM d, yyyy HH:mm")}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}

export default Post;
