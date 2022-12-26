import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';


const Todo = (props)=>{
    return(
        <View style={[{ margin:8, padding:8}, style.item]}>
            <Text>{props.item}</Text>
            <Button title={'Delete'} 
            color={'red'} 
            onPress={()=> props.delete(props.item)} />
        </View>
    )      
}

const style = StyleSheet.create({
    item:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderColor:'grey',
        borderWidth:1,
        borderRadius:5,
        backgroundColor: 'whitesmoke'
    }
})

export default Todo;