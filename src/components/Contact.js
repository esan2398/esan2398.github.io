import React, {Component} from 'react'
class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = {name:'', email:'', message:''}
    }
  
    render() {
      return(
        <div className="App">
          <form onSubmit={this.handleSubmit}>
            <div class="contactForm">
              <label> Name: </label>
              <input type="text" value={this.state.name} onChange={this.onNameChange} />
            </div>
            <div class="contactForm">
              <label> Email address: </label>
              <input type="email" value={this.state.email} onChange={this.onEmailChange} />
            </div>
            <div class="contactForm">
              <label> Message: </label>
              <textarea rows="5" value={this.state.message} onChange={this.onMessageChange} />
            </div>
            <button>Submit</button>
          </form>
        </div>
      )
    }
  
    onNameChange = event => {
      this.setState({name: event.target.value})
    }
  
    onEmailChange = event => {
      this.setState({email: event.target.value})
    }
  
    onMessageChange = event => {
      this.setState({message: event.target.value})
    }
  
    handleSubmit = event =>{
        event.preventDefault();
        alert('Thank you ' + this.state.name + '!\nYour mesage sent successfully!')
    }
  }
  
  export default Contact;