import React from "react";
import PropTypes from "prop-types";
import styles from "./SlugButton.module.css";

const SlugButton = () => (
    <div className={styles.button}>
        <button onClick={() => alert(`${styles.button}`)}><address><i> {author}</i></address></button>
    </div>
);

SlugButton.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default SlugButton;