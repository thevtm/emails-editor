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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Button.css":
/*!***********************************!*\
  !*** ./src/components/Button.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\".button {\\r\\n  padding: 20px;\\r\\n\\r\\n  color: #ffffff;\\r\\n  background-color: #4262ff;\\r\\n\\r\\n  border: none;\\r\\n  border-radius: 10px;\\r\\n\\r\\n  outline: none;\\r\\n}\\r\\n\");\n\n//# sourceURL=webpack:///./src/components/Button.css?");

/***/ }),

/***/ "./src/components/EmailBlock.css":
/*!***************************************!*\
  !*** ./src/components/EmailBlock.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\".email-block {\\r\\n  padding: 5px 10px;\\r\\n  background-color: #e0ebff;\\r\\n  border-radius: 10%;\\r\\n}\\r\\n\\r\\n.email-block--invalid {\\r\\n  text-decoration: underline wavy red;\\r\\n}\\r\\n\\r\\n.email-block__remove-button {\\r\\n  padding-left: 8px;\\r\\n}\\r\\n\");\n\n//# sourceURL=webpack:///./src/components/EmailBlock.css?");

/***/ }),

/***/ "./src/components/EmailBlock.ts":
/*!**************************************!*\
  !*** ./src/components/EmailBlock.ts ***!
  \**************************************/
/*! exports provided: EmailBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EmailBlock\", function() { return EmailBlock; });\n/* harmony import */ var _util_html_to_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/html-to-element */ \"./src/util/html-to-element.ts\");\n\nvar EmailBlock = function EmailBlock(email, onClickRemove) {\n  var el = Object(_util_html_to_element__WEBPACK_IMPORTED_MODULE_0__[\"htmlToElement\"])(\"\\n    <span\\n      class=\\\"email-block\".concat(email.isValid ? \"\" : \" email-block--invalid\", \"\\\"\\n      data-test-id=\\\"email-block\\\"\\n      data-email=\\\"\").concat(email.address, \"\\\"\\n    >\\n      \").concat(email.address, \"\\n\\n      <button class=\\\"email-block__remove-button\\\" data-test-id=\\\"email-block__remove-button\\\">\\n        \\xD7\\n      </button>\\n    </span>\\n  \"));\n\n  if (onClickRemove != null) {\n    var _el$querySelector;\n\n    (_el$querySelector = el.querySelector(\".email-block__remove-button\")) === null || _el$querySelector === void 0 ? void 0 : _el$querySelector.addEventListener(\"click\", function () {\n      return onClickRemove();\n    });\n  }\n\n  return el;\n};\n\n//# sourceURL=webpack:///./src/components/EmailBlock.ts?");

/***/ }),

/***/ "./src/components/EmailEditor.ts":
/*!***************************************!*\
  !*** ./src/components/EmailEditor.ts ***!
  \***************************************/
