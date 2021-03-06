import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import taskData from "../../Data/TaskData";

export default function TodayTask({ navigation }) {
  return (
    <View style={{ marginTop: 30 }}>
      <TaskTitle />
      <Courses navigation={navigation} />
    </View>
  );
}

const TaskTitle = () => (
  <Text style={{ fontSize: 25, color: "#fff", fontWeight: "bold" }}>
    Today's Task
  </Text>
);

const Courses = ({ navigation }) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {taskData.map((course, index) => (
        <TouchableOpacity
          onPress={() => navigation.push(course.screenName)}
          style={{ marginTop: 15, marginRight: 28 }}
          key={index}
        >
          <View
            style={{
              width: 164,
              height: 148,
              backgroundColor: "#fff",
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={{
                uri: course.imgUrl,
              }}
              style={{ width: 70, height: 70, borderRadius: 100 }}
            />
            <Text style={{ fontSize: 25, marginTop: 5, fontWeight: "900" }}>
              {course.langName}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);
