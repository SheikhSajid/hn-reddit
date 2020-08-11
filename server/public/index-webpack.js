/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components_Post_FullPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Post/FullPost */ \"./src/Components/Post/FullPost.js\");\n/* harmony import */ var _utils_getTopPosts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/getTopPosts */ \"./src/utils/getTopPosts.js\");\n/* harmony import */ var _Components_PostsList_PostList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/PostsList/PostList */ \"./src/Components/PostsList/PostList.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n // import './App.css';\n\n\n\n\nfunction App(_ref) {\n  var topPostsFromServer = _ref.topPostsFromServer;\n\n  var _useTopPosts = Object(_utils_getTopPosts__WEBPACK_IMPORTED_MODULE_2__[\"useTopPosts\"])(30),\n      _useTopPosts2 = _slicedToArray(_useTopPosts, 3),\n      posts = _useTopPosts2[0],\n      loading = _useTopPosts2[1],\n      fetchPosts = _useTopPosts2[2];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      displayedPost = _useState2[0],\n      setDisplayedPost = _useState2[1];\n\n  var clearDisplayedPost = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    setDisplayedPost(null);\n  }, [setDisplayedPost]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"App\"\n  }, !displayedPost && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_PostsList_PostList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    posts: topPostsFromServer || posts,\n    fetchPosts: fetchPosts,\n    setDisplayedPost: setDisplayedPost\n  }), displayedPost && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Post_FullPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    post: displayedPost,\n    clearDisplayedPost: clearDisplayedPost\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Components/Post/Comment.js":
/*!****************************************!*\
  !*** ./src/Components/Post/Comment.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/formatDistanceToNow */ \"date-fns/formatDistanceToNow\");\n/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comments */ \"./src/Components/Post/Comments.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var comment = _ref.comment;\n  var created_at = comment.created_at,\n      author = comment.author,\n      text = comment.text,\n      children = comment.children;\n  var timestamp = date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_1___default()(new Date(created_at), {\n    addSuffix: true\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      childrenHidden = _useState2[0],\n      setChildrenHidden = _useState2[1];\n\n  var showHideChildren = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    if (childrenHidden) setChildrenHidden(false);else setChildrenHidden(true);\n  }, [setChildrenHidden]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"comment-container comment-container-outer\"\n  }, !childrenHidden && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    onClick: showHideChildren,\n    className: \"threadline-container threadline-container-outer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"threadline\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"comment-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    onClick: function onClick() {\n      return setChildrenHidden(false);\n    },\n    className: \"post-metadata\"\n  }, childrenHidden && '[+]', author, \" \\xB7 \", timestamp), !childrenHidden && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"comment-body\",\n    dangerouslySetInnerHTML: {\n      __html: text\n    }\n  }), !childrenHidden && !!children.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comments__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    comments: children\n  })));\n});\n\n//# sourceURL=webpack:///./src/Components/Post/Comment.js?");

/***/ }),

/***/ "./src/Components/Post/Comments.js":
/*!*****************************************!*\
  !*** ./src/Components/Post/Comments.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comment */ \"./src/Components/Post/Comment.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var comments = _ref.comments;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"comments\"\n  }, comments.map(function (comment) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      key: comment.id,\n      comment: comment\n    });\n  }));\n});\n\n//# sourceURL=webpack:///./src/Components/Post/Comments.js?");

/***/ }),

/***/ "./src/Components/Post/FullPost.js":
/*!*****************************************!*\
  !*** ./src/Components/Post/FullPost.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comments */ \"./src/Components/Post/Comments.js\");\n/* harmony import */ var _PostContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostContent */ \"./src/Components/Post/PostContent.js\");\n/* harmony import */ var _utils_getComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/getComments */ \"./src/utils/getComments.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var post = _ref.post,\n      clearDisplayedPost = _ref.clearDisplayedPost;\n\n  var _usePostComments = Object(_utils_getComments__WEBPACK_IMPORTED_MODULE_3__[\"usePostComments\"])(post.id),\n      _usePostComments2 = _slicedToArray(_usePostComments, 2),\n      comments = _usePostComments2[0],\n      loading = _usePostComments2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    style: {\n      marginBottom: '-2px',\n      backgroundColor: 'white'\n    },\n    onClick: clearDisplayedPost\n  }, '< back'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      width: '100%',\n      // height: '100%',\n      // backgroundColor: '#F6F6EF',\n      // position: 'absolute',\n      top: 0,\n      left: 0,\n      paddingLeft: '40px'\n    },\n    className: \"post post-display\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    post: post\n  }), !loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comments__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    comments: comments\n  }), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Loading comments...\")));\n});\n\n//# sourceURL=webpack:///./src/Components/Post/FullPost.js?");