/*! exports provided: EmailsEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EmailsEditor\", function() { return EmailsEditor; });\n/* harmony import */ var _models_Email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Email */ \"./src/models/Email.ts\");\n/* harmony import */ var _util_random_email_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/random-email-generator */ \"./src/util/random-email-generator.ts\");\n/* harmony import */ var _EmailBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmailBlock */ \"./src/components/EmailBlock.ts\");\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Form */ \"./src/components/Form.ts\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nvar EmailsEditor =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(EmailsEditor, _HTMLElement);\n\n  function EmailsEditor() {\n    var _this;\n\n    _classCallCheck(this, EmailsEditor);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(EmailsEditor).call(this));\n\n    var shadowRoot = _this.attachShadow({\n      mode: \"open\"\n    });\n\n    shadowRoot.appendChild(Object(_Form__WEBPACK_IMPORTED_MODULE_3__[\"Form\"])());\n    return _this;\n  }\n\n  _createClass(EmailsEditor, [{\n    key: \"getEmailsList\",\n    value: function getEmailsList() {\n      return Array.from(this.emailBlockEls).map(function (el) {\n        return el.getAttribute(\"data-email\");\n      });\n    }\n  }, {\n    key: \"setEmailsList\",\n    value: function setEmailsList(addresses) {\n      var _this2 = this;\n\n      this.clearEmailBlocks();\n      addresses.map(function (address) {\n        return new _models_Email__WEBPACK_IMPORTED_MODULE_0__[\"Email\"](address);\n      }).map(function (email) {\n        return _this2.addEmail(email);\n      });\n    }\n  }, {\n    key: \"addEmail\",\n    value: function addEmail(email) {\n      var node = null;\n\n      var onClickRemoveHandler = function onClickRemoveHandler() {\n        if (node != null) {\n          node.remove();\n        } else {\n          console.warn(\"Failed to remove a EmailBlock node!\", {\n            email: email\n          });\n        }\n      };\n\n      var newEmailEl = Object(_EmailBlock__WEBPACK_IMPORTED_MODULE_2__[\"EmailBlock\"])(email, onClickRemoveHandler);\n      node = this.textAreaEl.insertBefore(newEmailEl, this.inputEl);\n    }\n  }, {\n    key: \"clearEmailBlocks\",\n    value: function clearEmailBlocks() {\n      this.emailBlockEls.forEach(function (el) {\n        return el.remove();\n      });\n    }\n  }, {\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      var _this3 = this;\n\n      // Handle pressing <enter> or <comma> in input\n      this.inputEl.addEventListener(\"keydown\", function (event) {\n        var _ref = event,\n            key = _ref.key;\n\n        if (key === \"Enter\" || key === \",\") {\n          event.preventDefault();\n\n          var address = _this3.inputEl.value.trim();\n\n          if (address === \"\") {\n            return;\n          }\n\n          _this3.addEmail(new _models_Email__WEBPACK_IMPORTED_MODULE_0__[\"Email\"](address));\n\n          _this3.inputEl.value = \"\";\n        }\n      }); // Handle input losing focus\n\n      this.inputEl.addEventListener(\"blur\", function () {\n        var address = _this3.inputEl.value.trim();\n\n        if (address === \"\") {\n          return;\n        }\n\n        _this3.addEmail(new _models_Email__WEBPACK_IMPORTED_MODULE_0__[\"Email\"](address));\n\n        _this3.inputEl.value = \"\";\n      }); // Handle pressing the \"Add email\" button\n\n      this.addEmailButton.addEventListener(\"click\", function () {\n        var newEmail = Object(_util_random_email_generator__WEBPACK_IMPORTED_MODULE_1__[\"getRandomEmail\"])();\n\n        _this3.addEmail(new _models_Email__WEBPACK_IMPORTED_MODULE_0__[\"Email\"](newEmail));\n      }); // Handle pressing the \"Get emails count\" button\n\n      this.getEmailsCountButton.addEventListener(\"click\", function () {\n        var count = _this3.emailBlockEls.length;\n        var message = \"Emails: \".concat(count);\n        window.alert(message);\n      });\n    }\n  }, {\n    key: \"inputEl\",\n    get: function get() {\n      return this.shadowRoot.querySelector(\"#input\");\n    }\n  }, {\n    key: \"textAreaEl\",\n    get: function get() {\n      return this.shadowRoot.querySelector(\"#text-area\");\n    }\n  }, {\n    key: \"addEmailButton\",\n    get: function get() {\n      return this.shadowRoot.querySelector(\"#add-email-button\");\n    }\n  }, {\n    key: \"getEmailsCountButton\",\n    get: function get() {\n      return this.shadowRoot.querySelector(\"#get-emails-count\");\n    }\n  }, {\n    key: \"emailBlockEls\",\n    get: function get() {\n      return this.textAreaEl.querySelectorAll(\".email-block\");\n    }\n  }]);\n\n  return EmailsEditor;\n}(_wrapNativeSuper(HTMLElement));\ncustomElements.define(\"emails-editor\", EmailsEditor);\n\n//# sourceURL=webpack:///./src/components/EmailEditor.ts?");

/***/ }),

/***/ "./src/components/Form.css":
/*!*********************************!*\
  !*** ./src/components/Form.css ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\".form {\\r\\n  border: solid 1px black;\\r\\n  border-radius: 10px;\\r\\n\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.form__top {\\r\\n  padding-top: 20px;\\r\\n  padding-right: 20px;\\r\\n  padding-bottom: 10px;\\r\\n  padding-left: 20px;\\r\\n\\r\\n  background-color: #f8f8f7;\\r\\n}\\r\\n\\r\\n.form__title {\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.form__text-area {\\r\\n  padding: 10px;\\r\\n\\r\\n  border: solid 1px #c3c2cf;\\r\\n  background-color: #ffffff;\\r\\n\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.form__text-input {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n\\r\\n  flex-grow: 1;\\r\\n}\\r\\n\\r\\n.form__bottom {\\r\\n  padding: 20px;\\r\\n}\\r\\n\");\n\n//# sourceURL=webpack:///./src/components/Form.css?");

/***/ }),

