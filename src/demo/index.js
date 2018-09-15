import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './demo.less';
import AcChange from '../index';
import '../index.less'
class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        };

    }

    render () {
        let className = 'clcclclclclcl';
        return (
            <div>
                <AcChange className={className}/>
            </div>
        )
    }
}

ReactDOM.render(<Demo/>, document.getElementById('root'));
