import { FC, ReactNode } from 'react';
import classNames from 'classnames';

const mapFontWeight = {
	regular: 'font-weight-regular',
	medium: 'font-weight-medium',
	semibold: 'font-weight-semibold',
};

const mapSize = {
	sm: {
		element: 'h5',
		className: 'text-lg',
		weight: mapFontWeight.medium,
	},
	md: {
		element: 'h4',
		className: 'text-2xl',
		weight: mapFontWeight.medium,
	},
	lg: {
		element: 'h3',
		className: 'text-3xl',
		weight: mapFontWeight.semibold,
	},
	xl: {
		element: 'h2',
		className: 'text-4xl',
		weight: mapFontWeight.semibold,
	},
	xxl: {
		element: 'h1',
		className: 'text-5xl',
		weight: mapFontWeight.semibold,
	},
};

type FontWeight = 'regular' | 'medium' | 'semibold';
type HeadingSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
	children: ReactNode;
	size: HeadingSize;
	level?: HeadingLevel;
	weight?: FontWeight;
	uppercase?: boolean;
	className?: string;
}

const Heading: FC<HeadingProps> = ({ children, size = 'sm', level = 1, weight, uppercase, className, ...props }: HeadingProps) => {
	// console.log('Heading()', [level, size, uppercase, className]);

	// Check if 'level' is provided, then overwrite default <H[number] /> element defined in mapSize
	const element = Number.isInteger(level) && level <= 6 ? `h${level}` : mapSize[size].element;
	const sizeClassName = mapSize[size].className;
	const fontWeightClassName = weight ? mapFontWeight[weight] : mapSize[size].weight;
	const Component = element;

	return (
		<Component className={classNames('text-heading', { uppercase: uppercase }, sizeClassName, fontWeightClassName, className)} {...(props as any)}>
			{children}
		</Component>
	);
};

export default Heading;
