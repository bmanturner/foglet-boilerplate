let StylePropableMixin = StylePropable;

function validateLabel (props, propName, componentName) {
  if (!props.children && !props.label) {
    return new Error('Required prop label or children was not ' +
      'specified in ' + componentName + '.');
  }
}

RaisedButton = React.createClass({
  mixins: [StylePropableMixin],
  propTypes: {
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    fullWidth: React.PropTypes.bool,
    large: React.PropTypes.bool,
    label: validateLabel,
    onMouseDown: React.PropTypes.func,
    onMouseUp: React.PropTypes.func,
    onMouseEnter: React.PropTypes.func,
    onMouseLeave: React.PropTypes.func,
    onTouchEnd: React.PropTypes.func,
    onTouchStart: React.PropTypes.func
  },
  getInitialState() {
    return {
      hovered: false,
      touched: false
    };
  },
  render() {
    let {
      className,
      disabled,
      label,
      fullWidth,
      large,
      ...other } = this.props;

    let labelElement;
    const labelStyle = {
      position: 'relative',
      padding: 0,
      verticalAlign: 'middle',
      userSelect: 'none',
      lineHeight: large ? '54px' : '36px',
    };
    labelElement = (
      <span style={this.mergeAndPrefix(labelStyle)}>
        {label}
        {this.props.children}
      </span>
    );
    let rootStyle = {
      backgroundColor: 'none',
      display: 'inline-block',
      minWidth: fullWidth ? '100%' : '',
      transition: Transitions.easeOut()
    };
    let buttonEventHandlers = disabled ? null : {
      onMouseDown: this._handleMouseDown,
      onMouseUp: this._handleMouseUp,
      onMouseLeave: this._handleMouseLeave,
      onMouseEnter: this._handleMouseEnter,
      onTouchStart: this._handleTouchStart,
      onTouchEnd: this._handleTouchEnd,
      onKeyboardFocus: this._handleKeyboardFocus,
    };
    let containerStyle = {
      position: 'relative',
      height: '100%',
      width: '100%',
      padding: 0,
      overflow: 'hidden',
      // This is need so that ripples do not bleed
      // past border radius.
      // See: http://stackoverflow.com/questions/17298739/ +
      // css-overflow-hidden-not-working-in-chrome-when-parent-has-border-radius-and-chil
      transform: 'translate3d(0, 0, 0)',
    };
    let overlayStyle = {
      top: 0,
      padding: '0.5rem 1.5rem',
      transition: Transitions.easeOut(),
      backgroundColor: this.state.hovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
    };
    let classString = large ? 'btn-large' : 'btn';
    if (disabled) classString += ' disabled';
    return (
      <div style={this.mergeAndPrefix(rootStyle, this.props.style)}>
        <ButtonHelper
          {...other}
          {...buttonEventHandlers}
          className={classString}
          ref="container"
          disabled={disabled}
          style={this.mergeAndPrefix(containerStyle)}>
            <div ref="overlay" style={this.mergeAndPrefix(overlayStyle)}>
              {labelElement}
            </div>
        </ButtonHelper>
      </div>
    );
  },
  _handleMouseDown(e) {
    if (this.props.onMouseDown) this.props.onMouseDown(e);
  },
  _handleMouseUp(e) {
    if (this.props.onMouseUp) this.props.onMouseUp(e);
  },
  _handleMouseLeave(e) {
    if (!this.refs.container.isKeyboardFocused()) this.setState({ hovered: false });
    if (this.props.onMouseLeave) this.props.onMouseLeave(e);
  },
  _handleMouseEnter(e) {
    if (!this.refs.container.isKeyboardFocused() && !this.state.touch) {
      this.setState({hovered: true});
    }
    if (this.props.onMouseEnter) this.props.onMouseEnter(e);
  },
  _handleTouchStart(e) {
    this.setState({ touch: true });
    if (this.props.onTouchStart) this.props.onTouchStart(e);
  },
  _handleTouchEnd(e) {
    if (this.props.onTouchEnd) this.props.onTouchEnd(e);
  },
  _handleKeyboardFocus(e, keyboardFocused) {
    if (keyboardFocused && !this.props.disabled) {
      this.setState({hovered: true});
    } else if (!this.state.hovered) {
      React.findDOMNode(this.refs.overlay).style.backgroundColor = 'transparent';
    }
  },
});

