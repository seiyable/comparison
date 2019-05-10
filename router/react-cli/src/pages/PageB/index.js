import React from 'react';
import styles from './PageB.module.css';
import PageTitle from '../../components/PageTitle';
import SiteTree from '../../components/SiteTree';

export default class PageB extends React.Component {
  render() {
    const myName = 'This is ' + this.props.location.pathname;
    return (
      <main className={styles.pageB}>
        <PageTitle title={myName} />
        <hr />
        <SiteTree currentPath={this.props.location.pathname} />
      </main>
    );
  }
}
