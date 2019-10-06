import styles from "./ArticleListItem.module.css";
import React from 'react';
import PropTypes from 'prop-types';
import './SlugButton.module.css';

class ArticleListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            author: this.props.author,
            date: this.props.date,
            shortText: this.props.shortText,
            year: this.props.year
        }
    }

    render() {
        return (
            <main className={styles.styles}>

                <h1 className={styles.title}>{this.props.title}</h1>
                <p>{this.props.shortText}</p>
                <br></br>
                <time className={styles.dateTime} dateTime={this.props.year}>{this.props.date}</time>
                < body className={styles.main} >
                    <button className={styles.slug} onClick={() => alert(`${styles.slug}`)}><address> { this.props.author}</address></button>
                </body >
            </main>
        );
    }
}

ArticleListItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    shortText: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
}

export default ArticleListItem;