/***/ "./src/components/Form.ts":
/*!********************************!*\
  !*** ./src/components/Form.ts ***!
  \********************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return Form; });\n/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.css */ \"./src/components/Button.css\");\n/* harmony import */ var _EmailBlock_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailBlock.css */ \"./src/components/EmailBlock.css\");\n/* harmony import */ var _Form_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form.css */ \"./src/components/Form.css\");\n\n\n\nvar template = document.createElement(\"template\");\ntemplate.innerHTML = \"\\n    <style>\\n      \".concat(_Button_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"], \"\\n      \").concat(_EmailBlock_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"\\n      \").concat(_Form_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"\\n    </style>\\n    <div class=\\\"form\\\" data-test-id=\\\"form\\\">\\n      <div class=\\\"form__top\\\">\\n        <div class=\\\"form__title\\\">\\n          Share <b>board names</b> with others\\n        </div>\\n\\n        <div id=\\\"text-area\\\" class=\\\"form__text-area\\\" data-test-id=\\\"text-area\\\">\\n          <input\\n            id=\\\"input\\\"\\n            class=\\\"form__text-input\\\"\\n            placeholder=\\\"add more people...\\\"\\n            data-test-id=\\\"form-input\\\"\\n          />\\n        </div>\\n      </div>\\n\\n      <div class=\\\"form__bottom\\\">\\n        <button id=\\\"add-email-button\\\" class=\\\"button\\\" data-test-id=\\\"add-email-button\\\">\\n          Add email\\n        </button>\\n\\n        <button id=\\\"get-emails-count\\\" class=\\\"button\\\" data-test-id=\\\"get-emails-button\\\">\\n          Get emails count\\n        </button>\\n      </div>\\n    </div>\\n  \");\nvar Form = function Form() {\n  return template.content.cloneNode(true);\n};\n\n//# sourceURL=webpack:///./src/components/Form.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_EmailEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/EmailEditor */ \"./src/components/EmailEditor.ts\");\n\n\nwindow.EmailsEditor = function (_ref) {\n  var container = _ref.container;\n  var ee = document.createElement(\"emails-editor\");\n  container.appendChild(ee);\n  return ee;\n};\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/models/Email.ts":
/*!*****************************!*\
  !*** ./src/models/Email.ts ***!
  \*****************************/
/*! exports provided: Email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Email\", function() { return Email; });\n/* harmony import */ var _util_email_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/email-validator */ \"./src/util/email-validator.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar Email = function Email(address) {\n  _classCallCheck(this, Email);\n\n  _defineProperty(this, \"address\", void 0);\n\n  _defineProperty(this, \"isValid\", void 0);\n\n  this.address = address;\n  this.isValid = Object(_util_email_validator__WEBPACK_IMPORTED_MODULE_0__[\"isValidEmailAddress\"])(address);\n};\n\n//# sourceURL=webpack:///./src/models/Email.ts?");

/***/ }),

/***/ "./src/util/email-validator.ts":
/*!*************************************!*\
  !*** ./src/util/email-validator.ts ***!
  \*************************************/
/*! exports provided: isValidEmailAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValidEmailAddress\", function() { return isValidEmailAddress; });\nvar isValidEmailAddress = function isValidEmailAddress(address) {\n  var re = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n  return re.test(address);\n};\n\n//# sourceURL=webpack:///./src/util/email-validator.ts?");

/***/ }),

/***/ "./src/util/html-to-element.ts":
/*!*************************************!*\
  !*** ./src/util/html-to-element.ts ***!
  \*************************************/
/*! exports provided: htmlToElement, htmlToElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlToElement\", function() { return htmlToElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlToElements\", function() { return htmlToElements; });\nvar htmlToElement = function htmlToElement(html) {\n  var template = document.createElement(\"template\");\n  html = html.trim(); // Never return a text node of whitespace as the result\n\n  template.innerHTML = html;\n\n  if (template.content.firstChild === null) {\n    throw new Error(\"Unable to transform html into an element!\");\n  }\n\n  return template.content.firstChild;\n};\nvar htmlToElements = function htmlToElements(html) {\n  var template = document.createElement(\"template\");\n  template.innerHTML = html;\n  return template.content.childNodes;\n};\n\n//# sourceURL=webpack:///./src/util/html-to-element.ts?");

/***/ }),

