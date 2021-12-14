import React, {Component} from 'react'
import '../style/Contact.css'
class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = {name:'', email:'', message:''}
    }
  
    render() {
      return(
        <div className="Form">
          <form onSubmit={this.handleSubmit}>
            <div class="contactForm">
              <label style={{color: 'white'}}> Name: </label>
              <input type="text" value={this.state.name} onChange={this.onNameChange} />
            </div>
            <div class="contactForm">
              <label style={{color: 'white'}}> Email address: </label>
              <input type="email" value={this.state.email} onChange={this.onEmailChange} />
            </div>
            <div class="contactForm">
              <label style={{color: 'white'}}> Message: </label>
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