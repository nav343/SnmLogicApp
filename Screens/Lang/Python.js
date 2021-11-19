import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function Python() {
  return (
    <View
      style={{
        paddingTop: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6B2ECE",
        flex: 1,
      }}
    >
      <AboutText />
      <AboutButton />

      <StatusBar backgroundColor="#6B2ECE" style="light" />
    </View>
  );
}

const AboutText = () => (
  <>
    <Text style={{ fontSize: 46, color: "#fff" }}>Python</Text>
    <Text
      style={{
        textAlign: "center",
        fontSize: 15,
        color: "#fff",
        paddingHorizontal: 10,
        marginVertical: 50,
      }}
    >
      Python is an interpreted high-level general-purpose programming language.
      Its design philosophy emphasizes code readability with its use of
      significant indentation. Its language constructs as well as its
      object-oriented approach aim to help programmers write clear, logical code
      for small and large-scale projects. Python is dynamically-typed and
      garbage-collected. It supports multiple programming paradigms, including
      structured (particularly, procedural), object-oriented and functional
      programming. It is often described as a "batteries included" language due
      to its comprehensive standard library. Guido van Rossum began working on
      Python in the late 1980s, as a successor to the ABC programming language,
      and first released it in 1991 as Python 0.9.0. Python 2.0 was released in
      2000 and introduced new features, such as list comprehensions and a
      garbage collection system using reference counting. Python 3.0 was
      released in 2008 and was a major revision of the language that is not
      completely backward-compatible. Python 2 was discontinued with version
      2.7.18 in 2020. Python consistently ranks as one of the most popular
      programming languages.
    </Text>
  </>
);

const AboutButton = () => (
  <TouchableOpacity
    onPress={() => console.log("Hi there")}
    style={{
      width: 310,
      height: 60,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FF00C7",
      borderRadius: 100,
    }}
  >
    <Text style={{ color: "#fff", fontSize: 17 }}>Go To Official Website</Text>
  </TouchableOpacity>
);
