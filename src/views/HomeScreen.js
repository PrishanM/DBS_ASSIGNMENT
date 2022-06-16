import React, { useEffect, useState } from "react";
import {View,Image,FlatList} from "react-native";
import { Actions } from "react-native-router-flux";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import PostItem from "../components/PostItem";
import SearchComponent from "../components/SearchComponent";
import { resetPosts, retrievePosts } from "../redux/actions/PostsAction";
import { APP_COLORS } from "../styles/Colors";
import { imageHeight, imageWidth } from "../styles/Dimensions";


const HomeScreen = () => {

  const dispatch = useDispatch();
  const [posts,setPosts] = useState([]);

  const fetchingPosts = useSelector(state => state.postsReducer.fetchingPosts);
  const postsList = useSelector(state => state.postsReducer.postsList);
  const retrievingPostsError = useSelector(state => state.postsReducer.retrievingPostsError);

  useEffect(()=>{
    dispatch(retrievePosts());
    return () => {
      dispatch(resetPosts());
    }
  },[]);

  useEffect(()=>{
    if(postsList && postsList.length){
      setPosts(postsList);
    }
  },[postsList])

  useEffect(()=>{
    if(retrievingPostsError){
      // Error Handling
      console.log('ERROR',retrievingPostsError);
    }
  },[retrievingPostsError])

  const onPressSearch = (value) => {
    let searchData = posts.filter(post => (typeof post.body === 'string' && (post.body.toLowerCase()).includes(value.toLowerCase())))
    setPosts(searchData);
  }

  const onPressRefresh = () => {
    Actions.reset('home');
  }

  return (
    <View style={{flex:1,backgroundColor:APP_COLORS.colorWhite}}>

      <Loader loading={fetchingPosts} />

      <Image source={require('../assets/images/doggo_walk.gif')}
             style={{width:imageWidth,height:imageHeight}}
             resizeMode={'contain'} />

      <SearchComponent onSearchPress={onPressSearch}
                       onRefreshPress={onPressRefresh}/>

      <FlatList data={posts}
                renderItem={({item,index})=>(
                    <PostItem item={item}/>
                )}
                style={{alignSelf:'center',width:'95%'}}
                keyExtractor={(item, index) => index} />



    </View>
  )
}

export default HomeScreen;
