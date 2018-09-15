import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './demo.less';
import AcChange from '../index';
import '../index.less'
import PropTypes from "prop-types";
class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        };

    }

    render () {
        let className = 'clcclclclclcl';
        let changeTypeFun = function (data) {
          console.log("返回类型数据 = ",data)
        };
        let changeReasonFun = function (data) {
          console.log("返回原因数据 = ",data)
        };
        return (
            <div>
                <AcChange className={className} changeTypeFun={changeTypeFun} changeReasonFun={changeReasonFun}/>
            </div>
        )
    }
}

ReactDOM.render(<Demo/>, document.getElementById('root'));
