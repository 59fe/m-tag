'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropTypes = require('prop-types');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * tag-group
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 标签组
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * TagGroup中的操作属性(selectable, checkable, closable)会让子Tag强继承
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var TagGroup = function (_Component) {
    _inherits(TagGroup, _Component);

    function TagGroup(props) {
        _classCallCheck(this, TagGroup);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TagGroup).call(this, props));

        var selectable = props.selectable;
        var checkable = props.checkable;
        var closable = props.closable;

        var others = _objectWithoutProperties(props, ['selectable', 'checkable', 'closable']);

        if (~ ~selectable + ~ ~checkable + ~ ~closable > 1) {
            throw new Error('You can use only one of selectable/checkable/closable!');
        }
        return _this;
    }

    _createClass(TagGroup, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var className = _props2.className;
            var children = _props2.children;

            var others = _objectWithoutProperties(_props2, ['className', 'children']);

            var clazz = (0, _classnames2.default)(className, 'tag-group');

            var _children = [];

            // Tag继承TagGroup的操作属性,并且TagGroup优先级高于Tag
            // 当TagGroup上有操作属性进,Tag上的操作属性全部失效
            if (others.selectable || others.checkable || others.closable) {
                _react2.default.Children.forEach(children, function (child, i) {
                    // 非Tag元素直接push
                    if (child.type !== _index2.default) {
                        _children.push(child);
                    } else {
                        (function () {
                            var _props = _objectWithoutProperties(child.props, []); // child.props是readonly的


                            ['selectable', 'checkable', 'closable'].forEach(function (n) {
                                _props[n] = others[n];
                            });
                            _children.push(_react2.default.createElement(_index2.default, _extends({ key: 'tag-' + i }, _props)));
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
        }
    }]);

    return TagGroup;
}(_react.Component);

TagGroup.propTypes = {
    selectable: _PropTypes2.default.bool,
    checkable:  _PropTypes2.default.bool,
    closable:   _PropTypes2.default.bool
};

exports.default = TagGroup;
module.exports = exports['default'];
