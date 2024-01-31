import { useContext, useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { MessagesContext, UserContext } from "./Contexts";
import { View } from "react-native";
import Style from "../styles/Style";

export default function AddMessageView(){

    const {username} = useContext(UserContext);
    const {setMessages} = useContext(MessagesContext);
    const [msg, setMsg] = useState('');

    const header = username === '' ? 'Set user for sending messages' : 'Add message'

    function addMessage(){

        const date = new Date(); 
     
        setMessages( prev => [...prev, {username, msg, date}]);
        setMsg('');
    }       

    return(
        <View style={Style.navview}>
             <Text variant="headlineLarge" style={Style.header}>{header}</Text>
             { username !== '' &&
                <View>
                     <TextInput style={Style.formfield} label={'Message'} value={msg} onChangeText={setMsg}/>
                     <Button style={Style.formfield} mode="contained" onPress={addMessage}>Add message</Button>
                </View>
             }
        </View>
    );
}