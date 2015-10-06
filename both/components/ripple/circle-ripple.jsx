let PureRenderMixin = React.addons.PureRenderMixin;
let AutoPrefix = Modules.AutoPrefix;
let Transitions = Modules.Transitions;
let StylePropableMixin = Modules.StylePropable;

CircleRipple = React.createClass({
  mixins: [PureRenderMixin, StylePropableMixin],
  propTypes: {
    color: React.PropTypes.string,
    opacity: React.PropTypes.number
  },
  getDefaultProps() {
    return {
      color: '#000000',
      opacity: 0.16
    };
  },
  componentWillAppear(callback) {
    this._initializeAnimation(callback);
  },
  componentWillEnter(callback) {
    this._initializeAnimation(callback);
  },
  componentDidAppear() {
    this._animate();
  },
  componentDidEnter() {
    this._animate();
  },
  componentWillLeave(callback) {
    let style = React.findDOMNode(this).style;
    style.opacity = 0;
    setTimeout(() => {
      if (this.isMounted()) callback();
    }, 2000);
  },
  render() {
    const { color, opacity, style, ...other } = this.props;

    const mergedStyles = this.mergeAndPrefix({
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      borderRadius: '50%',
      backgroundColor: color,
    }, style);

    return (
      <div {...other} style={mergedStyles} />
    );

  },
  _animate() {
    let style = React.findDOMNode(this).style;
    const transitionValue = (
      Transitions.easeOut('2s', 'opacity') + ',' +
      Transitions.easeOut('1s', 'transform')
    );
    AutoPrefix.set(style, 'transition', transitionValue);
    AutoPrefix.set(style, 'transform', 'scale(1)');
  },
  _initializeAnimation(callback) {
    let style = React.findDOMNode(this).style;
    style.opacity = this.props.opacity;
    AutoPrefix.set(style, 'transform', 'scale(0)');
    setTimeout(() => {
      if (this.isMounted()) callback();
    }, 0);
  },
});