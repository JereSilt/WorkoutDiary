import { Divider, Text } from "react-native-paper";
import { MessagesContext } from "./Contexts";
import { useContext } from "react";
import { FlatList, View } from "react-native";
import Style from "../styles/Style";

export default function MessagesView(){

    const {messages} = useContext(MessagesContext);

    return(
        <View style={Style.navview}>
            <FlatList
                data={messages}
                renderItem={({item}) => <Item message={item}/> }
            />
        </View>
    );
}

function Item({message}){

    let d = message.date.getDate() + '.' + (message.date.getMonth()+1) + '.' + message.date.getFullYear(); 

    return(
        <View>
            <Text style={Style.itemText}>{message.username + '('+d+')'}</Text>
            <Text >{message.msg}</Text>
            <Divider bold={true} style={Style.divider}/>
        </View>
    );
}