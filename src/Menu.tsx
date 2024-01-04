import { Grid, Heading, VStack } from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";
import { PizzaMenuItem, pizzaData } from "./mocks/mock";

const Menu = () => {
	return (
		<VStack alignItems='center' gap='4'>
			<Heading
				// as='h2'
				display='inline-block'
				padding='1rem 0'
				borderTop='2px solid black'
				borderBottom='2px solid black'
				fontSize='2.4rem'
				textTransform='uppercase'
				letterSpacing='3px'
				fontWeight='500'
				marginBottom="1rem"
			>
				Our Menu
			</Heading>
			<Grid gridTemplateColumns="1fr 1fr" gap="4.8rem">
			{pizzaData.map((e: PizzaMenuItem, index: number) => (
				<MenuItem
					key={index}
					name={e.name}
					ingredients={e.ingredients}
					photoName={e.photoName}
					price={e.price}
					soldOut={e.soldOut}
				/>
			))}
			</Grid>
		</VStack>
	);
};

export default Menu;
