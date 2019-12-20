import React, {useState, useContext, useEffect} from "react"
import { Form, } from "semantic-ui-react";
import { UserContext, } from "../providers/UserProvider"; 
import axios from "axios"; 

const PostForm = (props) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [body, setBody] = useState("");
  const { user } = useContext(UserContext);

  useEffect( () => {
    if (props.id) {
      setTitle(props.title);
      setStatus(props.status);
      setBody(props.body);
    }
  }, [])

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }
  
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  }

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.id) {
        props.edit({id: props.id, title, status, body})
        props.toggle();
      }
    else {
    axios.post(`/api/users/${user.data.id}/posts`, { title, status, body, })
      .then( res => {
        props.add(res.data);
        props.toggle();
      })
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            label="Title"
            placeholder="Title"
            name="title"
            required
            onChange={handleTitleChange}
            value={title}
          />
          <Form.Input
            label="Status"
            placeholder="Status"
            name="status"
            required
            onChange={handleStatusChange}
            value={status}
          />
          <Form.Input
            label="Body"
            placeholder="Body"
            name="body"
            required
            onChange={handleBodyChange}
            value={body}
          />
        </Form.Group>
        <Form.Button color="inverted green">Submit</Form.Button>
      </Form>
    </>
  )
}

export default PostForm; 