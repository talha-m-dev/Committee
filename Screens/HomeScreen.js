import React from "react";
import { StyleSheet,Picker, Button, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default class HomeScreen extends React.Component {
  constructor(){
    super();
    this.state={
      PickerSelectedVal : ''
    }
  }
  getSelectedPickerValue=()=>{
    Alert.alert("Selected country is : " +this.state.PickerSelectedVal);
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Committees</Text>
        
        <View style={styles.contain}>
        <TextInput style={styles.entery} placeholder="Enter Committe Member Name"></TextInput>
        <Picker
           selectedValue={this.state.PickerSelectedVal}
           style={styles.picking,{height: 50, width: 100}}
           onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >

           <Picker.Item label="50" value="50" />
           <Picker.Item label="100" value="100" />
           <Picker.Item label="150" value="150" />
           <Picker.Item label="200" value="200" />
           

         </Picker>
         <Picker
           selectedValue={this.state.PickerSelectedVal}
           style={{height: 50, width: 150}}
           onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >

           <Picker.Item label="Sunday" value="" />
           <Picker.Item label="Monday" value="" />
           <Picker.Item label="Tuesday" value="" />
           <Picker.Item label="Wednesday" value="" />
           <Picker.Item label="Thursday" value="" />
           <Picker.Item label="Friday" value="" />
           <Picker.Item label="Saturday" value="" />
           
           

         </Picker>
        </View>

         <Button title="Submit" onPress={ this.getSelectedPickerValue } />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#aaa"
  },
  entery: {
   
    height: 50,
    backgroundColor: '#634753',
    paddingLeft: 15,
    paddingRight: 15
  },
  heading:{
    fontSize: 30,
    marginBottom:50,
    fontFamily:'sans-serif-thin',
    fontWeight: "bold"
  },
  contain:{
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding:10,
    marginBottom:20,
    backgroundColor: '#327656',
  },
  picking:{
   
  }
  

});
