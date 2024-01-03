import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { PizzaMenuItem } from "./mocks/mock";

export const MenuItem = (props: PizzaMenuItem) => {
	return (
		<Box className='pizza'>
			<Image src={props.photoName} />
			<Box>
				<Heading as="h3">{props.name}</Heading>
				<Text>{props.ingredients}</Text>
			</Box>
		</Box>
	);
};
