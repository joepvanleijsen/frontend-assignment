import { FC, ReactElement } from 'react';
import classNames from 'classnames';

const mapSize = {
	sm: {
		fontSize: 'text-sm',
	},
	md: {
		fontSize: 'text-md',
	},
	lg: {
		fontSize: 'text-lg',
	},
	xl: {
		fontSize: 'text-xl',
	},
};

type TextSize = 'sm' | 'md' | 'lg' | 'xl' | 'base';
type TextElement = 'p' | 'span';

export interface TextProps {
	children: string | ReactElement;
	size: TextSize;
	element?: TextElement;
	className?: string;
}

const Text: FC<TextProps> = ({ children, element = 'p', size = 'md', className, ...props }) => {
	console.log('Text()', [size, className]);

	const fontSizeClassName = mapSize[size].fontSize;
	const Component = element;

	console.log('element: ', element);
	console.log('fontSizeClassName: ', fontSizeClassName);

	return (
		<Component className={classNames(fontSizeClassName, className)} {...props}>
			{children}
		</Component>
	);
};

export default Text;
