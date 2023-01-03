import { FlatList, FlatListProps, SectionList, SectionListProps, StyleSheet, Text, View } from 'react-native';

type MenuItem = {
	name: string;
	price: string;
	id?: string;
};

type Section = {
	title: string;
	data: MenuItem[];
}

type ItemsListProps = SectionListProps<MenuItem,Section>;

const menuItemsToDisplay: Section[] = [
	{
	  title: 'Appetizers',
	  data: [
		{ name: 'Hummus', price: '$5.00' },
		{ name: 'Moutabal', price: '$5.00' },
		{ name: 'Falafel', price: '$7.50' },
		{ name: 'Marinated Olives', price: '$5.00' },
		{ name: 'Kofta', price: '$5.00' },
		{ name: 'Eggplant Salad', price: '$8.50' },
	  ],
	},
	{
	  title: 'Main Dishes',
	  data: [
		{ name: 'Lentil Burger', price: '$10.00' },
		{ name: 'Smoked Salmon', price: '$14.00' },
		{ name: 'Kofta Burger', price: '$11.00' },
		{ name: 'Turkish Kebab', price: '$15.50' },
	  ],
	},
	{
	  title: 'Sides',
	  data: [
		{ name: 'Fries', price: '$3.00', id: '11K' },
		{ name: 'Buttered Rice', price: '$3.00' },
		{ name: 'Bread Sticks', price: '$3.00' },
		{ name: 'Pita Pocket', price: '$3.00' },
		{ name: 'Lentil Soup', price: '$3.75' },
		{ name: 'Greek Salad', price: '$6.00' },
		{ name: 'Rice Pilaf', price: '$4.00' },
	  ],
	},
	{
	  title: 'Desserts',
	  data: [
		{ name: 'Baklava', price: '$3.00' },
		{ name: 'Tartufo', price: '$3.00' },
		{ name: 'Tiramisu', price: '$5.00' },
		{ name: 'Panna Cotta', price: '$5.00' },
	  ],
	},
  ];

export function MenuItems() {

	const renderSectionHeader: ItemsListProps['renderSectionHeader'] = ({ section: { title }}) => (
		<View style={menuStyles.headerStyles}>
			<Text style={menuStyles.sectionHeader}>{title}</Text>
		</View>
	);

	return (
		<View style={menuStyles.container}>
			<SectionList
				sections={menuItemsToDisplay}
				keyExtractor={keyExtractor}
				renderItem={itemRenderer}
				renderSectionHeader={renderSectionHeader}
			/>
		</View>
	);
}

const keyExtractor: ItemsListProps['keyExtractor'] = ({id}, index) => `${id}_${index}`;

const itemRenderer: ItemsListProps['renderItem'] = ({ item }) => {
	return <Item name={item.name} price={item.price} />;
};

function Item({ name, price}: Pick<MenuItem, 'name' | 'price'>) {
	return (
		<View style={menuStyles.itemContainer}>
			<Text style={menuStyles.menuItemText}>{ name }</Text>
			<Text style={menuStyles.menuItemText}>{ price }</Text>
		</View>
	)
}

const menuStyles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerStyles: {
		backgroundColor: '#F4CE14',
	},
	sectionHeader: {
		color: '#000',
		fontSize: 34,
		flexWrap: 'wrap',
		textAlign: 'center',
	},
	itemContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 24,
		paddingHorizontal: 32,
	},
	menuItemText: {
		color: '#F4CE14',
	},
	
});