import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import Menu from "./Menu";
import Header from "./Header";

const App = () => {
	return (
		<Box className="container"
		maxWidth="80rem"
		margin=" 0 auto"
		display="flex"
		flexDirection="column"
		alignItems=" center"
		gap=" 4.8rem"
		>
			<Header />
			<Menu />
			<Footer/>
		</Box>
	);
};

export default App;
