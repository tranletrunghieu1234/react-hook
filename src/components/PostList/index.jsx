import React from "react";
import PropTypes from "prop-types";

PostList.propTypes = {
  posts: PropTypes.array,
};

PostList.defaultProps = {
  posts: [],
};
function PostList(props) {
  const { posts } = props;
  return (
    <div className="boder">
      <ul className="post-list">
        {posts && posts.map((item) => <li key="item.id">{item.title}</li>)}
      </ul>
    </div>
  );
}

export default PostList;
