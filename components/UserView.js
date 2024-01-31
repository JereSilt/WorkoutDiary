import { useContext, useState } from "react";
import { Text } from "react-native-paper";
import { UserContext } from "./Contexts";

export default function UserView(){

    const [name, setName] = useState('');
    const {username, setUsername} = useContext(UserContext);


    //Create textinput and button to change the username in the context when button pressed (use paper components)

    return(<Text>User view</Text>);
}