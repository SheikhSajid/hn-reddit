import React, { memo, useCallback } from 'react';
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';

function openInNewTab(event, url) {
  event.stopPropagation();
  var win = window.open(url, '_blank');
  win.focus();
}

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

  const openHNPageInNewTab = useCallback(
    (event) => openInNewTab(event, hnUrl),
    [hnUrl]
  );

  const openExtLinkInNewTab = useCallback((event) => openInNewTab(event, url), [
    url,
  ]);

  const copyToClipboard = useCallback(
    (event) => {
      event.stopPropagation();
      navigator.clipboard
        .writeText(url)
        .then(() => alert(`URL copied: ${url}`))
        .catch((err) => console.error(err));
    },
    [url]
  );

  if (url) {
    urlShortened = url.startsWith('https://')
      ? url.slice(8, 33)
      : url.slice(0, 25);
    urlShortened = urlShortened.startsWith('http://')
      ? urlShortened.slice(7, 32)
      : urlShortened.slice(0, 25);
    urlShortened = urlShortened.startsWith('www.')
      ? urlShortened.slice(4)
      : urlShortened.slice(0);

    if (urlShortened.slice(-1) === '/')
      urlShortened = urlShortened.slice(0, -1);
    if (url.length > 33) urlShortened += '...';
  }

  return (
    <div onClick={openHNPageInNewTab} className="post postlist-entry">
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
            <p onClick={openExtLinkInNewTab} className="url-shortened">
              {urlShortened}
            </p>
          )}
          {text && (
            <div
              className="post-text"
              dangerouslySetInnerHTML={{ __html: textShortened }}
            ></div>
          )}
        </div>

        <div className="post-bottom">
          <div>{descendants} Comments</div>
          <div onClick={copyToClipboard}>Copy Link</div>
          <div>Save</div>
          <div>Hide</div>
        </div>
      </div>
    </div>
  );
});
