import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Card, Image, Container } from 'semantic-ui-react';


const Friends = () => {

const [friends, setFriends] = useState([]);

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
        </Card>
      ))
  } 


  return(
    <>
    <Container>
      <Card.Group itemsPerRow={4}>
        { renderFriends() }
      </Card.Group>
    </Container>
    </>
  )
}

export default Friends;