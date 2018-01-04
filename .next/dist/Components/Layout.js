'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sarahkatz/Desktop/Assorted Code/portfolio_site/Components/Layout.js';


var Layout = function Layout(props) {
  return _react2.default.createElement('div', {
    className: 'jsx-4261238433',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('title', {
    className: 'jsx-4261238433',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'Sarah L Katz'), _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-4261238433',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-4261238433',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  })), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('div', {
    className: 'jsx-4261238433' + ' ' + 'content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, props.children), _react2.default.createElement(_style2.default, {
    styleId: '4261238433',
    css: '@import url(\'https://fonts.googleapis.com/css?family=Lato:400,700\');*{box-sizing:border-box;font-family:\'Lato\',sans-serif;}img{max-width:100%;}.content{background-color:rgba(8,107,129,0.1);min-height:93vh;padding:3vh 2vh 0 2vh;}h1,h2,h3,h4,h5,p{margin:0;}.highlight{color:rgb(129,8,107);}.bold{font-weight:700;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCeUIsQUFFNEUsQUFHM0MsQUFNekIsQUFHMkMsQUFNL0IsQUFJYyxBQUlQLFNBUGxCLE1BVkEsQ0FrQkEsS0FKQSxDQW5CaUMsZUFTZixlQVJsQixDQVN3QixzQkFDeEIiLCJmaWxlIjoiQ29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhcmFoa2F0ei9EZXNrdG9wL0Fzc29ydGVkIENvZGUvcG9ydGZvbGlvX3NpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2FyYWggTCBLYXR6PC90aXRsZT5cbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLDcwMCcpO1xuXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlXG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCAxMDcsIDEyOSwgMC4xKTtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA5M3ZoO1xuICAgICAgICAgIHBhZGRpbmc6IDN2aCAydmggMCAydmg7XG4gICAgICAgIH1cblxuICAgICAgICBoMSwgaDIsIGgzLCBoNCwgaDUsIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oaWdobGlnaHQge1xuICAgICAgICAgIGNvbG9yOiByZ2IoMTI5LCA4LCAxMDcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJvbGQge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il19 */\n/*@ sourceURL=Components/Layout.js */'
  }));
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZGVyIiwiSGVhZCIsIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sU0FBUyxTQUFULEFBQVMsT0FBQSxBQUFDLE9BQVUsQUFDeEI7eUJBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLHlEQUFNLFNBQU4sQUFBYyxvQkFBZDs7Z0JBQUE7a0JBRkYsQUFFRSxBQUNBO0FBREE7OENBQ00sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEIsb0RBQTlCOztnQkFBQTtrQkFKSixBQUNFLEFBR0UsQUFFRjtBQUZFO3VCQUVGLEFBQUM7O2dCQUFEO2tCQU5GLEFBTUUsQUFDQTtBQURBO0FBQUEsc0JBQ0EsY0FBQTt3Q0FBQSxBQUFlOztnQkFBZjtrQkFBQSxBQUNJO0FBREo7QUFBQSxXQVBGLEFBT0UsQUFDVTthQVJaO1NBREYsQUFDRSxBQTBDSDtBQTFDRztBQUZKLEFBOENBOztrQkFBQSxBQUFlIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2FyYWhrYXR6L0Rlc2t0b3AvQXNzb3J0ZWQgQ29kZS9wb3J0Zm9saW9fc2l0ZSJ9