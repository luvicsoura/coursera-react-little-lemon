import { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import { TextButton } from './TextButton';

export const  LoginScreen = ({ navigation }: { navigation: any}) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const login = useCallback(() => {
		navigation.navigate('Welcome');
	}, []);

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.headerText}>Welcome to Little Lemon</Text>
			<Text style={styles.regularText}>
				Login to continue
			</Text>
			<TextInput
				placeholder='email'
				keyboardType='email-address'
				value={email}
				style={styles.textInput}
				onChangeText={setEmail}
			/>
			<TextInput
				placeholder='password'
				value={password}
				style={styles.textInput}
				onChangeText={setPassword}
				secureTextEntry
			/>
			<TextButton onPress={login}>
				Log in
			</TextButton>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerText: {
		padding: 40,
		fontSize: 30,
		color: '#333',
		textAlign: 'center',
	},
	regularText: {
		fontSize: 24,
		padding: 20,
		marginVertical: 8,
		color: '#333',
		textAlign: 'center',
	},
	textInput: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		fontSize: 16,
		borderColor: 'EDEFEE',
		backgroundColor: 'white',
	},
});

