import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import { useEffect, useState } from 'react';

import db from "../../firebase1";
import { onSnapshot,collection } from 'firebase/firestore';

import {LikeButton, ReadLaterButton, ViewsButton} from './PostButtons';

import styles from './style';

function Post() {
    
    const [Users, setName] = useState([]);

    useEffect(()=>
        //onSnapshot detects realtime change in database and updates
        onSnapshot(collection(db,"Users"),(snapshot)=>
            setName(snapshot.docs.map(doc=>doc.data()))
        ),
    //Empty array everytime you use useEffect to run that function once
    []); 
  
    return (
      <View>
        {Users.map((Users)=>(
      <>
      <Text> </Text>
        <View style={styles.container}>
                    <View style={styles.profileContainer}>
                      <Image style={styles.image} source={require('../../assets/Images/63007.jpg')} />
                      <View style={styles.textProfileContainer}>
                          <Text style={styles.name}>{Users.Name}</Text>
                          <Text style={styles.timeStamp}>timestamp</Text>
                      </View>
                  </View>
                  <TouchableOpacity>
                  <Text style={styles.title}>Title Text</Text>
                  <Text style={styles.subTitle}>Subtitle Text</Text>
                  <Image style={styles.postImage} source={require('../../assets/Images/63007.jpg')} />
                  </TouchableOpacity>
                  <View style={styles.postFooter}>
                      <LikeButton />
                      <ViewsButton />
                      <ReadLaterButton />
                  </View>
            </View>
        </>
        ))}
      </View>
  )
}

export default Post;


//----------------------------------------------------------------------------
//DEV NOTES:
//-> Imports from firestore to retrieve data in temporary directory
//-> docs.map creates the number of posts from firebase
//-> Post Clickable from Title to picture withing TouchableOpacity

//-> Uses shared stylesheet from same directory
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//TO DO:
//-> Fetch react counter and icons from firebase
//   Display under the like button
//-> Fetch Reading time from firebase
//   Display at the bottom right footer of image
//-> Limit Subtitle text container to first few sentenses
//-> Fix TimeStamp from firebase
//-> Add and retrieve category of post from firebase
//-> Add and retrieve directory to fetch user infor: Name, Photo
//-> Add and retrieve directory to fetch post: Title, Article and Image
//-> Add functionality to clickable post to open in new window
//   Implement stack navigator to post with back button visible
//-> Read more notes on useState and useEffect