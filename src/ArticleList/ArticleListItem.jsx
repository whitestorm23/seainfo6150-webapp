import React from 'react';
import PropTypes from 'prop-types';
import SlugButton from './SlugButton';
import ArticleImage from './ArticleImage';
import styles from './ArticleListItem.module.css';

const Item = props => {
    return (
        //<div className={styles.flexContainer}>
            <div className={styles.flexContainer} >
             <ArticleImage article={props.article}></ArticleImage>
                <div className={styles.textArea}>
                    <h1 className={styles.head}> {props.article.title}</h1>
                    <p>{props.article.shortText}
                    <br></br>
                    <time className={styles.time} dateTime={props.article.pubDate}>{props.article.pubDate}</time>
                    <SlugButton article={props.article}></SlugButton></p>
                </div>
            </div>
        //</div>
    );
};

Item.propTypes = {
    article: PropTypes.object.isRequired
};

export default Item;
