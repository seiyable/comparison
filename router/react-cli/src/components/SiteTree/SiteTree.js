import React from 'react';
import styles from './SiteTree.module.css';
import SiteTreeNode from '../SiteTreeNode/SiteTreeNode';

export default class SiteTree extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className={styles.siteTree}>
        <SiteTreeNode
          path="/index"
          currentPath={this.props.currentPath}
        />
        <SiteTreeNode
          path="/page-a"
          currentPath={this.props.currentPath}
          child
        />
        <SiteTreeNode
          path="/page-b"
          currentPath={this.props.currentPath}
          lastChild
        />
      </section>
    );
  }
}
