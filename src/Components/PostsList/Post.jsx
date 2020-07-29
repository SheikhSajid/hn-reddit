import React from "react";
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';

export default ({ post }) => {
  const { by, descendants, id, score, time, title, url } = post;
  const timestamp = distanceInWordsToNow(new Date(time * 1000), { addSuffix: true });
  
  return (
    <div className="post postlist-entry">
      <div className="like-count bg-secondary">
        <div>{score}</div>
        <div>Likes</div>
      </div>
      
      <div className="post-content">
        <div className="post-metadata">
          Posted by {by} {timestamp}
        </div>
        <h2 className="post-title">{title}</h2>
        <div className="post-body">
          <a href={url}>{url}</a>
        </div>

        <div className="post-bottom">
          <div>
            <a 
              href={`https://news.ycombinator.com/item?id=${id}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {descendants} Comments
            </a>
          </div> 
          <div>Copy Link</div>
          <div>Save</div>
          <div>Hide</div>
        </div>
      </div>
    </div>
  )
}