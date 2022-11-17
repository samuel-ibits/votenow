import React from "react";
import { View, Text, Image,Dimensions } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import BigButton from "../Components/Buttons/BigBtn";
import BigButton2 from "../Components/Buttons/BigBtn2";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Primary = "#027314";
const Secondary = "#C9D7CB";
const Surface = "F8F8F8";
const Surface2 = "#FFFFFF";
const TextGrey = "#575757";
const TextBlack = "#001403";
const Error = "B00020";

export default function OnBoarding() {
  return (
    
    <View style={{flex:1,justifyContent:'center',}}>
          <Onboarding
          showDone={false}
          showNext={false}
          showSkip={false}
        pages={[
          {
            backgroundColor: "#fff",
            image: <Image style={{width:windowWidth-30,height:150,marginTop:-100}} source={require("../assets/onboadingVote.webp")} />,
            title: <Text style={{fontSize:31,fontWeight:'600'}}>Cast Your Vote</Text>,
            subtitle: <Text style={{width:windowWidth-60,textAlign:'center',fontSize:16,lineHeight:25,fontWeight:'500'}}>Exercise your voting power;let your voice be heard with the right vote</Text>,
          },
          {
            backgroundColor: "#fff",
            image: <Image  style={{width:windowWidth/1.5,height:180,marginTop:-100}} source={require("../assets/accedit.png")} />,
            title: <Text style={{fontSize:31,fontWeight:'600'}}>Request Accreditation</Text>,
            subtitle: <Text style={{width:windowWidth-60,textAlign:'center',fontSize:16,lineHeight:25,fontWeight:'500'}}>Register and receive your voting ID,np matter where you are</Text>,
        
          },
          {
            backgroundColor: "#fff",
            image: <Image style={{width:windowWidth/1,height:180,marginTop:-100}} source={require("../assets/chart.webp")} />,
            title: <Text style={{fontSize:31,fontWeight:'600'}}>Monitor the Elections</Text>,
            subtitle: <Text style={{width:windowWidth-60,textAlign:'center',fontSize:16,lineHeight:25,fontWeight:'500'}}>Follow the election stats as voters vote in realtime, without missing out</Text>,
         
          },
        ]}
      />

       <View style={{width:windowWidth,justifyContent:'center',alignItems:'center'}}>
       <BigButton title="Create an Account" />
       <BigButton2 title="Log in" />
       </View>
    </View>
  );
}
