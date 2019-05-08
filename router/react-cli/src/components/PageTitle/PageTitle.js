import React from 'react';
import styles from './PageTitle.module.css';

export default class PageTitle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1 className={styles.pageTitle}>
        { this.props.title }
      </h1>
    );
  }
}
