import { Button, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
const TodoList = ({item, handleDelete }) => {
 const {id} = item;

  return (
 <Flex>
   <UnorderedList>
    <ListItem 
    ml={'10px'}>
    <Text my={2}
    mx={5}
    bgColor={'blue.50'}
    >{item.todo}</Text>
    <Button 
    bgColor={'red'}
    _hover={{
      bgColor: 'red',
    }}
   _active={{
      bgColor: 'red',
   }}
   onClick={() => handleDelete(id)}
    >Delete</Button>
    </ListItem>
   </UnorderedList>
 </Flex>
  )
}

export default TodoList