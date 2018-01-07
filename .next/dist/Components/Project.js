"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/sarahkatz/Desktop/Assorted Code/portfolio_site/Components/Project.js";


var Project = function Project(props) {
  var live = props.live,
      title = props.title,
      img = props.img,
      date = props.date,
      company = props.company,
      team = props.team,
      description = props.description,
      tech = props.tech,
      presentation = props.presentation;

  return _react2.default.createElement("div", {
    className: "jsx-1897064141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement("div", {
    className: "jsx-1897064141" + " " + "single-project",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, live ? _react2.default.createElement("h3", {
    className: "jsx-1897064141" + " " + "highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement("a", { href: live, target: "_blank", className: "jsx-1897064141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, title)) : _react2.default.createElement("h3", {
    className: "jsx-1897064141" + " " + "highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, title), img && _react2.default.createElement("img", { src: img, className: "jsx-1897064141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement("h4", {
    className: "jsx-1897064141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, date), _react2.default.createElement("h4", {
    className: "jsx-1897064141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement("span", {
    className: "jsx-1897064141" + " " + "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Created while at"), " ", company), team && _react2.default.createElement("h4", {
    className: "jsx-1897064141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "Team Members: ", team), _react2.default.createElement("p", {
    className: "jsx-1897064141" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, description), _react2.default.createElement("p", {
    className: "jsx-1897064141" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement("span", {
    className: "jsx-1897064141" + " " + "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Technologies Used:"), " ", tech), presentation && _react2.default.createElement("a", { href: props.presentation, target: "_blank", className: "jsx-1897064141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "Video Presentation")), _react2.default.createElement(_style2.default, {
    styleId: "1897064141",
    css: ".single-project.jsx-1897064141{border:.25vh solid #DDD;padding:1.25vh;}h3.jsx-1897064141{text-align:center;}img.jsx-1897064141{display:block;margin:2vh auto;max-width:300px;max-height:300px;border:.25vh solid #DDD;box-shadow:0.75vh 0.75vh rgba(221,221,221,0.5);}.description.jsx-1897064141{text-align:justify;text-justify:auto;}p.jsx-1897064141{margin:1vh 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvUHJvamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmtCLEFBR21DLEFBSU4sQUFHSixBQVFLLEFBS04sYUFDZixDQWJrQixJQUhsQixDQVdvQixLQWRyQixNQU9tQixPQVFsQixFQWZBLE9BUW1CLGlCQUNPLHdCQUMwQiwrQ0FDcEQiLCJmaWxlIjoiQ29tcG9uZW50cy9Qcm9qZWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYXJhaGthdHovRGVza3RvcC9Bc3NvcnRlZCBDb2RlL3BvcnRmb2xpb19zaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUHJvamVjdCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7bGl2ZSwgdGl0bGUsIGltZywgZGF0ZSwgY29tcGFueSwgdGVhbSwgZGVzY3JpcHRpb24sIHRlY2gsIHByZXNlbnRhdGlvbn0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtcHJvamVjdFwiPlxuICAgICAgICB7IFxuICAgICAgICAgIGxpdmUgP1xuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj48YSBocmVmPXtsaXZlfSB0YXJnZXQ9XCJfYmxhbmtcIj57dGl0bGV9PC9hPjwvaDM+XG4gICAgICAgICAgOlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj57dGl0bGV9PC9oMz5cbiAgICAgICAgfVxuICAgICAgICB7IGltZyAmJiA8aW1nIHNyYz17aW1nfSAvPiB9XG4gICAgICAgIDxoND57IGRhdGUgfTwvaDQ+XG4gICAgICAgIDxoND48c3BhbiBjbGFzc05hbWU9XCJib2xkXCI+Q3JlYXRlZCB3aGlsZSBhdDwvc3Bhbj4geyBjb21wYW55IH08L2g0PlxuICAgICAgICB7IHRlYW0gJiYgPGg0PlRlYW0gTWVtYmVyczogeyB0ZWFtIH08L2g0PiB9XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgeyBkZXNjcmlwdGlvbiB9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJib2xkXCI+VGVjaG5vbG9naWVzIFVzZWQ6PC9zcGFuPiB7IHRlY2ggfVxuICAgICAgICA8L3A+XG4gICAgICAgIHsgcHJlc2VudGF0aW9uICYmIDxhIGhyZWY9e3Byb3BzLnByZXNlbnRhdGlvbn0gdGFyZ2V0PVwiX2JsYW5rXCI+VmlkZW8gUHJlc2VudGF0aW9uPC9hPiB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnNpbmdsZS1wcm9qZWN0IHtcbiAgICAgICAgICBib3JkZXI6IC4yNXZoIHNvbGlkICNEREQ7XG4gICAgICAgICAgcGFkZGluZzogMS4yNXZoXG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMnZoIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICBib3JkZXI6IC4yNXZoIHNvbGlkICNEREQ7XG4gICAgICAgICAgYm94LXNoYWRvdzogMC43NXZoIDAuNzV2aCByZ2JhKDIyMSwgMjIxLCAyMjEsIDAuNSk7XG4gICAgICAgIH1cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICAgIHRleHQtanVzdGlmeTogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbjogMXZoIDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyJdfQ== */\n/*@ sourceURL=Components/Project.js */"
  }));
};

exports.default = Project;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvUHJvamVjdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb2plY3QiLCJwcm9wcyIsImxpdmUiLCJ0aXRsZSIsImltZyIsImRhdGUiLCJjb21wYW55IiwidGVhbSIsImRlc2NyaXB0aW9uIiwidGVjaCIsInByZXNlbnRhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sVUFBVSxTQUFWLEFBQVUsUUFBQSxBQUFDLE9BQVU7TUFBQSxBQUNsQixPQURrQixBQUN3RCxNQUR4RCxBQUNsQjtNQURrQixBQUNaLFFBRFksQUFDd0QsTUFEeEQsQUFDWjtNQURZLEFBQ0wsTUFESyxBQUN3RCxNQUR4RCxBQUNMO01BREssQUFDQSxPQURBLEFBQ3dELE1BRHhELEFBQ0E7TUFEQSxBQUNNLFVBRE4sQUFDd0QsTUFEeEQsQUFDTTtNQUROLEFBQ2UsT0FEZixBQUN3RCxNQUR4RCxBQUNlO01BRGYsQUFDcUIsY0FEckIsQUFDd0QsTUFEeEQsQUFDcUI7TUFEckIsQUFDa0MsT0FEbEMsQUFDd0QsTUFEeEQsQUFDa0M7TUFEbEMsQUFDd0MsZUFEeEMsQUFDd0QsTUFEeEQsQUFDd0MsQUFDakU7O3lCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBRUk7QUFGSjtBQUFBLDRCQUdJLGNBQUE7d0NBQUEsQUFBYzs7Z0JBQWQ7a0JBQUEsQUFBMEI7QUFBMUI7QUFBQSxHQUFBLGtCQUEwQixjQUFBLE9BQUcsTUFBSCxBQUFTLE1BQU0sUUFBZixBQUFzQixxQkFBdEI7O2dCQUFBO2tCQUFBLEFBQWdDO0FBQWhDO0tBRDFCLEFBQ0EsQUFBMEIsMEJBRTFCLGNBQUE7d0NBQUEsQUFBYzs7Z0JBQWQ7a0JBQUEsQUFBMkI7QUFBM0I7QUFBQSxHQUFBLEVBTEosQUFLSSxBQUVBLHNEQUFZLEtBQUwsQUFBVSxnQkFBVjs7Z0JBQUE7a0JBUFgsQUFPVyxBQUNUO0FBRFM7R0FBQSxtQkFDVCxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQU07QUFBTjtBQUFBLEtBUkYsQUFRRSxBQUNBLHVCQUFBLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEscUJBQUksY0FBQTt3Q0FBQSxBQUFnQjs7Z0JBQWhCO2tCQUFBO0FBQUE7QUFBQSxLQUFKLEFBQUkscUJBQWlELEtBVHZELEFBU0UsQUFDRSxrQ0FBUSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxHQUFBLEVBQW9CLGtCQVZoQyxBQVVZLEFBQ1YsdUJBQUEsY0FBQTt3Q0FBQSxBQUFhOztnQkFBYjtrQkFBQSxBQUNJO0FBREo7QUFBQSxLQVhGLEFBV0UsQUFHQSw4QkFBQSxjQUFBO3dDQUFBLEFBQWE7O2dCQUFiO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7d0NBQUEsQUFBZ0I7O2dCQUFoQjtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLHVCQUFtRCxLQWZ2RCxBQWNFLEFBR0UsdUNBQWdCLGNBQUEsT0FBRyxNQUFNLE1BQVQsQUFBZSxjQUFjLFFBQTdCLEFBQW9DLHFCQUFwQzs7Z0JBQUE7a0JBQUE7QUFBQTtHQUFBLEVBbEJ0QixBQUNFLEFBaUJvQjthQWxCdEI7U0FERixBQUNFLEFBK0NIO0FBL0NHO0FBSEosQUFvREE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2FyYWhrYXR6L0Rlc2t0b3AvQXNzb3J0ZWQgQ29kZS9wb3J0Zm9saW9fc2l0ZSJ9