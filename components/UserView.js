import { useContext, useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { UserContext } from "./Contexts";
import { Alert, View } from "react-native";
import Style from "../styles/Style";

export default function UserView(){

    const [name, setName] = useState('');
    const {username, setUsername} = useContext(UserContext);

    let header = username === '' ? 'Set user' : 'Welcome ' + username;

    function changeUser(){
        setUsername(name);
        let info = name === '' ? 'Cannot set empty name' : 'User changed to ' + name;
        Alert.alert(info);
        setName('');
    }

    return(
        <View style={Style.navview}>
            <Text variant="headlineLarge" style={Style.header}>{header}</Text>
            <TextInput style={Style.formfield} label={'Name'} value={name} onChangeText={setName}/>
            <Button style={Style.formfield} mode="contained" onPress={changeUser}>Change user</Button>
        </View>
    );
}