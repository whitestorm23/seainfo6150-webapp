import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleListItem.module.css';
import  './SlugButton.module.css';

const ArticleListItem = ({ article }) => (
    <div className={styles.articleItem}>
        <header>
            <h1 className={styles.title}>{article.title}</h1>
            <p>{article.shortText}</p>
            <p> <time dateTime={article.pubDate}>{article.pubDate}</time></p>
        </header>
        
        <body className={styles.main}>
            <button onClick={() => alert(`${styles.slug}`)}><address><i> {article.author}</i></address></button>
        </body>
    </div>
);

ArticleListItem.propTypes = {
    "title": PropTypes.string.isRequired,
    "shortText": PropTypes.string.isRequired,
    "pubDate": PropTypes.string.isRequired,
    "pubYear": PropTypes.string.isRequired,
    "author": PropTypes.string.isRequired
};

export default ArticleListItem;