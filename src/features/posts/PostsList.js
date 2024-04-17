import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  const posts2 = useSelector(selectAllPosts);
  const dispatch = useDispatch();

  const renderedPosts = posts2.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title} </h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
