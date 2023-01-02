import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function LittleLemonFooter() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>
				All rights reserved by Little Lemon, 2022.
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#EE9972',
		paddingTop: 8,
		paddingBottom: 8,
	},
	text: {
		textAlign: 'center',
	}
});