import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

type TextButtonProps = Omit<PressableProps, 'children'> & {
	children: string;
};

export const TextButton = ({
	children,
	style,
	...props
}: TextButtonProps) => (
	<Pressable style={TextButtonStyles.button} {...props}>
		<Text style={TextButtonStyles.buttonText}>{ children }</Text>
	</Pressable>
);

const TextButtonStyles = StyleSheet.create({
	button: {
		fontSize: 22,
		padding: 10,
		marginVertical: 8,
		margin: 100,
		backgroundColor: '#EE9972',
		borderColor: '#EE9972',
		borderWidth: 2,
		borderRadius: 50,
	},
	buttonText: {
		color: 'black',
		textAlign: 'center',
		fontSize: 25,
	}
});