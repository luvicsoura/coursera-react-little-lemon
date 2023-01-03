import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';

export function WelcomeView() {
	const [ firstName, setFirstName ] = useState('');
	
	return (
		<ScrollView
			style={styles.view}
			indicatorStyle='white'
		>
			<Text style={[styles.text, styles.title]}>Welcome to Little Lemon!</Text>
			<Text style={[styles.text, styles.description]}>
				Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
			</Text>
			<TextInput
				style={styles.input}
				value={firstName}
				onChangeText={setFirstName}
				placeholder='First Name'
			/>
		</ScrollView>
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
		color: '#edefee',
		fontSize: 26,
		textAlign: 'center',
	},
	description: {
		marginBottom: 32,
	},
	title: {
		fontSize: 36,
		marginBottom: 38
	},
	input: { 
		height: 40, 
		margin: 12, 
		borderWidth: 1, 
		padding: 10, 
		fontSize: 16, 
		borderColor: 'EDEFEE', 
		backgroundColor: 'white', 
	},
});