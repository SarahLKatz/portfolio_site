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
      company = props.company,
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
  }, _react2.default.createElement("span", {
    className: "jsx-1897064141" + " " + "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Created while at"), " ", company), _react2.default.createElement("p", {
    className: "jsx-1897064141" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, description), _react2.default.createElement("p", {
    className: "jsx-1897064141" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement("span", {
    className: "jsx-1897064141" + " " + "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Technologies Used:"), " ", tech), presentation && _react2.default.createElement("a", { href: props.presentation, target: "_blank", className: "jsx-1897064141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Video Presentation")), _react2.default.createElement(_style2.default, {
    styleId: "1897064141",
    css: ".single-project.jsx-1897064141{border:.25vh solid #DDD;padding:1.25vh;}h3.jsx-1897064141{text-align:center;}img.jsx-1897064141{display:block;margin:2vh auto;max-width:300px;max-height:300px;border:.25vh solid #DDD;box-shadow:0.75vh 0.75vh rgba(221,221,221,0.5);}.description.jsx-1897064141{text-align:justify;text-justify:auto;}p.jsx-1897064141{margin:1vh 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvUHJvamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmtCLEFBR21DLEFBSU4sQUFHSixBQVFLLEFBS04sYUFDZixDQWJrQixJQUhsQixDQVdvQixLQWRyQixNQU9tQixPQVFsQixFQWZBLE9BUW1CLGlCQUNPLHdCQUMwQiwrQ0FDcEQiLCJmaWxlIjoiQ29tcG9uZW50cy9Qcm9qZWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYXJhaGthdHovRGVza3RvcC9Bc3NvcnRlZCBDb2RlL3BvcnRmb2xpb19zaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUHJvamVjdCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7bGl2ZSwgdGl0bGUsIGltZywgY29tcGFueSwgZGVzY3JpcHRpb24sIHRlY2gsIHByZXNlbnRhdGlvbn0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtcHJvamVjdFwiPlxuICAgICAgICB7IFxuICAgICAgICAgIGxpdmUgP1xuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj48YSBocmVmPXtsaXZlfSB0YXJnZXQ9XCJfYmxhbmtcIj57dGl0bGV9PC9hPjwvaDM+XG4gICAgICAgICAgOlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj57dGl0bGV9PC9oMz5cbiAgICAgICAgfVxuICAgICAgICB7IGltZyAmJiA8aW1nIHNyYz17aW1nfSAvPiB9XG4gICAgICAgIDxoND48c3BhbiBjbGFzc05hbWU9XCJib2xkXCI+Q3JlYXRlZCB3aGlsZSBhdDwvc3Bhbj4geyBjb21wYW55IH08L2g0PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIHsgZGVzY3JpcHRpb24gfVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYm9sZFwiPlRlY2hub2xvZ2llcyBVc2VkOjwvc3Bhbj4geyB0ZWNoIH1cbiAgICAgICAgPC9wPlxuICAgICAgICB7IHByZXNlbnRhdGlvbiAmJiA8YSBocmVmPXtwcm9wcy5wcmVzZW50YXRpb259IHRhcmdldD1cIl9ibGFua1wiPlZpZGVvIFByZXNlbnRhdGlvbjwvYT4gfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zaW5nbGUtcHJvamVjdCB7XG4gICAgICAgICAgYm9yZGVyOiAuMjV2aCBzb2xpZCAjREREO1xuICAgICAgICAgIHBhZGRpbmc6IDEuMjV2aFxuICAgICAgICB9XG4gICAgICAgIGgzIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDJ2aCBhdXRvO1xuICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICAgICAgYm9yZGVyOiAuMjV2aCBzb2xpZCAjREREO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAuNzV2aCAwLjc1dmggcmdiYSgyMjEsIDIyMSwgMjIxLCAwLjUpO1xuICAgICAgICB9XG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgICB0ZXh0LWp1c3RpZnk6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDF2aCAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiXX0= */\n/*@ sourceURL=Components/Project.js */"
  }));
};

exports.default = Project;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvUHJvamVjdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb2plY3QiLCJwcm9wcyIsImxpdmUiLCJ0aXRsZSIsImltZyIsImNvbXBhbnkiLCJkZXNjcmlwdGlvbiIsInRlY2giLCJwcmVzZW50YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFVBQVUsU0FBVixBQUFVLFFBQUEsQUFBQyxPQUFVO01BQUEsQUFDbEIsT0FEa0IsQUFDNEMsTUFENUMsQUFDbEI7TUFEa0IsQUFDWixRQURZLEFBQzRDLE1BRDVDLEFBQ1o7TUFEWSxBQUNMLE1BREssQUFDNEMsTUFENUMsQUFDTDtNQURLLEFBQ0EsVUFEQSxBQUM0QyxNQUQ1QyxBQUNBO01BREEsQUFDUyxjQURULEFBQzRDLE1BRDVDLEFBQ1M7TUFEVCxBQUNzQixPQUR0QixBQUM0QyxNQUQ1QyxBQUNzQjtNQUR0QixBQUM0QixlQUQ1QixBQUM0QyxNQUQ1QyxBQUM0QixBQUNyRDs7eUJBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUE7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFFSTtBQUZKO0FBQUEsNEJBR0ksY0FBQTt3Q0FBQSxBQUFjOztnQkFBZDtrQkFBQSxBQUEwQjtBQUExQjtBQUFBLEdBQUEsa0JBQTBCLGNBQUEsT0FBRyxNQUFILEFBQVMsTUFBTSxRQUFmLEFBQXNCLHFCQUF0Qjs7Z0JBQUE7a0JBQUEsQUFBZ0M7QUFBaEM7S0FEMUIsQUFDQSxBQUEwQiwwQkFFMUIsY0FBQTt3Q0FBQSxBQUFjOztnQkFBZDtrQkFBQSxBQUEyQjtBQUEzQjtBQUFBLEdBQUEsRUFMSixBQUtJLEFBRUEsc0RBQVksS0FBTCxBQUFVLGdCQUFWOztnQkFBQTtrQkFQWCxBQU9XLEFBQ1Q7QUFEUztHQUFBLG1CQUNULGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEscUJBQUksY0FBQTt3Q0FBQSxBQUFnQjs7Z0JBQWhCO2tCQUFBO0FBQUE7QUFBQSxLQUFKLEFBQUkscUJBQWlELEtBUnZELEFBUUUsQUFDQSwwQkFBQSxjQUFBO3dDQUFBLEFBQWE7O2dCQUFiO2tCQUFBLEFBQ0k7QUFESjtBQUFBLEtBVEYsQUFTRSxBQUdBLDhCQUFBLGNBQUE7d0NBQUEsQUFBYTs7Z0JBQWI7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTt3Q0FBQSxBQUFnQjs7Z0JBQWhCO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsdUJBQW1ELEtBYnZELEFBWUUsQUFHRSx1Q0FBZ0IsY0FBQSxPQUFHLE1BQU0sTUFBVCxBQUFlLGNBQWMsUUFBN0IsQUFBb0MscUJBQXBDOztnQkFBQTtrQkFBQTtBQUFBO0dBQUEsRUFoQnRCLEFBQ0UsQUFlb0I7YUFoQnRCO1NBREYsQUFDRSxBQTZDSDtBQTdDRztBQUhKLEFBa0RBOztrQkFBQSxBQUFlIiwiZmlsZSI6IlByb2plY3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhcmFoa2F0ei9EZXNrdG9wL0Fzc29ydGVkIENvZGUvcG9ydGZvbGlvX3NpdGUifQ==