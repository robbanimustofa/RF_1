import React, { useState } from 'react';
import { Button ,ScrollView,Text, TextInput, View, StyleSheet } from 'react-native';

import Todo from './Todo.js'

const TodoList=()=>{
    // const [VarTodo, setVarTodo] = useState('First Todo');
    const [text, setText] = useState()
    const [list, setList] = useState([])

    const addItems = ()=>{
        const updateList = list
        console.log(updateList)
        updateList.push(text)
        console.log(updateList)
        setList(updateList)
        setText('')
    }

    const deleteItems =(index)=>{
        const updateList = list.filter((todo) => todo !== index);
        setList(updateList);
    }

    return(
        <View style={{width:'80%', marginBottom:60}}>
            <Text>Ini Component React Native with Text</Text>
            <ScrollView>
            {/* use Usestate
            <Todo name={VarTodo} />
            {/* Without Usestate */}
            {/* <Todo name={'Second Todo'} />  */}
            {list.map((x,index)=>
            <Todo key={index} item={x} index={index} delete={deleteItems}/>)}
            </ScrollView>
            <View>
                <TextInput style={styles.input} value={text} onChangeText={(text)=> setText(text)} />
                <Button title='Clik Me' onPress={addItems}/>
            </View>
        </View>
    )      
}

const styles = StyleSheet.create({
    input: {
      borderRadius: 5,
      borderWidth: 1,
      marginBottom: 8,
      padding: 8,
    },
  });

export default TodoList;