/***/ }),

/***/ "./src/Components/Post/PostContent.js":
/*!********************************************!*\
  !*** ./src/Components/Post/PostContent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/formatDistanceToNow */ \"date-fns/formatDistanceToNow\");\n/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction openInNewTab(event, url) {\n  event.stopPropagation();\n  var win = window.open(url, '_blank');\n  win.focus();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var post = _ref.post;\n  var by = post.by,\n      descendants = post.descendants,\n      id = post.id,\n      score = post.score,\n      time = post.time,\n      title = post.title,\n      text = post.text,\n      url = post.url;\n  var timestamp = date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_1___default()(new Date(time * 1000), {\n    addSuffix: true\n  });\n  var urlShortened = '';\n  var textShortened = '';\n  var hnUrl = \"https://news.ycombinator.com/item?id=\".concat(id);\n\n  if (text && text.length > 900) {\n    textShortened = text.slice(0, 900) + '...';\n    textShortened += \"<br />\\n                      <a target=\\\"_blank\\\" \\n                         rel=\\\"noopener noreferrer\\\"\\n                         href='\".concat(hnUrl, \"'\\n                      >\\n                        Read more\\n                      </a>\");\n  }\n\n  var openExtLinkInNewTab = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (event) {\n    return openInNewTab(event, url);\n  }, [url]);\n  var copyToClipboard = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (event) {\n    event.stopPropagation();\n    navigator.clipboard.writeText(url).then(function () {\n      return alert(\"URL copied: \".concat(url));\n    }).catch(function (err) {\n      return console.error(err);\n    });\n  }, [url]);\n\n  if (url) {\n    urlShortened = url.startsWith('https://') ? url.slice(8, 33) : url.slice(0, 25);\n    urlShortened = urlShortened.startsWith('http://') ? urlShortened.slice(7, 32) : urlShortened.slice(0, 25);\n    urlShortened = urlShortened.startsWith('www.') ? urlShortened.slice(4) : urlShortened.slice(0);\n    if (urlShortened.slice(-1) === '/') urlShortened = urlShortened.slice(0, -1);\n    if (url.length > 33) urlShortened += '...';\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"like-count\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, score), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Likes\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"post-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"post-metadata\"\n  }, \"Posted by \", by, \" \", timestamp), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"post-title\"\n  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"post-body\"\n  }, url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    onClick: openExtLinkInNewTab,\n    className: \"url-shortened\"\n  }, urlShortened), text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"post-text\",\n    dangerouslySetInnerHTML: {\n      __html: textShortened\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"post-bottom\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, descendants, \" Comments\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    onClick: copyToClipboard\n  }, \"Copy Link\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Save\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Hide\"))));\n});\n\n//# sourceURL=webpack:///./src/Components/Post/PostContent.js?");

/***/ }),

/***/ "./src/Components/PostsList/PostEntry.js":
/*!***********************************************!*\
  !*** ./src/Components/PostsList/PostEntry.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Post_PostContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Post/PostContent */ \"./src/Components/Post/PostContent.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(function (_ref) {\n  var post = _ref.post,\n      setDisplayedPost = _ref.setDisplayedPost;\n  var openHNPageInNewTab = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (event) {\n    event.stopPropagation();\n    if (typeof setDisplayedPost === 'function') setDisplayedPost(post);else {\n      console.log('type of setDisplayedPost: ' + _typeof(setDisplayedPost));\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    onClick: openHNPageInNewTab,\n    className: \"post postlist-entry\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Post_PostContent__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    post: post\n  }));\n}));\n\n//# sourceURL=webpack:///./src/Components/PostsList/PostEntry.js?");

