import React, { memo, useCallback } from 'react';
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';

export default memo(({ post }) => {
  const { by, descendants, id, score, time, title, text, url } = post;
  const timestamp = distanceInWordsToNow(new Date(time * 1000), {
    addSuffix: true,
  });
  let urlShortened = '';
  let textShortened = '';
  const hnUrl = `https://news.ycombinator.com/item?id=${id}`;

  if (text && text.length > 900) {
    textShortened = text.slice(0, 900) + '...';
    textShortened += `<br />
                      <a target="_blank" 
                         rel="noopener noreferrer"
                         href='${hnUrl}'
                      >
                        Read more
                      </a>`;
  }

  const openInNewTab = useCallback(() => {
    var win = window.open(hnUrl, '_blank');
    win.focus();
  }, [hnUrl]);

  if (url) {
    urlShortened = url.startsWith('https://')
      ? url.slice(8, 33)
      : url.slice(0, 28);
    urlShortened = urlShortened.startsWith('http://')
      ? urlShortened.slice(7, 33)
      : urlShortened.slice(0, 28);
    urlShortened = urlShortened.startsWith('www.')
      ? urlShortened.slice(4)
      : urlShortened.slice(0);
  }

  return (
    <div onClick={openInNewTab} className="post postlist-entry">
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
          {url && (
            <a target="_blank" rel="noopener noreferrer" href={url}>
              {urlShortened + '...'}
            </a>
          )}
          {text && <p dangerouslySetInnerHTML={{ __html: textShortened }}></p>}
        </div>

        <div className="post-bottom">
          <div>
            <a href={hnUrl} target="_blank" rel="noopener noreferrer">
              {descendants} Comments
            </a>
          </div>
          <div>Copy Link</div>
          <div>Save</div>
          <div>Hide</div>
        </div>
      </div>
    </div>
  );
});
