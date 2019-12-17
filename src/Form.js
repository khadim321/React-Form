import React , {Component} from 'react';

class Form extends Component{

    constructor(props){
        super(props)
        this.state = {
           username: '',
           comment: '',
           Topic: 'react'
        }
    }

handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
}

handleCommentChange = event => {
        this.setState({
            comment: event.target.value
        })
}

handleTopicChange = event => {
    this.setState({
        Topic: event.target.value
    })
}

handleSubmitChange = event => {
    alert (`${this.state.username} ${this.state.comment} ${this.state.Topic}`)
    event.preventDefault();

}

    render(){
        return(

        //const {username , comment , Topic} = this.state
        //Uper likhay huway code ko likh kar nechay value ma this.state ko delete kr deen
        //tw b cahalay ga.

            <div>
                <form onSubmit={this.handleSubmitChange}>
                <label>User Name</label>
                <input type="text" value={this.state.username}
                onChange={this.handleUsernameChange} /><br/>
                
                <div>
                <label>Message</label>
                <input type="text" value={this.state.comment}
                onChange={this.handleCommentChange} />
                </div>

                <div>
                <label>Topics</label>
                <select value={this.state.Topic} 
                onChange={this.handleTopicChange}>
                    <option value="react"> ReactJS </option>
                    <option value="angular"> Angular </option>
                    <option value="phython"> Phython </option>
                    <option value="java"> JAVA </option>
                </select>
                </div>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;