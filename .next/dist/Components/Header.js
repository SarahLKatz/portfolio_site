'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sarahkatz/Desktop/Assorted Code/portfolio_site/Components/Header.js';


var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);

    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-3279967330' + ' ' + 'header',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement('a', {
        className: 'jsx-3279967330',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, 'Home')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement('a', {
        className: 'jsx-3279967330',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, 'About')), _react2.default.createElement(_link2.default, { href: '/solo', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement('a', {
        className: 'jsx-3279967330',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, 'Solo Projects')), _react2.default.createElement(_link2.default, { href: '/group', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('a', {
        className: 'jsx-3279967330',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, 'Group Projects')), _react2.default.createElement(_link2.default, { href: '/blog', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('a', {
        className: 'jsx-3279967330',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, 'Life As A Coder')), _react2.default.createElement(_link2.default, { href: '/sarah', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('a', {
        className: 'jsx-3279967330',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, 'Life Outside Coding')), _react2.default.createElement(_style2.default, {
        styleId: '3279967330',
        css: '.header.jsx-3279967330{height:7vh;background-color:rgba(109,131,8,0.5);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}a.jsx-3279967330{text-decoration:none;margin-right:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFvQixBQUd3QixBQVFVLFdBUG1CLFVBUzNDLGlCQUFDLFVBUmUsMEVBQ00sNkZBQ1UsMkhBQy9CIiwiZmlsZSI6IkNvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYXJhaGthdHovRGVza3RvcC9Bc3NvcnRlZCBDb2RlL3BvcnRmb2xpb19zaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+SG9tZTwvYT48L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj48YT5BYm91dDwvYT48L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc29sb1wiPjxhPlNvbG8gUHJvamVjdHM8L2E+PC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2dyb3VwXCI+PGE+R3JvdXAgUHJvamVjdHM8L2E+PC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj48YT5MaWZlIEFzIEEgQ29kZXI8L2E+PC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3NhcmFoXCI+PGE+TGlmZSBPdXRzaWRlIENvZGluZzwvYT48L0xpbms+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogN3ZoO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDksIDEzMSwgOCwgMC41KTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=Components/Header.js */'
      }));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGluayIsIkhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7Ozs7OztJLEFBRWM7Ozs7Ozs7Ozs7OzZCQUNULEFBQ1I7NkJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFXO29CQUFYO3NCQUFBLEFBQWU7QUFBZjt5QkFBZSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FEakIsQUFDRSxBQUFlLEFBQ2YsMEJBQUEsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBQUEsQUFBb0I7QUFBcEI7eUJBQW9CLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZ0QixBQUVFLEFBQW9CLEFBQ3BCLDJCQUFBLEFBQUMsZ0NBQUssTUFBTixBQUFXO29CQUFYO3NCQUFBLEFBQW1CO0FBQW5CO3lCQUFtQixjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FIckIsQUFHRSxBQUFtQixBQUNuQixtQ0FBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUFvQjtBQUFwQjt5QkFBb0IsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSnRCLEFBSUUsQUFBb0IsQUFDcEIsb0NBQUEsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBQUEsQUFBbUI7QUFBbkI7eUJBQW1CLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUxyQixBQUtFLEFBQW1CLEFBQ25CLHFDQUFBLEFBQUMsZ0NBQUssTUFBTixBQUFXO29CQUFYO3NCQUFBLEFBQW9CO0FBQXBCO3lCQUFvQixjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FOdEIsQUFNRSxBQUFvQjtpQkFOdEI7YUFERixBQUNFLEFBdUJIO0FBdkJHOzs7OztBQUg4QixBOztrQkFBZixBIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2FyYWhrYXR6L0Rlc2t0b3AvQXNzb3J0ZWQgQ29kZS9wb3J0Zm9saW9fc2l0ZSJ9