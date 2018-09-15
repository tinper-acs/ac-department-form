'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _yyuapRef = require('yyuap-ref');

var _yyuapRef2 = _interopRequireDefault(_yyuapRef);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    className: _propTypes2.default.string,
    changeTypeFun: _propTypes2.default.func,
    changeReasonFun: _propTypes2.default.func
};

var acDepartmentForm = function (_Component) {
    _inherits(acDepartmentForm, _Component);

    function acDepartmentForm(props) {
        _classCallCheck(this, acDepartmentForm);

        var _this2 = _possibleConstructorReturn(this, (acDepartmentForm.__proto__ || Object.getPrototypeOf(acDepartmentForm)).call(this, props));

        _this2.state = {
            changeType: {},
            changeTypeRefname: "",
            changeReasonRefname: "",
            changeReason: {}
        };
        _this2.changeType = _this2.changeType.bind(_this2);
        _this2.changeReason = _this2.changeReason.bind(_this2);
        return _this2;
    }

    _createClass(acDepartmentForm, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'changeType',
        value: function changeType() {
            var _this = this;
            var option = {
                title: '变动类型',
                refType: 1,
                isRadio: false,
                hasPage: true,
                backdrop: true,
                showLine: false,
                multiple: false,
                treeloadData: false,
                checkAllChildren: false,
                emptyBtn: true,
                tabData: ['常用', '全部'],
                buttonText: { ok: "确定", cancel: "取消" },
                param: {
                    refCode: 'chgtype_ref',
                    clientParam: {
                        chgevent: 3
                    }
                },
                refModelUrl: {
                    TreeUrl: 'http://workbench.yyuap.com/ref/diwork/iref_ctr/commonRefsearch',
                    TreeGridUrl: 'http://workbench.yyuap.com/ref/rest/iref_ctr/blobRefTree',
                    GridUrl: 'http://workbench.yyuap.com/ref/rest/iref_ctr/commonRefsearch',
                    TableBodyUrl: 'http://workbench.yyuap.com/ref/rest/iref_ctr/blobRefTreeGrid',
                    TableBarUrl: 'http://workbench.yyuap.com/ref/rest/iref_ctr/refInfo',
                    totalDataUrl: 'http://workbench.yyuap.com/ref/diwork/iref_ctr/matchPKRefJSON' },
                checkedArray: [],
                onCancel: function onCancel(p) {
                    console.log(p);
                },
                onSave: function onSave(sels) {
                    if (_this.state.changeTypeRefname !== sels[0].refname) {
                        _this.props.changeTypeFun(sels);
                    }
                    _this.setState({
                        changeType: sels,
                        changeTypeRefname: sels[0].refname
                    });
                },
                onBeforeAjax: function onBeforeAjax(p) {
                    console.log(p);
                },
                onAfterAjax: function onAfterAjax(p) {
                    console.log(p);
                },
                className: ''
            };
            (0, _yyuapRef2.default)(option);
        }
    }, {
        key: 'changeReason',
        value: function changeReason() {
            if (this.state.changeTypeRefname === "") return;
            var _this = this;
            var option = {
                title: '变动原因',
                refType: 1,
                isRadio: false,
                hasPage: true,
                backdrop: true,
                showLine: false,
                multiple: false,
                treeloadData: false,
                checkAllChildren: false,
                emptyBtn: true,
                tabData: [],
                buttonText: { ok: "确定", cancel: "取消" },
                param: {
                    refCode: 'corp_ref',
                    clientParam: {
                        chgtype: _this.state.changeType.id
                    }
                },
                refModelUrl: {
                    TreeUrl: 'http://workbench.yyuap.com/ref/diwork/iref_ctr/commonRefsearch',
                    TreeGridUrl: 'http://workbench.yyuap.com/ref/rest/iref_ctr/blobRefTree',
                    GridUrl: 'http://workbench.yyuap.com/ref/rest/iref_ctr/commonRefsearch',
                    TableBodyUrl: 'http://workbench.yyuap.com/ref/rest/iref_ctr/blobRefTreeGrid',
                    TableBarUrl: 'http://workbench.yyuap.com/ref/rest/iref_ctr/refInfo',
                    totalDataUrl: 'http://workbench.yyuap.com/ref/diwork/iref_ctr/matchPKRefJSON' },
                checkedArray: [],
                onCancel: function onCancel(p) {
                    console.log(p);
                },
                onSave: function onSave(sels) {
                    console.log(sels);
                    if (_this.state.changeReasonRefname !== sels[0].refname) {
                        _this.props.changeReasonFun(sels);
                    }
                    _this.setState({
                        changeType: sels,
                        changeReasonRefname: sels[0].refname
                    });
                },
                onBeforeAjax: function onBeforeAjax(p) {
                    console.log(p);
                    if (p['data']) {
                        var data = p['data'];
                        var dataobj = {};
                        for (var i = 0; i < data.length; i++) {
                            dataobj[i + ''] = data[i];
                        }
                        p.data = dataobj;
                    }
                },
                onAfterAjax: function onAfterAjax(p) {
                    console.log(p);
                },
                className: ''
            };
            (0, _yyuapRef2.default)(option);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: this.props.className, id: 'ac-department-form' },
                _react2.default.createElement(
                    'div',
                    { className: 'ref-change-box' },
                    _react2.default.createElement(
                        'div',
                        { className: 'ref-change-box-label' },
                        '\u53D8\u52A8\u7C7B\u578B'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'ref-change-box-input', onClick: this.changeType },
                        _react2.default.createElement('input', { type: 'text', value: this.state.changeTypeRefname }),
                        _react2.default.createElement('div', { className: 'icon sanjiao_down' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ref-change-box' },
                    _react2.default.createElement(
                        'div',
                        { className: 'ref-change-box-label' },
                        '\u53D8\u52A8\u539F\u56E0'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'ref-change-box-input', onClick: this.changeReason },
                        _react2.default.createElement('input', { disabled: this.state.changeTypeRefname === "", type: 'text', value: this.state.changeReasonRefname }),
                        _react2.default.createElement('div', { className: 'icon sanjiao_down' })
                    )
                )
            );
        }
    }]);

    return acDepartmentForm;
}(_react.Component);

acDepartmentForm.propTypes = propTypes;

exports.default = acDepartmentForm;