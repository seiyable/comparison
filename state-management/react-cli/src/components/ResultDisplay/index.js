import React, {Component} from 'react';
import styles from './ResultDisplay.module.css';
import {connect} from 'react-redux';

class ResultDisplay extends Component {
  render() {
    return (
      <section className={styles.resultDisplay}>
        <div className={styles.number}>
          { this.props.number }
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({number: state.number});
export default connect(mapStateToProps)(ResultDisplay);
