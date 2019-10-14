import styles from "./ArticleListItem.module.css";
import React from 'react';
import PropTypes from 'prop-types';
import './SlugButton.module.css';
import ArticleImage from "./ArticleImage";

class ArticleListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            author: this.props.author,
            date: this.props.date,
            shortText: this.props.shortText,
            year: this.props.year,
            image: this.props.image
        }
    }

    render() {
        return (
            <div className={styles.box}>
                <div className={styles.image}>
                    <ArticleImage url={this.props.url} title={this.props.title} />
                </div>
                <div className={styles.container}>
                    <body>
                        <section>
                        <h1 className={styles.title}>{this.props.title}</h1>
                        <p className={styles.shortText}>{this.props.shortText}</p>
                        <time className={styles.dateTime} dateTime={this.props.year}>{this.props.date}</time>          
                 
                            <button className={styles.slug} onClick={() => alert(`${styles.slug}`)}><address> {this.props.author}</address></button>
                        </section>
                    </body>
                </div>
            </div>
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