/***/ }),

/***/ "./src/Components/PostsList/PostList.js":
/*!**********************************************!*\
  !*** ./src/Components/PostsList/PostList.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-infinite-scroll-component */ \"react-infinite-scroll-component\");\n/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PostEntry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostEntry */ \"./src/Components/PostsList/PostEntry.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"memo\"])(function (_ref) {\n  var posts = _ref.posts,\n      setDisplayedPost = _ref.setDisplayedPost,\n      fetchPosts = _ref.fetchPosts;\n  // TODO: Replace 'react-infinite-scroll-component' package (uses the deprecated\n  //       componentWillReceiveProps) with 'react-infinite-scroller'\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    dataLength: posts.length,\n    next: function next() {\n      return fetchPosts(10);\n    },\n    hasMore: posts.length <= 500,\n    loader: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h4\", null, \"Loading...\"),\n    endMessage: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"b\", null, \"Yay! You have seen it all\"))\n  }, posts.map(function (post) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostEntry__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: post.id,\n      post: post,\n      setDisplayedPost: setDisplayedPost\n    });\n  }));\n}));\n\n//# sourceURL=webpack:///./src/Components/PostsList/PostList.js?");

/***/ }),

/***/ "./src/server/getHNData.js":
/*!*********************************!*\
  !*** ./src/server/getHNData.js ***!
  \*********************************/
/*! exports provided: getTopPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTopPosts\", function() { return getTopPosts; });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction getTopPostIds() {\n  return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()('https://hacker-news.firebaseio.com/v0/topstories.json').then(function (res) {\n    return res.json();\n  });\n}\n\nfunction getTopPosts() {\n  var jsonReqsPromise = getTopPostIds().then(function (ids) {\n    var first30 = ids.slice(0, 30);\n    var reqs = first30.map(function (id) {\n      return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"https://hacker-news.firebaseio.com/v0/item/\".concat(id, \".json\")).then(function (res) {\n        return res.json();\n      });\n    });\n    return reqs;\n  });\n  return jsonReqsPromise.then(function (jsonPromises) {\n    return Promise.all(jsonPromises);\n  });\n}\n\n//# sourceURL=webpack:///./src/server/getHNData.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../App */ \"./src/App.js\");\n/* harmony import */ var node_cron__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! node-cron */ \"node-cron\");\n/* harmony import */ var node_cron__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(node_cron__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _getHNData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getHNData */ \"./src/server/getHNData.js\");\n\n\n\n\n\n\n\n\nvar PORT = process.env.PORT || 3006;\nvar app = express__WEBPACK_IMPORTED_MODULE_3___default()();\nvar indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./public/index.html');\n\nfunction job() {\n  var templateFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./public/htmlTemplate.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(templateFile, 'utf8', function (err, data) {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return;\n    }\n\n    Object(_getHNData__WEBPACK_IMPORTED_MODULE_7__[\"getTopPosts\"])().then(function (posts) {\n      var app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        topPostsFromServer: posts\n      })); // console.log(JSON.stringify(posts, null, 2));\n\n      console.log(app);\n      var renderedPage = data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\"));\n      fs__WEBPACK_IMPORTED_MODULE_1___default.a.writeFile(indexFile, renderedPage, function (err) {\n        return console.error(err);\n      });\n    }).catch(function (err) {\n      return console.error(err);\n    });\n  });\n}\n\njob(); // cron.schedule('*/15 * * * *', job).start();\n\napp.get('/', function (_, res) {\n  return res.sendFile(indexFile);\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./build'));\napp.listen(PORT, function () {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/utils/getComments.js":
/*!**********************************!*\
  !*** ./src/utils/getComments.js ***!
  \**********************************/
