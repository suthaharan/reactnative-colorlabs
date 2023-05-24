import React, {useState, useEffect} from 'react'
import {Text, StyleSheet, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, Image} from "react-native";


export default function UserList() {
    const [user, setuser] = useState();
    const [loading, setLoading] = useState();
    const loaduser = async () => {
        setLoading(true);
        const res = await fetch("https://randomuser.me/api/");
        const data = await res.json();
        await Image.prefetch(data.results[0].picture.large);
        console.log(data.results[0]);
        setuser(data.results[0]);
        setLoading(false);
    }

    useEffect(() => {
        loaduser();
    }, []);

    if(!user) return <ActivityIndicator size="large" />;

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView
            refreshControl={<RefreshControl refreshing={loading} onRefresh={loaduser}/>}>         
            <Image style={styles.pic} source={{uri: user.picture.large}}    />
            <Text style={styles.paragraph}>{user.name.first} - {user.name.last}</Text>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 8,
        backgroundColor: "#ecf0f1"
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    pic:{
        height: 400,
        width: 500
    }
})

 