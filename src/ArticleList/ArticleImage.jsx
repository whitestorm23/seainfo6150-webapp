import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleImage.module.css'

const ArticleImage = props => {
    return (
        <img className={styles.image}
            src={props.article.image._url}
            alt={props.article.title}>
        </img>
    );
};

ArticleImage.propTypes = {
    article: PropTypes.object.isRequired
};

export default ArticleImage;