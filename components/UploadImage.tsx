import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Platform,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function UploadImage() {
  const [image, setImage] = useState<string | undefined>(undefined);

  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!_image.canceled) {
      setImage(_image.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={imageUploaderStyles.container}>
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
        <View style={imageUploaderStyles.uploadBtnContainer}>
          <TouchableOpacity
            onPress={addImage}
            style={imageUploaderStyles.uploadBtn}
          >
            <Text>{image ? "Edit" : "Upload"} Image</Text>
            <AntDesign name="camera" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  //   return (
  //     <View style={imageUploaderStyles.container}>
  //       <View style={imageUploaderStyles.uploadBtnContainer}>
  //         <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
  //       </View>
  //       <View style={imageUploaderStyles.container}>
  //         <Button theme="primary" label="Choose a photo" onPress={setImage} />
  //         <Button label="Use this photo" />
  //       </View>
  //     </View>
  //   );
}
const imageUploaderStyles = StyleSheet.create({
  container: {
    elevation: 2,
    height: 250,
    width: 250,
    backgroundColor: "#efefef",
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
    // flex: 1,
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "lightgrey",
    width: "100%",
    height: "25%",
  },
  uploadBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
