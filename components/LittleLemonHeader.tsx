import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function LittleLemonHeader() {
	return (
		<View style={styles.container}>
			<Text style={styles.text} numberOfLines={3}>
				<Text style={styles.name}>Little Lemon</Text>
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0.1,
		backgroundColor: '#EE9972',
	},
	text: {
		paddingHorizontal: 40,
		paddingVertical: 12,
		fontSize: 30,
		color: 'black',
		textAlign: 'center',
	},
	name: {
		fontWeight: 'bold',
	},
});