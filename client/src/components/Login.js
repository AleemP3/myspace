import React from "react"
import { Form, Segment, Header} from "semantic-ui-react";
import { UserConsumer, } from "../providers/UserProvider"; 

class Login extends React.Component {

  state = { email: "", password: "",  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
      this.props.auth.handleLogin({ ...this.state}, this.props.history)
  }


  render() {
    return (
      <Segment basic>
        <Header as="h3">Log In</Header>
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
            <Form.Button color="inverted yellow">Submit</Form.Button>
          </Form>
      </Segment>
    )
  }
}


const ConnectedLogin = (props) => {
  return (
    <UserConsumer>
      {auth => (
        <Login 
          {...props}
          auth={auth}
        />
      )}
    </UserConsumer>
  )
}
export default ConnectedLogin; 