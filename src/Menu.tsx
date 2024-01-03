import { Heading, VStack } from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";
import { PizzaMenuItem, pizzaData } from "./mocks/mock";

const Menu = () => {
	return (
		<VStack alignItems='center' gap='4'>
			<Heading
				as='h2'
				display='inline-block'
				padding='1rem 0'
				border-top='2px solid currentColor'
				border-bottom='2px solid currentColor'
				font-size='2.4rem'
				text-transform='uppercase'
				letter-spacing='3px'
				font-weight='500'
			>
				Our Menu
			</Heading>
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
		</VStack>
	);
};

export default Menu;
