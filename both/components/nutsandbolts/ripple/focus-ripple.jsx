let PureRenderMixin = React.addons.PureRenderMixin;
let StylePropableMixin = StylePropable;

let pulsateDuration = 750;

FocusRipple = React.createClass({
  mixins: [PureRenderMixin, StylePropableMixin],
  propTypes: {
    color: React.PropTypes.string,
    innerStyle: React.PropTypes.object,
    opacity: React.PropTypes.number,
    show: React.PropTypes.bool
  },
  getDefaultProps() {
    return {
      color: '#000000',
      opacity: 0.16
    };
  },
  componentDidMount() {
    if (this.props.show) {
      this._setRippleSize();
      this._pulsate();
    }
  },
  componentDidUpdate() {
    if (this.props.show) {
      this._setRippleSize();
      this._pulsate();
    } else {
      if (this._timeout) clearTimeout(this._timeout);
    }
  },

  render() {

    const {
      show,
      style,
    } = this.props;

    const mergedRootStyles = this.mergeStyles({
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    }, style);

    const ripple = show ? this._getRippleElement(this.props) : null;

    return (
      <ScaleInTransitionGroup
        maxScale={0.85}
        style={mergedRootStyles}>
        {ripple}
      </ScaleInTransitionGroup>
    );
  },

  _getRippleElement(props) {
    const {
      color,
      innerStyle,
      opacity,
    } = props;

    const innerStyles = this.mergeAndPrefix({
      position: 'absolute',
      height: '100%',
      width: '100%',
      borderRadius: '50%',
      opacity: opacity ? opacity : 0.16,
      backgroundColor: color,
      transition: Transitions.easeOut(pulsateDuration + 'ms', 'transform', null, Transitions.easeInOutFunction),
    }, innerStyle);

    return <div ref="innerCircle" style={innerStyles} />;
  },
  _pulsate() {
    if (!this.isMounted()) return;

    let innerCircle = React.findDOMNode(this.refs.innerCircle);
    if (!innerCircle) return;

    const startScale = 'scale(1)';
    const endScale = 'scale(0.85)';
    let currentScale = innerCircle.style[AutoPrefix.single('transform')];
    let nextScale;

    currentScale = currentScale || startScale;
    nextScale = currentScale === startScale ?
      endScale : startScale;

    innerCircle.style[AutoPrefix.single('transform')] = nextScale;
    this._timeout = setTimeout(this._pulsate, pulsateDuration);
  },
  _setRippleSize() {
    let el = React.findDOMNode(this.refs.innerCircle);
    const height = el.offsetHeight;
    const width = el.offsetWidth;
    const size = Math.max(height, width);

    let oldTop = 0;
    // For browsers that don't support endsWith()
    if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
      oldTop = parseInt(el.style.top);
    }
    el.style.height = size + 'px';
    el.style.top = (height / 2) - (size / 2 ) + oldTop + 'px';
  }
});