import { Box, Button, Text, VStack } from "@chakra-ui/react";

const Footer = () => {
	const currentTime = new Date().getHours();
	const openHours = 8;
	const closeHours = 22;
	const storeStatus: boolean =
		currentTime >= openHours && currentTime <= closeHours;

	return (
		<VStack as='footer' className="footer">
			<Text>You entered the page at: {new Date().toLocaleTimeString()} </Text>
			<br />
			{/* One way to inline style a HTML element*/}
			{storeStatus ? (
				<Box className="order">
					<Text style={{ color: "green" }}>
						We are currently open
					</Text>
					<Button className="btn" backgroundColor="#edc84b">
						Order Now
					</Button>
				</Box>
			) : (
				<Text style={{ color: "red" }}>
					We are currently closed
				</Text>
			)}
		</VStack>
	);
};

export default Footer;
