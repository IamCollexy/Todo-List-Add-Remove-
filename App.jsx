import React, {useState} from 'react'
import {Stack, Flex, FormControl, Input, Button  } from '@chakra-ui/react';
import TodoList from './Components/TodoList';

const App = () => {
   const [todo, setTodo] = useState('');
   const [todoArray, setTodoArray] = useState([]);

   const handleChange = (e) => {
    const todoName = e.target.value;
    setTodo(todoName);
   };

const handleClick = () => {  
   const todoItem = {
      id: new Date().getMilliseconds(),
         todo: todo
   }
   todo 
   ? setTodoArray((prev) => [...prev, todoItem]) 
   : alert('Please fill in something');
};

const handleDelete = (id) => {
   const newTodoList = todoArray.filter((Item) => Item.id !== id)
setTodoArray(newTodoList);
};

const renderList = todoArray?.map((item, index) => 
<TodoList item={item} key={index} handleDelete={handleDelete} />)

  return (
    <Stack>
      <Flex width={'50%'} margin={'100px auto'}>
         <FormControl>
            <Input 
            color={'black'}
            bgColor={'yellow.100'}
            placeholder='Add Todo' 
            value={todo} 
            onChange={(e)=>handleChange(e)}/>
         </FormControl>
         <Button 
         bgColor={'whatsapp.700'}
         onClick={handleClick}
         _hover={{
            bgColor: 'whatsapp.500' 
         }}
         >Add Todo</Button>
      </Flex>
      {renderList}
    </Stack>
  )
}

export default App