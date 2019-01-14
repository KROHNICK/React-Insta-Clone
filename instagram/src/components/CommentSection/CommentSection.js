import React from "react";

function CommentSection(props) {
  return (
    <div className="commentSection">
      <div className="likes">
        <div className="likesIcon">
          <i class="far fa-heart" />
        </div>
        <div className="commentsIcon">
          <i class="far fa-comment" />
        </div>
      </div>
      <div className="comments">
        <strong>373 likes</strong>
        <p>
          <strong>philzcoffee</strong> We've got more than just delicious
          coffees to offer at our shops. Don't forget to check out our selection
          of locally sou <span>more</span>
        </p>
        <p>
          <strong>biancasaurus_</strong> T-minus a month until Big/Little/GLil
          coffee dates!!! <i class="fas fa-heart" />
          <a>@tifanny_monroy</a>
          <a>@msafransky</a>
        </p>
        <p>
          <strong>martinseludo</strong>
          <i class="fas fa-smile-beam" />
        </p>
      </div>
      <div className="date">
        <span>2 HOURS AGO</span>
      </div>
      <form>
        <input type="text" name="comment" placeholder="Add a comment..." />
        <div className="dots">
          <i class="fas fa-ellipsis-h" />
        </div>
      </form>
    </div>
  );
}

export default CommentSection;
