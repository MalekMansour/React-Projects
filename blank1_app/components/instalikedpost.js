import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; 

const InstaLikedPost = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(100);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.likeCount}>{likeCount} Likes</Text>
      <TouchableOpacity onPress={handleLike}>
        <Icon
          name={liked ? "heart" : "heart-o"}
          size={50}
          color={liked ? "red" : "black"} 
        />
      </TouchableOpacity>
    </View>
  );
};

export default InstaLikedPost;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  likeCount: {
    fontSize: 18,
    marginBottom: 10,
  },
});