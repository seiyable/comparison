import React, {Component} from 'react';
import styles from './Controls.module.css';
import {connect} from 'react-redux';
import actionCreators from '../../redux/actionCreators';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {checked: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleIncrementButtonClick = this.handleIncrementButtonClick.bind(this);
    this.handleDecrementButtonClick = this.handleDecrementButtonClick.bind(this);
  }
  handleChange(e) {
    this.setState({checked: e.target.value});
  }
  handleIncrementButtonClick(e) {
    this.state.checked
      ? this.props.delayedIncrement()
      : this.props.increment();
  }
  handleDecrementButtonClick(e) {
    this.state.checked
      ? this.props.delayedDecrement()
      : this.props.decrement();
  }
  render() {
    return (
      <section className={styles.controls}>
        <div className={styles.top}>
          <button
            className={styles.button}
            onClick={this.handleIncrementButtonClick}
          >
            INCREMENT
          </button>
          <button
            className={styles.button}
            onClick={this.handleDecrementButtonClick}
          >
            DECREMENT
          </button>
        </div>
        <div className={styles.bottom}>
          <label>
            <input
              value={this.state.checked}
              type="checkbox"
              onChange={this.handleChange}
            />
            DELAYED ACTION
          </label>
        </div>
      </section>
    );
  }
}

export default connect(null, actionCreators)(Controls);
