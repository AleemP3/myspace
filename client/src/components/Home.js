import React, { useState, useEffect, useContext } from 'react';
import { Container, Header, Card, Image, Button, Icon, Grid } from "semantic-ui-react";
import { UserContext, UserConsumer} from "../providers/UserProvider";
import { Link } from "react-router-dom";
import PostForm from "./PostForm";
import axios from "axios"; 



const Home = () => {

  const [ users, setUsers ] = useState([]);
  const { user } = useContext(UserContext);
  const [ others, setOthers ] = useState([]);
  const [ posts, setPosts ] = useState([]);
  const [ formStatus, setFormStatus ] = useState(false);

  useEffect( () => {
    axios.get("/api/users")
    .then(res => {
      setUsers( res.data ); 
      setOthers( res.data );
    })
    axios.get(`/api/users/${user.data.id}/posts`)
    .then(res => {
      setPosts(res.data);
    })
  }, []);


  const sample = (id) => {
    const otherUsers = others.filter(s => {
      if (s.id !== id) {
          return s
        }
      })
    if (otherUsers.length) {
      const index = Math.floor(Math.random() * otherUsers.length);
      const index1 = Math.floor(Math.random() * otherUsers.length);
      const index2 = Math.floor(Math.random() * otherUsers.length);
        const random = { friends: [otherUsers[index], otherUsers[index1],otherUsers[index2]]}
          return random.friends.map(f => (
            <div>
              <br />
              <br />
              <Grid.Row>
                <Card key={f.id}>
                  <Image src={f.avatar} />
                    <Card.Content>
                      <Card.Header>{ f.firstname } {" "} { f.lastname}</Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                      <Button color="green" icon basic onClick={() => addFriend(f.id, otherUsers)}>Add Friend<Icon name="add square"/></Button>
                    </Card.Content>
                </Card>
              </Grid.Row>
            </div>
          ))}
    else {
      return null;
    }
  }

  const addPost = (data) => {
    debugger 
    setPosts([...posts, data]);
  }

  const renderPosts = () => {
    return posts.map(p => (
      <Card>
        <Card.Content>
          <Card.Header>{p.title}</Card.Header>
          <Card.Meta>{p.status}</Card.Meta>
          <Card.Description>{p.body}</Card.Description>
        </Card.Content>
        <Card.Content>
          <Button basic icon color="red" onClick={ () => deletePost(p.id)}><Icon name="trash" /></Button>
        </Card.Content>
      </Card>
    ))
  }

  const deletePost = (id) => {
    axios.delete(`/api/users/${user.data.id}/posts/${id}`)
      .then(res => {
        const newPosts = posts.filter(p => {
          if ( p.id !== id)
            return p
        })
        setPosts(newPosts);
      })
  }

  const toggleForm = () => {
    setFormStatus(!formStatus); 
  }

  const nextChoice = (id, otherUsers) => {
    const next = otherUsers.filter(n => {
      if (n.id !== id) {
        return n
       }})
       setOthers(next);
  }
  
  const addFriend = (id, otherUsers) => {
    axios.put(`/api/users/${id}`)
    .then(res => setOthers(otherUsers.filter( f => f.id !== id) ))
  }

  return(
  <>
  <Container>
    <Header as="h2">MySpace</Header>
    <hr />
    <br />
    <Container style={{display: "flex"}}>
      <Container>
          <UserConsumer>
            {user => (
              <Card key={user.user.data.id}>
                <Image src={user.user.data.avatar} />
                  <Card.Content>
                    <Card.Header>{ user.user.data.firstname } {""} { user.user.data.lastname }</Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                    <Button as={Link} to={"/my_friends"} color="inverted blue">See Friends</Button>
                  </Card.Content>
              </Card>
            )}
          </UserConsumer>
        </Container>
          <Container>
            <Header as="h2">Posts</Header>
            <Button color="inverted yellow" onClick={() => toggleForm()}>Form</Button> 
            { formStatus ?
            <PostForm add={addPost} toggle={toggleForm}/> : null }
            <hr />
            <div>{renderPosts()}</div>
          </Container>
      </Container>
    <br />
    <hr />
    <br />
    <Button color="inverted red" onClick={() => nextChoice(user.data.id, others)}>Refresh List</Button>
      <Grid columns={3}>
        { sample(user.data.id) }
      </Grid>
  </Container>
  </>
  )
}

export default Home;