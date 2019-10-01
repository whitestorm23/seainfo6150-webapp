import React from "react";

const ArticleListItem = ({article}) => {
    return(
        <div>
          <h3>{article.title}</h3>
          <p>{article.shortText}</p>
          <p> <time dateTime={article.pubDate}>{article.pubDate}</time>
          <button onClick={() => alert(`${article.slug}`)}>Show article slug</button></p>
          
        </div>
    )

}


export default ArticleListItem;