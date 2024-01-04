import { Box, Heading, Image } from "@chakra-ui/react";
import { PizzaMenuItem } from "./mocks/mock";

export const MenuItem = ( props: PizzaMenuItem  ) => {
	console.log(props, "props")

	// * Early return statement
	if (props.soldOut && props.price < 10) return null;

	return (
		// <Box className='pizza'>
		<Box className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
			<Image src={props.photoName} alt="pizzaImage"/>
			<Box>
				<Heading as="h3">{props.name}</Heading>
				<Box fontSize="1.2rem">{props.ingredients}</Box>
				<Box fontSize="1rem">{props.soldOut ? "Sold Out" : props.price}</Box>
			</Box>
		</Box>
	);
};
