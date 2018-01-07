'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../Components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Project = require('../Components/Project');

var _Project2 = _interopRequireDefault(_Project);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sarahkatz/Desktop/Assorted Code/portfolio_site/pages/group.js?entry';

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-1345851683' + ' ' + 'projects',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-1345851683' + ' ' + 'single-project',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_Project2.default, {
    title: 'Viewtrition',
    img: '/static/projects/viewtrition.jpg',
    presentation: 'https://youtu.be/w72mSp2WKW0',
    date: 'November-December 2017',
    company: 'Fullstack Academy',
    team: 'Gabriel DeFazio, Lucy Sutton, \u0141ukasz Kapica, Sarah Katz',
    description: 'This iOS app, built as a capstone project while at Fullstack Academy, allows users to take a picture of food, and, after confirming the contents of the picture, returns nutritional information about the meal in easy-to-understand charts. Users can also view historical meal data. My part in this project included building the camera (using Expo\'s camera module), creating a user settings page (which includes interactions with Firebase Auth and the Firestore database), styling the food selection page, and working on the nutritional charts for micronutrients (using Victory Charts).',
    live: 'https://expo.io/@kapicaluk/viewtrition',
    tech: 'React Native, Redux, React-Redux, Firebase Auth, Cloud Firestore, Expo, Victory Charts, Clarifai API, Nutritionix API', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  })), _react2.default.createElement('div', {
    className: 'jsx-1345851683' + ' ' + 'single-project',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(_Project2.default, {
    title: 'Snape\'s Potion Emporium',
    img: '/static/projects/snapespotions.jpg',
    date: 'October-November 2017',
    company: 'Fullstack Academy',
    team: 'Nicole Chu, Pat Petillo, Sarah Katz, Tim Han',
    description: 'An ecommerce site, our first group project at Fullstack Academy, that sells potions. The app allows users to log in, add potions to their cart, purchase the potions, and view an invoice. My part in this project included building backend API routes, building several frontend components (including invoice), creating the logo (using Adobe Illustrator), and creating styles for the app using SCSS.',
    live: 'http://gotsnaped.herokuapp.com/',
    tech: 'Node.js, Express, React, React-Redux, PostgreSQL, Sequelize, Heroku', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }))), _react2.default.createElement(_style2.default, {
    styleId: '1345851683',
    css: '.projects.jsx-1345851683{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.single-project.jsx-1345851683{-webkit-flex:0.3;-ms-flex:0.3;flex:0.3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2dyb3VwLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCa0IsQUFHd0IsQUFNSix1Q0FDWCxtQ0FOaUIseURBQ2MsMkhBQy9CIiwiZmlsZSI6InBhZ2VzL2dyb3VwLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYXJhaGthdHovRGVza3RvcC9Bc3NvcnRlZCBDb2RlL3BvcnRmb2xpb19zaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9Db21wb25lbnRzL0xheW91dCdcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4uL0NvbXBvbmVudHMvUHJvamVjdCdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLXByb2plY3RcIj5cbiAgICAgICAgICA8UHJvamVjdCBcbiAgICAgICAgICAgIHRpdGxlPVwiVmlld3RyaXRpb25cIiBcbiAgICAgICAgICAgIGltZz1cIi9zdGF0aWMvcHJvamVjdHMvdmlld3RyaXRpb24uanBnXCIgXG4gICAgICAgICAgICBwcmVzZW50YXRpb249XCJodHRwczovL3lvdXR1LmJlL3c3Mm1TcDJXS1cwXCJcbiAgICAgICAgICAgIGRhdGU9XCJOb3ZlbWJlci1EZWNlbWJlciAyMDE3XCJcbiAgICAgICAgICAgIGNvbXBhbnk9XCJGdWxsc3RhY2sgQWNhZGVteVwiIFxuICAgICAgICAgICAgdGVhbT1cIkdhYnJpZWwgRGVGYXppbywgTHVjeSBTdXR0b24sIMWBdWthc3ogS2FwaWNhLCBTYXJhaCBLYXR6XCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhpcyBpT1MgYXBwLCBidWlsdCBhcyBhIGNhcHN0b25lIHByb2plY3Qgd2hpbGUgYXQgRnVsbHN0YWNrIEFjYWRlbXksIGFsbG93cyB1c2VycyB0byB0YWtlIGEgcGljdHVyZSBvZiBmb29kLCBhbmQsIGFmdGVyIGNvbmZpcm1pbmcgdGhlIGNvbnRlbnRzIG9mIHRoZSBwaWN0dXJlLCByZXR1cm5zIG51dHJpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBtZWFsIGluIGVhc3ktdG8tdW5kZXJzdGFuZCBjaGFydHMuIFVzZXJzIGNhbiBhbHNvIHZpZXcgaGlzdG9yaWNhbCBtZWFsIGRhdGEuIE15IHBhcnQgaW4gdGhpcyBwcm9qZWN0IGluY2x1ZGVkIGJ1aWxkaW5nIHRoZSBjYW1lcmEgKHVzaW5nIEV4cG8ncyBjYW1lcmEgbW9kdWxlKSwgY3JlYXRpbmcgYSB1c2VyIHNldHRpbmdzIHBhZ2UgKHdoaWNoIGluY2x1ZGVzIGludGVyYWN0aW9ucyB3aXRoIEZpcmViYXNlIEF1dGggYW5kIHRoZSBGaXJlc3RvcmUgZGF0YWJhc2UpLCBzdHlsaW5nIHRoZSBmb29kIHNlbGVjdGlvbiBwYWdlLCBhbmQgd29ya2luZyBvbiB0aGUgbnV0cml0aW9uYWwgY2hhcnRzIGZvciBtaWNyb251dHJpZW50cyAodXNpbmcgVmljdG9yeSBDaGFydHMpLlwiXG4gICAgICAgICAgICBsaXZlPVwiaHR0cHM6Ly9leHBvLmlvL0BrYXBpY2FsdWsvdmlld3RyaXRpb25cIlxuICAgICAgICAgICAgdGVjaD1cIlJlYWN0IE5hdGl2ZSwgUmVkdXgsIFJlYWN0LVJlZHV4LCBGaXJlYmFzZSBBdXRoLCBDbG91ZCBGaXJlc3RvcmUsIEV4cG8sIFZpY3RvcnkgQ2hhcnRzLCBDbGFyaWZhaSBBUEksIE51dHJpdGlvbml4IEFQSVwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLXByb2plY3RcIj5cbiAgICAgICAgICA8UHJvamVjdCBcbiAgICAgICAgICAgIHRpdGxlPVwiU25hcGUncyBQb3Rpb24gRW1wb3JpdW1cIiBcbiAgICAgICAgICAgIGltZz1cIi9zdGF0aWMvcHJvamVjdHMvc25hcGVzcG90aW9ucy5qcGdcIiBcbiAgICAgICAgICAgIGRhdGU9XCJPY3RvYmVyLU5vdmVtYmVyIDIwMTdcIlxuICAgICAgICAgICAgY29tcGFueT1cIkZ1bGxzdGFjayBBY2FkZW15XCIgXG4gICAgICAgICAgICB0ZWFtPVwiTmljb2xlIENodSwgUGF0IFBldGlsbG8sIFNhcmFoIEthdHosIFRpbSBIYW5cIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJBbiBlY29tbWVyY2Ugc2l0ZSwgb3VyIGZpcnN0IGdyb3VwIHByb2plY3QgYXQgRnVsbHN0YWNrIEFjYWRlbXksIHRoYXQgc2VsbHMgcG90aW9ucy4gVGhlIGFwcCBhbGxvd3MgdXNlcnMgdG8gbG9nIGluLCBhZGQgcG90aW9ucyB0byB0aGVpciBjYXJ0LCBwdXJjaGFzZSB0aGUgcG90aW9ucywgYW5kIHZpZXcgYW4gaW52b2ljZS4gTXkgcGFydCBpbiB0aGlzIHByb2plY3QgaW5jbHVkZWQgYnVpbGRpbmcgYmFja2VuZCBBUEkgcm91dGVzLCBidWlsZGluZyBzZXZlcmFsIGZyb250ZW5kIGNvbXBvbmVudHMgKGluY2x1ZGluZyBpbnZvaWNlKSwgY3JlYXRpbmcgdGhlIGxvZ28gKHVzaW5nIEFkb2JlIElsbHVzdHJhdG9yKSwgYW5kIGNyZWF0aW5nIHN0eWxlcyBmb3IgdGhlIGFwcCB1c2luZyBTQ1NTLlwiXG4gICAgICAgICAgICBsaXZlPVwiaHR0cDovL2dvdHNuYXBlZC5oZXJva3VhcHAuY29tL1wiXG4gICAgICAgICAgICB0ZWNoPVwiTm9kZS5qcywgRXhwcmVzcywgUmVhY3QsIFJlYWN0LVJlZHV4LCBQb3N0Z3JlU1FMLCBTZXF1ZWxpemUsIEhlcm9rdVwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnByb2plY3RzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaW5nbGUtcHJvamVjdCB7XG4gICAgICAgICAgZmxleDogMC4zO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn0iXX0= */\n/*@ sourceURL=pages/group.js?entry */'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2dyb3VwLmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIlByb2plY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYSxBQUVwQjs7Ozs7Ozs7a0JBQWUsWUFBTSxBQUNuQjt5QkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUE7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTt3Q0FBQSxBQUFlOztnQkFBZjtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDO1dBQUQsQUFDUSxBQUNOO1NBRkYsQUFFTSxBQUNKO2tCQUhGLEFBR2UsQUFDYjtVQUpGLEFBSU8sQUFDTDthQUxGLEFBS1UsQUFDUjtVQU5GLEFBTU8sQUFDTDtpQkFQRixBQU9jLEFBQ1o7VUFSRixBQVFPLEFBQ0w7VUFURixBQVNPO2dCQVRQO2tCQUZKLEFBQ0UsQUFDRSxBQVdGO0FBWEU7QUFDRSx1QkFVSixjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUM7V0FBRCxBQUNRLEFBQ047U0FGRixBQUVNLEFBQ0o7VUFIRixBQUdPLEFBQ0w7YUFKRixBQUlVLEFBQ1I7VUFMRixBQUtPLEFBQ0w7aUJBTkYsQUFNYyxBQUNaO1VBUEYsQUFPTyxBQUNMO1VBUkYsQUFRTztnQkFSUDtrQkFmTixBQUNFLEFBYUUsQUFDRTtBQUFBO0FBQ0U7YUFoQlI7U0FERixBQUNFLEFBdUNIO0FBdkNHO0FBRkoiLCJmaWxlIjoiZ3JvdXAuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhcmFoa2F0ei9EZXNrdG9wL0Fzc29ydGVkIENvZGUvcG9ydGZvbGlvX3NpdGUifQ==