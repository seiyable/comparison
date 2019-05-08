import React from 'react';
import styles from './Index.module.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import SiteTree from '../../components/SiteTree/SiteTree';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const myName = 'Hi, I\'m at ' + this.props.location.pathname;
    return (
      <main className={styles.index}>
        <PageTitle title={myName} />
        <hr />
        <SiteTree currentPath={this.props.location.pathname} />
      </main>
    );
  }
}
