import React from 'react';
import { connect } from 'react-redux';
import * as user from './Function.js';
@connect(store => {
  return {
    bar_change: store.bar_change
  };
})
export default class Barpharma extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this._isMounted = true;
    window.onpopstate = () => {
      if (this._isMounted) {
        if (history.state == null || history.state.num == '1') {
          // //
          // 0
          //0,1   1
          //1,2   2
          //2,3   3
          //3,4   4
          //5     ...
          //4,6
          this.callButtonData(0, 1, 'stop');
        } else if (history.state.num == '2') {
          this.callButtonData(1, 2, 'stop');
        } else if (history.state.num == '3') {
          this.callButtonData(2, 3, 'stop');
        } else if (history.state.num == '4') {
          this.callButtonData(3, 4, 'stop');
        } else if (user.checkNumber(history.state.num, 5, 1300)) {
          // The rest
          //------------------------------------------

          this.callButtonData(0, 1, 'stop');
        } else if (user.checkNumber(history.state.num, 6, 1300)) {
          this.callButtonData(1, 2, 'stop');
        } else if (user.checkNumber(history.state.num, 7, 1300)) {
          this.callButtonData(2, 3, 'stop');
        } else if (user.checkNumber(history.state.num, 8, 1300)) {
          this.callButtonData(3, 4, 'stop');
        } else if (user.checkNumber(history.state.num, 9, 1300)) {
          user.barChange(
            this.props.bar_change.array_pharma[5],
            this.props.bar_change.array_pharma,
            this.props.bar_change.next_pharma,
            'bar_change_pharma',
            'pharma_bar_send',
            'stop'
          );
        }
      }
    };
  }
  callButtonData(index_1, index_2, stop) {
    this.props.bar_change.next_pharma === false
      ? user.barChange(
          this.props.bar_change.array_pharma[index_1],
          this.props.bar_change.array_pharma,
          this.props.bar_change.next_pharma,
          'bar_change_pharma',
          'pharma_bar_send',
          stop
        )
      : user.barChange(
          this.props.bar_change.array_pharma[index_2],
          this.props.bar_change.array_pharma,
          this.props.bar_change.next_pharma,
          'bar_change_pharma',
          'pharma_bar_send',
          stop
        );
  }
  render() {
    return (
      <div className="bar">
        {this.props.bar_change.next_pharma ? (
          <p
            className="bar_num move_first_num_bar"
            onClick={() => user.barChange(1, this.props.bar_change.array_pharma, this.props.bar_change.next_pharma, 'bar_change_pharma', 'pharma_bar_send')}>
            {' '}
            1{' '}
          </p>
        ) : (
          ''
        )}
        {this.props.bar_change.next_pharma ? (
          <p
            className="bar_num"
            onClick={() => {
              user.barChange(
                this.props.bar_change.array_pharma[0],
                this.props.bar_change.array_pharma,
                this.props.bar_change.next_pharma,
                'bar_change_pharma',
                'pharma_bar_send'
              );
            }}>
            {' '}
            ...{' '}
          </p>
        ) : (
          ''
        )}
        <p
          className={
            this.props.bar_change.next_pharma === false
              ? this.props.bar_change.array_pharma[0] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
              : this.props.bar_change.array_pharma[1] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
          }
          onClick={() => {
            this.callButtonData(0, 1);
          }}>
          {this.props.bar_change.next_pharma ? this.props.bar_change.array_pharma[1] : this.props.bar_change.array_pharma[0]}{' '}
        </p>
        <p
          className={
            this.props.bar_change.next_pharma === false
              ? this.props.bar_change.array_pharma[1] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
              : this.props.bar_change.array_pharma[2] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
          }
          onClick={() => {
            this.callButtonData(1, 2);
          }}>
          {this.props.bar_change.next_pharma ? this.props.bar_change.array_pharma[2] : this.props.bar_change.array_pharma[1]}{' '}
        </p>
        <p
          className={
            this.props.bar_change.next_pharma === false
              ? this.props.bar_change.array_pharma[2] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
              : this.props.bar_change.array_pharma[3] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
          }
          onClick={() => {
            this.callButtonData(2, 3);
          }}>
          {this.props.bar_change.next_pharma ? this.props.bar_change.array_pharma[3] : this.props.bar_change.array_pharma[2]}{' '}
        </p>
        <p
          className={
            this.props.bar_change.next_pharma === false
              ? this.props.bar_change.array_pharma[3] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
              : this.props.bar_change.array_pharma[4] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
          }
          onClick={() => {
            this.callButtonData(3, 4);
          }}>
          {this.props.bar_change.next_pharma ? this.props.bar_change.array_pharma[4] : this.props.bar_change.array_pharma[3]}{' '}
        </p>
        {this.props.bar_change.next_pharma ? (
          <p
            className={
              this.props.bar_change.next_pharma === false
                ? this.props.bar_change.array_pharma[4] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
                : this.props.bar_change.array_pharma[5] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
            }
            onClick={() => {
              user.barChange(
                this.props.bar_change.array_pharma[5],
                this.props.bar_change.array_pharma,
                this.props.bar_change.next_pharma,
                'bar_change_pharma',
                'pharma_bar_send'
              );
            }}>
            {this.props.bar_change.array_pharma[5]}{' '}
          </p>
        ) : (
          ''
        )}
        <p
          className={
            this.props.bar_change.next_pharma === false
              ? this.props.bar_change.array_pharma[5] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
              : this.props.bar_change.array_pharma[6] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
          }
          onClick={() => {
            this.callButtonData(4, 6);
          }}>
          {' '}
          ...
        </p>{' '}
      </div>
    );
  }
}
