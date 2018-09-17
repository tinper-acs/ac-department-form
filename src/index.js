import  React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import createModal from 'yyuap-ref'

import './index.less'
const propTypes = {
    className: PropTypes.string,
    changeTypeFun: PropTypes.func,
    changeReasonFun: PropTypes.func
};
class acDepartmentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            changeType:{},
            changeTypeRefname:"",
            changeReasonRefname:"",
            changeReason:{},
        };
        this.changeType = this.changeType.bind(this);
        this.changeReason = this.changeReason.bind(this);
    }

    componentDidMount(){

    }
    changeType() {
        let _this = this;
        const option = {
            title: '变动类型',//适配 reftype =1234
            refType:1,//1:树形 2.单表 3.树卡型 4.多选
            isRadio:false,//1.true 单选 2.false多选
            hasPage:true,
            backdrop:true,
            showLine:false,//树参照是否显示连线
            multiple:false,
            treeloadData:false,//树参照异步加载
            checkAllChildren:false,//树参照选择所有子选项按钮
            emptyBtn:true,//清空按钮是否显示
            tabData:[//tab标签 不需要可传空[]
                '常用','全部'
            ],// option中可增加defaultActiveKey作为默认tab标签
            buttonText:{ok:"确定", cancel:"取消"},//按钮文字配置
            param:{//url请求参数
                refCode:'chgtype_ref',//变动原因： chgreason_ref  变动类型： chgtype_ref
                clientParam: {
                    chgevent: 3
                }
                //language:'zh_CN'//en_US||zh_TW||fr_FR||de_DE||ja_JP/ 多语参数
            },
            refModelUrl:{
                // TreeUrl:'http://workbench.yyuap.com/ref/rest/iref_ctr/blobRefTree', //树请求
                TreeUrl:'http://workbench.yyuap.com/ref/diwork/iref_ctr/commonRefsearch', //树请求
                TreeGridUrl:'http://workbench.yyuap.com/ref/rest/iref_ctr/blobRefTree', //树表树请求
                GridUrl:'http://workbench.yyuap.com/ref/rest/iref_ctr/commonRefsearch',//单选多选请求
                TableBodyUrl:'http://workbench.yyuap.com/ref/rest/iref_ctr/blobRefTreeGrid',//表体请求
                TableBarUrl:'http://workbench.yyuap.com/ref/rest/iref_ctr/refInfo',//表头请求
                totalDataUrl:'http://workbench.yyuap.com/ref/diwork/iref_ctr/matchPKRefJSON',//根据refcode请求完整数据
            },
            checkedArray:[],//已选中数据回填
            onCancel: function (p) {
                console.log(p)
            },
            onSave: (sels) => {
                if(_this.state.changeTypeRefname !== sels[0].refname){
                    _this.props.changeTypeFun(sels);
                }
                _this.setState(
                    {
                        changeType:sels,
                        changeTypeRefname:sels[0].refname
                    }
                );
            },
            onBeforeAjax: function (p) {
                console.log(p)
            },
            onAfterAjax: function (p) {
                console.log(p);
            },
            className:'',
        };
        createModal(option)
    }
    changeReason() {
        if(this.state.changeTypeRefname === "")return;
        let _this = this;
        const option = {
            title: '变动原因',//适配 reftype =1234
            refType:1,//1:树形 2.单表 3.树卡型 4.多选
            isRadio:false,//1.true 单选 2.false多选
            hasPage:true,
            backdrop:true,
            showLine:false,//树参照是否显示连线
            multiple:false,
            treeloadData:false,//树参照异步加载
            checkAllChildren:false,//树参照选择所有子选项按钮
            emptyBtn:true,//清空按钮是否显示
            tabData:[//tab标签 不需要可传空[]

            ],// option中可增加defaultActiveKey作为默认tab标签
            buttonText:{ok:"确定",cancel:"取消"},//按钮文字配置
            param:{//url请求参数
                refCode:'corp_ref',//变动原因： chgreason_ref  变动类型： chgtype_ref
                clientParam: {
                    chgtype: _this.state.changeType.id
                }
                //language:'zh_CN'//en_US||zh_TW||fr_FR||de_DE||ja_JP/ 多语参数
            },
            refModelUrl:{
                // TreeUrl:'http://workbench.yyuap.com/ref/diwork/iref_ctr/refInfo', //树请求
                TreeUrl:'http://workbench.yyuap.com/ref/diwork/iref_ctr/commonRefsearch', //树请求
                TreeGridUrl:'http://workbench.yyuap.com/ref/rest/iref_ctr/blobRefTree', //树表树请求
                GridUrl:'http://workbench.yyuap.com/ref/rest/iref_ctr/commonRefsearch',//单选多选请求
                TableBodyUrl:'http://workbench.yyuap.com/ref/rest/iref_ctr/blobRefTreeGrid',//表体请求
                TableBarUrl:'http://workbench.yyuap.com/ref/rest/iref_ctr/refInfo',//表头请求
                totalDataUrl:'http://workbench.yyuap.com/ref/diwork/iref_ctr/matchPKRefJSON',//根据refcode请求完整数据
            },
            checkedArray:[],//已选中数据回填
            onCancel: function (p) {
                console.log(p)
            },
            onSave: (sels) => {
                console.log(sels);
                if(_this.state.changeReasonRefname !== sels[0].refname){
                    _this.props.changeReasonFun(sels);
                }
                _this.setState(
                    {
                        changeType:sels,
                        changeReasonRefname:sels[0].refname
                    }
                );
            },
            onBeforeAjax: function (p) {
                console.log(p);
                if(p['data']){
                    let data = p['data'];
                    let dataobj = {};
                    for(let i=0; i<data.length;i++) {
                        dataobj[i+''] = data[i]
                    }
                    p.data = dataobj;
                }
            },
            onAfterAjax: function (p) {
                console.log(p);
            },
            className:'',
        };
        createModal(option)
    }
    render() {
        return (
            <div className={this.props.className} id='ac-department-form'>
               <div className='ref-change-box'>
                   <div className='ref-change-box-label'>
                       变动类型
                   </div>
                   <div className='ref-change-box-input' onClick={this.changeType}>
                       <input type="text" value={this.state.changeTypeRefname}/>
                       <div className={'icon sanjiao_down'}></div>
                   </div>
               </div>
                <div className='ref-change-box'>
                   <div className='ref-change-box-label'>
                       变动原因
                   </div>
                   <div className='ref-change-box-input' onClick={this.changeReason}>
                       <input disabled={this.state.changeTypeRefname === ""} type="text" value={this.state.changeReasonRefname}/>
                       <div className={'icon sanjiao_down'}></div>
                   </div>
               </div>
            </div>

        );
    }
}

acDepartmentForm.propTypes = propTypes;

export default acDepartmentForm;
