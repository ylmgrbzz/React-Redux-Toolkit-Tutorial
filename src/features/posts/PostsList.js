import React from "react";
import { useSelector, useDispatch } from "react-redux";

const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title} </h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
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
