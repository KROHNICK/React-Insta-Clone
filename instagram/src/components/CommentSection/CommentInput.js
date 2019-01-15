import React from "react";

const CommentInput = props => {
  return (
    <form>
      <input name="comment" type="text" placeholder="Add comment... " />
      <i class="fas fa-ellipsis-h" />
    </form>
  );
};

export default CommentInput;