/***/ "./src/util/random-email-generator.ts":
/*!********************************************!*\
  !*** ./src/util/random-email-generator.ts ***!
  \********************************************/
/*! exports provided: getRandomEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomEmail\", function() { return getRandomEmail; });\nvar FAKE_RANDOM_DATA = [\"ralamosm@verizon.net\", \"russotto@aol.com\", \"djpig@comcast.net\", \"jsbach@hotmail.com\", \"nweaver@yahoo.com\", \"sisyphus@att.net\", \"nweaver@att.net\", \"seebs@mac.com\", \"violinhi@aol.com\", \"jdhedden@aol.com\", \"ianbuck@att.net\", \"wayward@icloud.com\", \"ramollin@outlook.com\", \"mschwartz@mac.com\", \"tbmaddux@sbcglobal.net\", \"jrifkin@comcast.net\", \"klaudon@verizon.net\", \"yamla@verizon.net\", \"jlbaumga@outlook.com\", \"mosses@att.net\", \"dgriffith@verizon.net\", \"manuals@msn.com\", \"fudrucker@outlook.com\", \"jfriedl@sbcglobal.net\", \"ryanvm@hotmail.com\", \"itstatus@live.com\", \"goldberg@live.com\", \"duncand@yahoo.com\", \"vmalik@sbcglobal.net\", \"hling@me.com\", \"sartak@yahoo.com\", \"suresh@yahoo.com\", \"andrei@live.com\", \"studyabr@gmail.com\", \"damian@att.net\", \"rfisher@att.net\", \"kmself@msn.com\", \"yangyan@outlook.com\", \"uncled@yahoo.ca\", \"gamma@aol.com\", \"gerlo@live.com\", \"srour@live.com\", \"garland@sbcglobal.net\", \"xtang@sbcglobal.net\", \"kramulous@mac.com\", \"howler@aol.com\", \"vganesh@yahoo.com\", \"fangorn@comcast.net\", \"adillon@att.net\", \"chronos@aol.com\", \"hamilton@aol.com\", \"enintend@icloud.com\", \"pontipak@verizon.net\", \"gemmell@verizon.net\", \"rgiersig@aol.com\", \"ramollin@att.net\", \"hoangle@yahoo.com\", \"janneh@comcast.net\", \"anicolao@mac.com\", \"gator@verizon.net\", \"sarahs@optonline.net\", \"brickbat@outlook.com\", \"kohlis@live.com\", \"aprakash@yahoo.ca\", \"yumpy@optonline.net\", \"wsnyder@att.net\", \"tamas@aol.com\", \"jonadab@comcast.net\", \"loscar@aol.com\", \"tubesteak@me.com\", \"jbuchana@live.com\", \"satch@me.com\", \"lushe@msn.com\", \"bjoern@hotmail.com\", \"johnbob@att.net\", \"nelson@yahoo.ca\", \"dobey@gmail.com\", \"gemmell@sbcglobal.net\", \"hampton@icloud.com\", \"syrinx@optonline.net\", \"xtang@outlook.com\", \"sjava@me.com\", \"presoff@hotmail.com\", \"tellis@verizon.net\", \"geoffr@msn.com\", \"muadip@hotmail.com\", \"fudrucker@optonline.net\", \"dowdy@gmail.com\", \"msroth@msn.com\", \"dhrakar@live.com\", \"crowemojo@icloud.com\", \"ilikered@hotmail.com\", \"scottlee@mac.com\", \"barjam@yahoo.com\", \"intlprog@aol.com\", \"janusfury@yahoo.com\", \"leocharre@hotmail.com\", \"ardagna@verizon.net\", \"hachi@live.com\", \"rgarcia@optonline.net\"];\nvar getRandomEmail = function getRandomEmail() {\n  var randomIndex = Math.floor(Math.random() * FAKE_RANDOM_DATA.length);\n  return FAKE_RANDOM_DATA[randomIndex];\n};\n\n//# sourceURL=webpack:///./src/util/random-email-generator.ts?");

/***/ })

/******/ });