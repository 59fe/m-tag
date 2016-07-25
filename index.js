'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('./index.less');
var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * tag
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 操作属性: link/selectable/checkable/closable, 属性只能生效一个,按从左到右覆盖
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * defaultSelect/defaultChecked boolean
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * readOnly boolean
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * onChange/onClose function
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var PREFIX = 'tag';

var Tag = function (_React$Component) {
    _inherits(Tag, _React$Component);

    function Tag(props) {
        _classCallCheck(this, Tag);

        // 操作属性, 默认是selectable, 如果有href, 则默认是link

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handler = props.checkable ? 'checkable' : props.closable ? 'closable' : props.href ? 'link' : 'selectable';
        _this.checkable = /selectable|checkable/.test(_this.handler);

        _this.state = {
            // 标签是否被选中,selectable和checkable在交互上是一致的,所以用同一个状态来表示
            checked: _this.checkable && (props.defaultChecked || props.defaultSelected),
            closed: false
        };

        // bind function scope
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleClose = _this.handleClose.bind(_this);
        return _this;
    }

    Tag.prototype.handleClick = function handleClick(e) {

        if (this.props.disabled || this.props.readOnly || !this.checkable) return;

        var _checked = this.state.checked;
        this.setState({ checked: !_checked });

        if (typeof this.props.onChange === 'function') {
            this.props.onChange(!_checked);
        }
    };

    Tag.prototype.handleClose = function handleClose(e) {
        if (this.props.readOnly) return;

        var dom = _reactDom2.default.findDOMNode(this);
        dom.style.width = dom.offsetWidth + 'px';
        // It's Magic Code, don't know why
        dom.style.width = dom.offsetWidth + 'px';

        this.setState({ closed: true });

        if (typeof this.props.onClose === 'function') {
            this.props.onClose(e, this);
        }
    };

    Tag.prototype.render = function render() {
        var _props2 = this.props;
        var className = _props2.className;
        var selectable = _props2.selectable;
        var checkable = _props2.checkable;
        var closable = _props2.closable;
        var children = _props2.children;

        var others = _objectWithoutProperties(_props2, ['className', 'selectable', 'checkable', 'closable', 'children']);

        var clazz = (0, _classnames2.default)(PREFIX, _defineProperty({
            'state-checked': this.state.checked
        }, PREFIX + '-closed', this.state.closed), PREFIX + '-' + this.handler, className);

        return this.handler === 'link' ? _react2.default.createElement(
            'a',
            _extends({ className: clazz }, others),
            children
        ) : this.checkable ? _react2.default.createElement(
            'span',
            _extends({ onClick: this.handleClick, className: clazz }, others),
            children,
            this.handler === 'checkable' ? _react2.default.createElement(
                's',
                { className: 'i-corner' }
                //,_react2.default.createElement(_iconM2.default, { type: 'check-t-f' })
            ) : null
        ) : _react2.default.createElement(
            'span',
            _extends({ className: clazz }, others),
            children,
            this.props.readOnly ? null : _react2.default.createElement(
                'b',
                { className: 'fn-close', onClick: this.handleClose },
                //_react2.default.createElement(_iconM2.default, { type: 'cross' })
                _react2.default.createElement('i', null, String.fromCharCode(215))
            )
        );
    };

    return Tag;
}(_react2.default.Component);

Tag.propTypes = {
    href: _react.PropTypes.string, // 如果有href,则表示链接

    // 操作属性
    checkable: _react.PropTypes.bool,
    closable: _react.PropTypes.bool,

    defaultSelect: _react.PropTypes.bool,
    defaultChecked: _react.PropTypes.bool,

    onChange: _react.PropTypes.func, // 当Tag为closable时无效
    onClose: _react.PropTypes.func // 仅当Tag为closable时有效
};

Tag.defaultProps = {};

/**
 * tag-group
 * 标签组
 * TagGroup中的操作属性(selectable, checkable, closable)会让子Tag强继承
 */

var TagGroup = function (_Component) {
    _inherits(TagGroup, _Component);

    function TagGroup(props) {
        _classCallCheck(this, TagGroup);

        var _this2 = _possibleConstructorReturn(this, _Component.call(this, props));

        var selectable = props.selectable;
        var checkable = props.checkable;
        var closable = props.closable;

        var others = _objectWithoutProperties(props, ['selectable', 'checkable', 'closable']);

        if (~ ~selectable + ~ ~checkable + ~ ~closable > 1) {
            throw new Error('You can use only one of selectable/checkable/closable!');
        }
        return _this2;
    }

    TagGroup.prototype.render = function render() {
        var _props3 = this.props;
        var className = _props3.className;
        var children = _props3.children;

        var others = _objectWithoutProperties(_props3, ['className', 'children']);

        var clazz = (0, _classnames2.default)(className, 'tag-group');

        var _children = [];

        // Tag继承TagGroup的操作属性,并且TagGroup优先级高于Tag
        // 当TagGroup上有操作属性进,Tag上的操作属性全部失效
        if (others.selectable || others.checkable || others.closable) {
            _react2.default.Children.forEach(children, function (child, i) {
                // 非Tag元素直接push
                if (child.type !== Tag) {
                    _children.push(child);
                } else {
                    (function () {
                        var _props = _objectWithoutProperties(child.props, []); // child.props是readonly的


                        ['selectable', 'checkable', 'closable'].forEach(function (n) {
                            _props[n] = others[n];
                        });
                        _children.push(_react2.default.createElement(Tag, _extends({ key: 'tag-' + i }, _props)));
                    })();
                }
            });
        } else {
            _children = children;
        }

        return _react2.default.createElement(
            'div',
            _extends({ className: clazz }, others),
            _children
        );
    };

    return TagGroup;
}(_react.Component);

TagGroup.propTypes = {
    selectable: _react.PropTypes.bool,
    checkable: _react.PropTypes.bool,
    closable: _react.PropTypes.bool
};

Tag.TagGroup = TagGroup;

exports.default = Tag;
module.exports = exports['default'];
