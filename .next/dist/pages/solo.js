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

var _jsxFileName = '/Users/sarahkatz/Desktop/Assorted Code/portfolio_site/pages/solo.js?entry';

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
    title: 'Pics or You Didn\'t Medal',
    img: '/static/projects/racemedalpics.jpg',
    presentation: 'https://youtu.be/9ECIo97spzI',
    company: 'Fullstack Academy',
    description: 'This app, built for a five-day hackathon, allows users to input a race, date and location, and when they log in after the race, they will be shown some pictures taken nearby that can serve as inspiration for their post-race medal pictures. Users can also connect a Strava account and pull their latest workout data to receive photo inspiration. It features a front end and store state built with React-Redux, a backend built with Node.js and Express, and a PostgreSQL database to store user and race information.',
    live: 'http://racemedalpics.herokuapp.com',
    tech: 'React, Redux, React-Redux, Flickr API, Nominatim API, Strava API, Passport, OAuth', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }))), _react2.default.createElement(_style2.default, {
    styleId: '1345851683',
    css: '.projects.jsx-1345851683{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.single-project.jsx-1345851683{-webkit-flex:0.3;-ms-flex:0.3;flex:0.3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NvbG8uanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JrQixBQUd3QixBQU1KLHVDQUNYLG1DQU5pQix5REFDYywySEFDL0IiLCJmaWxlIjoicGFnZXMvc29sby5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2FyYWhrYXR6L0Rlc2t0b3AvQXNzb3J0ZWQgQ29kZS9wb3J0Zm9saW9fc2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vQ29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuLi9Db21wb25lbnRzL1Byb2plY3QnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1wcm9qZWN0XCI+XG4gICAgICAgICAgPFByb2plY3QgXG4gICAgICAgICAgICB0aXRsZT1cIlBpY3Mgb3IgWW91IERpZG4ndCBNZWRhbFwiIFxuICAgICAgICAgICAgaW1nPVwiL3N0YXRpYy9wcm9qZWN0cy9yYWNlbWVkYWxwaWNzLmpwZ1wiIFxuICAgICAgICAgICAgcHJlc2VudGF0aW9uPVwiaHR0cHM6Ly95b3V0dS5iZS85RUNJbzk3c3B6SVwiXG4gICAgICAgICAgICBjb21wYW55PVwiRnVsbHN0YWNrIEFjYWRlbXlcIiBcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhpcyBhcHAsIGJ1aWx0IGZvciBhIGZpdmUtZGF5IGhhY2thdGhvbiwgYWxsb3dzIHVzZXJzIHRvIGlucHV0IGEgcmFjZSwgZGF0ZSBhbmQgbG9jYXRpb24sIGFuZCB3aGVuIHRoZXkgbG9nIGluIGFmdGVyIHRoZSByYWNlLCB0aGV5IHdpbGwgYmUgc2hvd24gc29tZSBwaWN0dXJlcyB0YWtlbiBuZWFyYnkgdGhhdCBjYW4gc2VydmUgYXMgaW5zcGlyYXRpb24gZm9yIHRoZWlyIHBvc3QtcmFjZSBtZWRhbCBwaWN0dXJlcy4gVXNlcnMgY2FuIGFsc28gY29ubmVjdCBhIFN0cmF2YSBhY2NvdW50IGFuZCBwdWxsIHRoZWlyIGxhdGVzdCB3b3Jrb3V0IGRhdGEgdG8gcmVjZWl2ZSBwaG90byBpbnNwaXJhdGlvbi4gSXQgZmVhdHVyZXMgYSBmcm9udCBlbmQgYW5kIHN0b3JlIHN0YXRlIGJ1aWx0IHdpdGggUmVhY3QtUmVkdXgsIGEgYmFja2VuZCBidWlsdCB3aXRoIE5vZGUuanMgYW5kIEV4cHJlc3MsIGFuZCBhIFBvc3RncmVTUUwgZGF0YWJhc2UgdG8gc3RvcmUgdXNlciBhbmQgcmFjZSBpbmZvcm1hdGlvbi5cIlxuICAgICAgICAgICAgbGl2ZT1cImh0dHA6Ly9yYWNlbWVkYWxwaWNzLmhlcm9rdWFwcC5jb21cIlxuICAgICAgICAgICAgdGVjaD1cIlJlYWN0LCBSZWR1eCwgUmVhY3QtUmVkdXgsIEZsaWNrciBBUEksIE5vbWluYXRpbSBBUEksIFN0cmF2YSBBUEksIFBhc3Nwb3J0LCBPQXV0aFwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnByb2plY3RzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaW5nbGUtcHJvamVjdCB7XG4gICAgICAgICAgZmxleDogMC4zO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn0iXX0= */\n/*@ sourceURL=pages/solo.js?entry */'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NvbG8uanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiUHJvamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhLEFBRXBCOzs7Ozs7OztrQkFBZSxZQUFNLEFBQ25CO3lCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQTt3Q0FBQSxBQUFlOztnQkFBZjtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUM7V0FBRCxBQUNRLEFBQ047U0FGRixBQUVNLEFBQ0o7a0JBSEYsQUFHZSxBQUNiO2FBSkYsQUFJVSxBQUNSO2lCQUxGLEFBS2MsQUFDWjtVQU5GLEFBTU8sQUFDTDtVQVBGLEFBT087Z0JBUFA7a0JBSE4sQUFDRSxBQUNFLEFBQ0U7QUFBQTtBQUNFO2FBSlI7U0FERixBQUNFLEFBMEJIO0FBMUJHO0FBRkoiLCJmaWxlIjoic29sby5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2FyYWhrYXR6L0Rlc2t0b3AvQXNzb3J0ZWQgQ29kZS9wb3J0Zm9saW9fc2l0ZSJ9