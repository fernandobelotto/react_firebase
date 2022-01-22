import {
  Box, Button, ChakraProvider, Grid, Heading, theme
} from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { db } from "./firebase";

export const App = () => {
  async function getData() {
    const querySnapshot = await getDocs(collection(db, "users"));
    console.log(querySnapshot)
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  }


  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Heading>React and Firebase</Heading>
          <Button onClick={getData}>Fetch Data</Button>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
