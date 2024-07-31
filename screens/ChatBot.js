import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Color } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
import OpenAI from 'openai';


const ChatBot = () => {
  const client = new OpenAI({
    apiKey: 'Your Api key', // This is the default and can be omitted
  })
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const [messages, setMessages] = useState([
    { text: t("Hey, How can I assist you today?"), type: "received" },
  ]);
  const [inputText, setInputText] = useState("");
  const scrollViewRef = useRef();

  // const handleSend = async() => {
  //   // if (inputText.trim() !== "") {
  //   //   const newMessages = [
  //   //     ...messages,
  //   //     { text: inputText, type: "sent" },
  //   //     { text: t("Have a Great Day."), type: "received" },
  //   //   ];
  //   //   setMessages(newMessages);
  //   //   setInputText("");
  //   // }
  //   const respose = await client.completions.create({
  //     model:'gpt-4o-mini',
  //     message:[{role:'user','content':inputText}],
      
  //   })
  //   console.log(respose.choices[0])
  // };

  const handleSend = async ()=> {
    console.log("hereee")
    const stream = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: "Say this is a test" }],
        stream: true,
    });
    
    console.log(stream)
    for await (const chunk of stream) {
        process.stdout.wrie(chunk.choices[0]?.delta?.content || "");
    }
}

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: theme.background }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            style={styles.logoicon}
            resizeMode="contain"
            source={
              isDarkMode
                ? require("../assets/ChatBotLogo.png")
                : require("../assets/ChatBotLogoBlack.png")
            }
          />
          <View style={styles.headerTextContainer}>
            <Text style={[styles.headerTitle, { color: theme.text }]}>
              {t("Ai Art")}
            </Text>
            <View style={styles.headerStatus}>
              <Image
                style={styles.greendot}
                resizeMode="contain"
                source={require("../assets/GreenDot.png")}
              />
              <Text style={styles.statusText}>{t("online")}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.closecircle}
            resizeMode="contain"
            source={
              isDarkMode
                ? require("../assets/CloseCircle.png")
                : require("../assets/CloseCircleBlack.png")
            }
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        style={styles.chatContainer}
      >
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              message.type === "sent"
                ? styles.sentMessage
                : styles.receivedMessage,
            ]}
          >
            <Text
              style={[
                styles.messageText,
                message.type === "sent"
                  ? styles.sentMessageText
                  : styles.receivedMessageText,
              ]}
            >
              {message.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[
              styles.footerButton,
              { backgroundColor: theme.promptbackground },
            ]}
          >
            <Text style={[styles.buttonText, { color: theme.text }]}>
              {t("🤔 What is WappGPT?")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.footerButton,
              { backgroundColor: theme.promptbackground },
            ]}
          >
            <Text style={[styles.buttonText, { color: theme.text }]}>
              {t("💰 Pricing")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.footerButton,
              { backgroundColor: theme.promptbackground },
            ]}
          >
            <Text style={[styles.buttonText, { color: theme.text }]}>
              {t("🙋‍♂️ FAQs")}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.inputContainer,
            { backgroundColor: theme.promptbackground },
          ]}
        >
          <TextInput
            style={[styles.textInput, { color: theme.text }]}
            placeholder={t("Type your message here...")}
            placeholderTextColor="#aaa"
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity onPress={handleSend}>
            <Image
              style={styles.sendIcon}
              resizeMode="contain"
              source={require("../assets/Send.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181A20",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 35,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoicon: {
    width: 48,
    height: 48,
  },
  greendot: {
    width: 8,
    height: 8,
  },
  closecircle: {
    width: 24,
    height: 24,
  },
  headerTextContainer: {
    marginLeft: 10,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
  },
  headerStatus: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusText: {
    color: "#43EE7D",
    marginLeft: 5,
  },
  chatContainer: {
    flex: 1,
  },
  receivedMessage: {
    backgroundColor: Color.primary900,
    alignSelf: "flex-start",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: "80%",
  },
  sentMessage: {
    backgroundColor: "#DEE2E6",
    alignSelf: "flex-end",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: "80%",
  },
  messageText: {
    fontSize: 12,
  },
  sentMessageText: {
    color: "#000",
  },
  receivedMessageText: {
    color: "#fff",
  },
  footer: {
    marginTop: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  footerButton: {
    backgroundColor: "#1F222A",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonText: {
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1F222A",
    borderRadius: 10,
    padding: 10,
  },
  textInput: {
    flex: 1,
    color: "#fff",
  },
  sendIcon: {
    width: 24,
    height: 24,
  },
});

export default ChatBot;
