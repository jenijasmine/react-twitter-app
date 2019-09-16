import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import TwitterDisplay from '../components/TwitterDisplay';
import { thisExpression } from '@babel/types';

class Twitter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tweet: '',
            date: '',
            tempName : '',
            tempTweet : '',
            tempDate : '',
            postList :[],
            tweetList :[],
            dateList :[]
        }
    }

    handleChange = (evt) => {
        const value = evt.target.value;
        this.setState({
            [evt.target.name]: value
        });
    }

    handleSubmit = (event) => {
        let current = this.state.postList
        let currTweet = this.state.tweetList
        let currDate = this.state.dateList
        current.push(this.state.name)
        currTweet.push(this.state.tweet)
        currDate.push(this.state.date)
        this.setState({
            flag : true,
            tempName : this.state.name,
            tempTweet : this.state.tweet,
            tempDate : this.state.date,
            name:'',
            tweet : '',
            date : '',
            postList : current,
            tweetList : currTweet,
            dateList : currDate
        });
        event.preventDefault();
    }

    render() {
        let p =  <TwitterDisplay post = {this.state.postList} tweet = {this.state.tweetList} date = {this.state.dateList}></TwitterDisplay>
        return (
            <div>
                <h1>Welcome to Tweet App</h1>
                <form onSubmit= {this.handleSubmit}>
                    Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br /><br />
                    Tweet: <textarea name="tweet" value={this.state.tweet} onChange={this.handleChange} /><br /><br />
                    Date: <input type="date" name="date" value={this.state.date} onChange={this.handleChange} /><br /><br />
                    <input type="submit" value="add"/>
                </form>
                {console.log(this.state.postList)}
                {this.state.flag?p:<div></div>}

            </div>
        )
    }
}

export default Twitter;