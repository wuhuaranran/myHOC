webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/WithSubscription/index.js":
/*!**********************************************!*\
  !*** ./components/WithSubscription/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataSource */ "./components/DataSource.js");
var _jsxFileName = "D:\\ZX\\code\\myHOC\\components\\WithSubscription\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var withSubscription = function withSubscription(WrappedComponent, selectData) {
  // ……返回另一个新组件……
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(_class2, _React$Component);

      function _class2(props) {
        var _this;

        _classCallCheck(this, _class2);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class2).call(this, props));

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeblog", function () {
          console.log('changeblog');

          _this.setState({
            data: 'blog changed'
          });
        });

        _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
        _this.state = {
          data: selectData(_DataSource__WEBPACK_IMPORTED_MODULE_1__["default"], props),
          changeblog: _this.changeblog
        };
        return _this;
      }

      _createClass(_class2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          // ……注意订阅数据……
          _DataSource__WEBPACK_IMPORTED_MODULE_1__["default"].addChangeListener(this.handleChange);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          _DataSource__WEBPACK_IMPORTED_MODULE_1__["default"].removeChangeListener(this.handleChange);
        }
      }, {
        key: "handleChange",
        value: function handleChange() {
          this.setState({
            data: selectData(_DataSource__WEBPACK_IMPORTED_MODULE_1__["default"], this.props)
          });
        }
      }, {
        key: "render",
        value: function render() {
          // ……使用最新的数据渲染组件
          // 注意此处将已有的props属性传递给原组件
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({
            data: this.state.data
          }, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          }));
        }
      }]);

      return _class2;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)
  );
};

/* harmony default export */ __webpack_exports__["default"] = (withSubscription);

/***/ })

})
//# sourceMappingURL=index.js.3377a42d83cd6789dcb1.hot-update.js.map