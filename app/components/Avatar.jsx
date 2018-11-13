import React, { Component, PropTypes } from 'react';
import AvatarHelper from './AvatarHelper';
import classNames from 'classnames/bind';
import pickerStyles from './AvatarPicker.css';
const cx = classNames.bind(pickerStyles);


class AvatarPicker extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      value: props.value, 
    };
  }

  componentWillReceiveProps(nextProps) 
  {
    this.setState({ value: nextProps.value }); // update state when props change
  }

  updateValue(value) 
  {
    this.setState({ value });  
  }

  render() 
  {
    this.avatarHelper = new AvatarHelper();
    var handler  =   this.props.handler;
    return (
      <div>
        <ul className={pickerStyles.container}>
          {this.avatarHelper.getAvatarKeys().map(avatarOption => (
            <li
              onClick={(e) => {
                this.updateValue(avatarOption);
                this.props.handler(avatarOption);
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

AvatarPicker.propTypes = 
{
  value: PropTypes.string.isRequired,
  handler: PropTypes.func
};

export default AvatarPicker;