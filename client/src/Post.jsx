function Post() {
  return (
    <div className="post">
      <div className="img">
        <img
          src="https://techcrunch.com/wp-content/uploads/2023/06/CMC_6855.jpg?resize=768,512"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>Apple eyes a foldable iPhone following Vision Pro launch</h2>
        <p className="info">
          <a href="" className="author">
            Damith Samarasinghe
          </a>
          <time>2024-02-06 14:45</time>
        </p>
        <p className="summary">
          IDC put foldable shipments at just over 21 million for 2023, while
          projecting that the market will more than double to 48.1 million by
          2027. That might sound like a big figure, but it’s a drop in the
          bucket compared to the 1.17 billion smartphones that shipped globally
          in 2023 (itself a 3.2% decline from the previous year).
        </p>
      </div>
    </div>
  );
}

export default Post;
