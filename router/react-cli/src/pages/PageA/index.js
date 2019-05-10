import React from 'react';
import styles from './PageA.module.css';
import PageTitle from '../../components/PageTitle';
import SiteTree from '../../components/SiteTree';

export default class PageA extends React.Component {
  render() {
    const myName = 'Now at ' + this.props.location.pathname;
    return (
      <main className={styles.pageA}>
        <PageTitle title={myName} />
        <hr />
        <SiteTree currentPath={this.props.location.pathname} />
      </main>
    );
  }
}
