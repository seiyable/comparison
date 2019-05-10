import React from 'react';
import styles from './SiteTreeNode.module.css';
import {Link} from 'react-router-dom';

export default class SiteTreeNode extends React.Component {
  render() {
    const isCurrentPath = this.props.path === this.props.currentPath;
    const childNodeBullet = this.props.child && <span>├</span>;
    const lastChildNodeBullet = this.props.lastChild && <span>└</span>;
    const disabledClass = isCurrentPath ? styles.disabled : '';

    return (
      <div className={styles.siteTreeNode}>
        {childNodeBullet}
        {lastChildNodeBullet}
        <Link
          className={disabledClass}
          to={this.props.path}
        >
          {this.props.path}
        </Link>
      </div>
    );
  }
}
