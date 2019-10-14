import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleImage.module.css";

const ArticleImage = ({ url, title }) => (
    <div className={styles.figure}>
        <img title={title} className={styles.image} src={url} alt="alt test" />
    </div>
);

ArticleImage.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default ArticleImage;