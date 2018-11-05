import React, { Component, PropTypes } from 'react';
import AvatarHelper from './AvatarHelper';
import classNames from 'classnames/bind';
import pickerStyles from './AvatarPicker.css';
const cx = classNames.bind(pickerStyles);

// require('./assets/css/myapp.css');


class AvatarPicker extends Component {
  constructor(props) {
    super(props);
    console.log(props + " " + JSON.stringify(props) + " PROPS");
    this.state = {
      value: props.value, // initialize state from value prop given by redux-form
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value }); // update state when props change
  }

  updateValue(value) {
    this.setState({ value });  // change local state
    // this.props.onChange(value);     // notify redux-form
  }

  render() {
    this.avatarHelper = new AvatarHelper();
    console.log(this.state.value + " this.state.value");
    var handler  =   this.props.handler;
    return (
      <div>
        <ul className={pickerStyles.container}>
          {this.avatarHelper.getAvatarKeys().map(avatarOption => (
            <li
              onClick={(e) => {
                console.log(avatarOption);
                this.updateValue(avatarOption);
                this.props.handler(avatarOption);
                console.log(this.state.value + " " + avatarOption);
              }}
              key={avatarOption}
              className=  "element">
              <img src={this.avatarHelper.avatarUrlKey(avatarOption)} alt="avatar" className={cx({ selected: this.state.value === avatarOption }, { unselected: this.state.value !== avatarOption })}
          />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

AvatarPicker.propTypes = {
  value: PropTypes.string.isRequired,
  handler: PropTypes.func
};

export default AvatarPicker;