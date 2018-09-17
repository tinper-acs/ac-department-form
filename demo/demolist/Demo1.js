/**
 *
 * @title 应用组件名称
 * @description 应用组件描述
 *
 */

import React, { Component } from 'react';
import Temp from '../../src/index';
class Demo1 extends Component {
    render () {
      let className = 'clcclclclclcl';
      let changeTypeFun = function (data) {
        console.log("返回类型数据 = ",data)
      };
      let changeReasonFun = function (data) {
        console.log("返回原因数据 = ",data)
      };
        return (
            <div className="demoPadding">
                <Temp  className={className} changeTypeFun={changeTypeFun} changeReasonFun={changeReasonFun} />
            </div>
        )
    }
}

export default Demo1;
