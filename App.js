import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signup from '../votingapp/Screens/Signup';
import Onboarding from './Screens/onboardingScreen';
import AdsFeed from './Screens/adsFeed';
import VoteScreen from './Screens/voteScreen';
import StatPresident from './Screens/StatsChart/SUGpresident';
import Prov from './Screens/StatsChart/pro';
import Scan from './Screens/Scaningscreen';
import CongraReq from './Components/Modals/congratualationRequest';
import CongraVote from './Components/Modals/congratulationvote';
import Candidates from './Screens/candidates';
import Info from './Screens/candidateInfo';
import Ballot from './Screens/ballot'
import Statpage from './Screens/statpage';
import BottomTab from './Navigation/bottomTab' ;
import Accred from './Screens/accrediation';



export default function App() {
  return (
   <BottomTab />
  );
}