/*! exports provided: usePostComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usePostComments\", function() { return usePostComments; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nfunction usePostComments(id) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      comments = _useState2[0],\n      setComments = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      _useState4 = _slicedToArray(_useState3, 2),\n      loading = _useState4[0],\n      setLoading = _useState4[1];\n\n  function getComments(_x) {\n    return _getComments.apply(this, arguments);\n  }\n\n  function _getComments() {\n    _getComments = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {\n      var response, post;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return fetch(\"http://hn.algolia.com/api/v1/items/\".concat(id));\n\n            case 3:\n              response = _context.sent;\n              _context.next = 6;\n              return response.json();\n\n            case 6:\n              post = _context.sent;\n              setComments(post.children);\n              setLoading(false);\n              _context.next = 14;\n              break;\n\n            case 11:\n              _context.prev = 11;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n\n            case 14:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 11]]);\n    }));\n    return _getComments.apply(this, arguments);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    getComments(id);\n  }, []);\n  return [comments, loading];\n}\n\n//# sourceURL=webpack:///./src/utils/getComments.js?");

/***/ }),

/***/ "./src/utils/getTopPosts.js":
/*!**********************************!*\
  !*** ./src/utils/getTopPosts.js ***!
  \**********************************/
/*! exports provided: useTopPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useTopPosts\", function() { return useTopPosts; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n // import dummyPosts from '../dummyTopPosts';\n// import dummyPostIds from '../dummyTopPostIds';\n\nvar postsFetchedSoFar = 0;\nfunction useTopPosts(noOfPostsToFetch) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      topPosts = _useState2[0],\n      setTopPosts = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      _useState4 = _slicedToArray(_useState3, 2),\n      loading = _useState4[0],\n      setLoading = _useState4[1];\n\n  var postIds = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])([]); // Fetch the IDs of the Top Stories\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    fetch('https://hacker-news.firebaseio.com/v0/topstories.json').then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      postIds.current = res; // Fetch the stories\n\n      fetchPostContent(noOfPostsToFetch);\n    }); // postIds.current = dummyPostIds;\n    // setTopPosts(dummyPosts);\n    // postsFetchedSoFar += dummyPosts.length;\n    // setLoading(false);\n  }, []);\n\n  function fetchPostContent(_x, _x2) {\n    return _fetchPostContent.apply(this, arguments);\n  }\n\n  function _fetchPostContent() {\n    _fetchPostContent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(noOfPostsToFetch, startIndex) {\n      var reqs, i, id, req, responses, jsonPromises, posts;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              setLoading(true);\n              startIndex = startIndex === undefined ? postsFetchedSoFar : startIndex;\n              reqs = [];\n\n              for (i = startIndex; i < startIndex + noOfPostsToFetch; i++) {\n                id = postIds.current[i];\n                req = fetch(\"https://hacker-news.firebaseio.com/v0/item/\".concat(id, \".json\"));\n                reqs.push(req);\n              }\n\n              _context.next = 6;\n              return Promise.all(reqs);\n\n            case 6:\n              responses = _context.sent;\n              jsonPromises = responses.map(function (res) {\n                return res.json();\n              });\n              _context.next = 10;\n              return Promise.all(jsonPromises);\n\n            case 10:\n              posts = _context.sent;\n              setLoading(false);\n              setTopPosts([].concat(_toConsumableArray(topPosts), _toConsumableArray(posts)));\n              postsFetchedSoFar += noOfPostsToFetch;\n              return _context.abrupt(\"return\", posts);\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _fetchPostContent.apply(this, arguments);\n  }\n\n  return [topPosts, loading, fetchPostContent];\n}\n\n//# sourceURL=webpack:///./src/utils/getTopPosts.js?");

/***/ }),

/***/ "date-fns/formatDistanceToNow":
/*!***********************************************!*\
  !*** external "date-fns/formatDistanceToNow" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"date-fns/formatDistanceToNow\");\n\n//# sourceURL=webpack:///external_%22date-fns/formatDistanceToNow%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "node-cron":
/*!****************************!*\
  !*** external "node-cron" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-cron\");\n\n//# sourceURL=webpack:///external_%22node-cron%22?");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");\n\n//# sourceURL=webpack:///external_%22node-fetch%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-infinite-scroll-component":
/*!**************************************************!*\
  !*** external "react-infinite-scroll-component" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-infinite-scroll-component\");\n\n//# sourceURL=webpack:///external_%22react-infinite-scroll-component%22?");

/***/ })

/******/ });