import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleImage.module.css'

const ArticleImage = props => {
    return (
        <img src={props.article.image._url} alt={props.article.title} width={props.article.image._width / 5} height={props.article.image._height / 5} />
    );
};

ArticleImage.propTypes = {
    article: PropTypes.object.isRequired
};

export default ArticleImage;