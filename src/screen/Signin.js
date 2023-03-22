import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import Input from "../components/Input";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../App";

const Signin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const navigateToSignUp = () => {
  //   navigation.navigate("Signup");
  // };

  const login = () => {
    signInWithEmailAndPassword(auth, email, password).then((res) => {
      // console.log("signin successfully", res);
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={require("../../assets/images/login.jpg")}
        style={{ alignSelf: "center" }}
      />
      <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>
        Never forget your notes
      </Text>
      <View style={{ paddingHorizontal: 16, paddingVertical: 25 }}>
        <Input
          placeholder="Email address"
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        {error && <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>}

        {loading ? (
          <ActivityIndicator />
        ) : (
          <Button
            title={"Login"}
            customStyles={{ alignSelf: "center", marginBottom: 60 }}
            onPress={login}
          />
        )}
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text>
            Don't have an account?{" "}
            <Text
              style={{ color: "green", fontWeight: "bold", marginLeft: 10 }}
            >
              Signup
            </Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 25,
  },
});
