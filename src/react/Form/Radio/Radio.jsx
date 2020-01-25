import React from 'react'
import PropTypes from 'prop-types'
import './Radio.scss'
import Icon from '../../Inline/Icon/Icon'

const Radio = props =>
  <label className={`radio ${props.className} ${props.icon ? 'radio--custom' : ''}`.trim()}>
    <input
      className="radio__field"
      defaultChecked={props.isChecked}
      name={props.name}
      onChange={e => props.onChange(e.target.value)}
      type="radio"
      value={props.value}
    />
    <Icon className={`radio__icon ${props.iconClassName}`} name={`${props.icon ? props.icon : 'formRadioUnchecked'}`}/>
    <Icon className={`radio__icon ${props.iconClassName}`} name={`${props.icon ? props.icon : 'formRadioChecked'}`}/>
    <div className="radio__text">
      {props.children}
    </div>
  </label>

Radio.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  iconClassName: PropTypes.string,
  isChecked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  paletteColor: PropTypes.string,
  value: PropTypes.string,
}

Radio.defaultProps = {
  className: '',
  icon: '',
  iconClassName: '',
  isChecked: false,
  name: 'unassigned',
  onChange: value => { return value },
  paletteColor: '',
  value: '0',
}

export default Radio
