import { Text, VStack } from "@chakra-ui/react";

const Footer = () => {
	const currentTime = new Date().getHours();
	const openHours = 12;
	const closeHours = 22;
  const storeStatus: boolean = currentTime >= openHours && currentTime <= closeHours

	return (
		<VStack as="footer" >
			<Text>The current time is {new Date().toLocaleTimeString()} </Text>
      <br/>
      {/* One way to inline style a HTML element*/}
      <Text style={{color: "red"}}> We are currently {storeStatus ? " open" : " sclosed"}</Text>
			
		</VStack>
	);
};

export default Footer;
