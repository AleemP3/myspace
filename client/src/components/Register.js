import React from "react"
import { Form, Segment, Header} from "semantic-ui-react";
import { UserConsumer, } from "../providers/UserProvider"; 

class Register extends React.Component {

  state = { email: "", password: "", passwordConfirmation: "" }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    if (this.state.password === this.state.passwordConfirmation)
      this.props.auth.handleRegister({ ...this.state}, this.props.history)
    else
      alert('Passwords Do Not Match!')

  }


  render() {
    return (
      <Segment basic>
        <Header as="h3">Register</Header>
        <hr />
          <Form onSubmit={this.handleSubmit}>
            <Form.Input 
            label="Email"
            name="email"
            required
            autoFocus
            placeholder="email"
            value={this.state.email}
            type="email"
            onChange={this.handleChange}
            />
            <Form.Input 
            label="Password"
            name="password"
            required
            autoFocus
            placeholder="password"
            value={this.state.password}
            type="password"
            onChange={this.handleChange}
            />
            <Form.Input 
            label="Password Confirmation"
            name="passwordConfirmation"
            required
            autoFocus
            placeholder="password confirmation"
            value={this.state.passwordConfirmation}
            type="password"
            onChange={this.handleChange}
            />
            <Form.Button color="inverted yellow">Submit</Form.Button>
          </Form>
      </Segment>
    )
  }
}


const ConnectedRegister = (props) => {
  return (
    <UserConsumer>
      {auth => (
        <Register 
          {...props}
          auth={auth}
        />
      )}
    </UserConsumer>
  )
}
export default ConnectedRegister; 