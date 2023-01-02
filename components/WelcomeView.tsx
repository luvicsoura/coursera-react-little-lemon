import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function WelcomeView() {
	return (
		<View style={styles.view}>
			<Text style={[styles.text, styles.title]}>Welcome to Little Lemon!</Text>
			<Text style={styles.text}>
				Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		paddingVertical: 32,
		paddingHorizontal: 16,
		flexDirection: 'column',
	},
	text: {
		color: 'white',
		fontSize: 16,
		textAlign: 'center',
	},
	title: {
		fontSize: 32,
		marginBottom: 38
	}
});