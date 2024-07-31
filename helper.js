import {

    Image,
    StyleSheet,
    Pressable,
    View,
    Text,
    TouchableOpacity,
    Alert
} from "react-native";

import { Buffer } from "buffer";





export const generateImage = async (prompt, style_id = 28) => {
    
    try {
        const url = "https://api.vyro.ai/v1/imagine/api/generations";
        let headers = new Headers();
        headers.append("Authorization", "replace your Token");

        let formdata = new FormData();
        formdata.append("prompt", prompt);
        formdata.append("style_id", style_id);

        let requestOptions = {
            method: 'POST',
            body: formdata,
            headers: headers,
        };
        console.log(1)

        const response = await fetch(url, requestOptions);
        const result = await response.arrayBuffer();
        console.log("2");
        console.log("This is result ", result);

        const base64 = Buffer.from(result, 'binary').toString("base64");
        asImageSrc = `data:image/png;base64,${base64}`;
        return asImageSrc;

      
    } catch (error) {
        console.error('Error generating image:', error);
    }
};




export const uploadImageGeneration = async (selectedImage, prompt, style_id, type = "variation", strength = "", control = "", steps = "", cfg = "",url="https://api.vyro.ai/v1/imagine/api/generations/variations") => {
    let headers = new Headers();
    headers.append("Authorization", "replace your Token");
    let asImageSrc = "";
    try {
        const file = {
            uri: selectedImage.uri,
            name: selectedImage.fileName,
            type: selectedImage.type,
        };
        const formData = new FormData();
        formData.append('image', file);

        console.log(file);



        if (type == "variation") {
            console.log("i am  not here")
            formData.append("prompt", prompt);
            formData.append("style_id", style_id);
            formData.append("aspect_ratio", "1:1");
        }
        else if (type == "remix") {
            console.log("i am nhere")
            url = "https://api.vyro.ai/v1/imagine/api/edits/remix"
            formData.append("prompt", prompt);
            formData.append("style_id", style_id);
            formData.append("strength", strength);
            formData.append("control", control);
            formData.append("steps", steps);
            formData.append("cfg", cfg);
        }
        let requestOptions = {
            method: 'POST',
            body: formData,
            headers: headers,
        };

        console.log(formData);
        console.log("1");
        console.log("hitting on url ",url)

        const response = await fetch(url, requestOptions);
        const result = await response.arrayBuffer();
        console.log("2");
        console.log("This is result ", result);

        const base64 = Buffer.from(result, 'binary').toString("base64");
        asImageSrc = `data:image/png;base64,${base64}`;
        return asImageSrc;

    } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Something went wrong');
        return null; // Return null in case of error
    }
};