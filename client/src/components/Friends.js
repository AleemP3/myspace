import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { Card, Image, Container, Button, Header } from 'semantic-ui-react';
import { UserContext } from '../providers/UserProvider';


const Friends = () => {

const [friends, setFriends] = useState([]);
const { user } = useContext(UserContext)

useEffect( () => {
  axios.get("/api/my_friends")
    .then(res => {
        setFriends(res.data)
      })
  }, [])

  const renderFriends = () => {
    return friends.map(f => (
        <Card key={f.id}>
          <Image src={f.avatar} />
            <Card.Content>
              <Card.Header>{ f.firstname } {" "} { f.lastname}</Card.Header>
            </Card.Content>
            <Card.Content>
              <Button color="red" onClick={ () => removeFriend(f.id)}>Remove Friend</Button>
            </Card.Content>
        </Card>
      ))
  } 

  const removeFriend = (id) => {
   
    axios.put(`/api/my_friends/${id}`)
      .then(res => {
          setFriends(friends.filter( f => f.id !== id ))
        }) 
  }


  return(
    <>
    <Container>
      <Header as="h2">Friends</Header>
      <hr />
        <Card.Group itemsPerRow={4}>
          { renderFriends() }
        </Card.Group>
    </Container>
    </>
  )
}

export default Friends;