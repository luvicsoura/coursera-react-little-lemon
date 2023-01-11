import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export function WelcomeView() {
	return (
		<ScrollView
			style={styles.view}
			indicatorStyle='white'
			keyboardDismissMode='on-drag'
		>
			<View style={styles.header}>
				<Image
					resizeMode='contain'
					style={styles.logo}
					source={require('littlelemonrestaurant/assets/img/littleLemonLogo.png')}
					accessibilityLabel="Little Lemon Logo"
					accessible
				/>
				<Text style={[styles.text, styles.title]}>Little Lemon</Text>
			</View>
			<Text style={[styles.text, styles.description]}>
				Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
			</Text>
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
	header: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		flexWrap: 'nowrap',
	},
	logo: {
		width: 100,
		height: 200,
		marginRight: 24,
	},
	title: {
		fontSize: 36,
	},
});