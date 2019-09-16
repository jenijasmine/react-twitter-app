import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Twitter from './Twitter';
import { thisExpression } from '@babel/types';

export default class TwitterDisplay extends Component {
    constructor(props) {
        super(props);
    }

       render() {
        //console.log(this.state.postList)   
        let val = []
         for(var i = this.props.post.length-1; i>=0; i--){
             val.push(<div>{this.props.post[i]}<br />
                        {this.props.tweet[i]} <br />
                        {this.props.date[i]} <br /> <br />
                    </div>)
         }
        return(
            <p>
               {val}
            </p>
        )
    }
}