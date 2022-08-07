import { FC, forwardRef, useRef, ReactElement } from 'react';
import classNames from 'classnames';
import { TextLinkType } from '@libs/interfaces';

// export enum TextLinkType {
// 	HIGHLIGHT = 'highlight',
// 	MUTED = 'muted',
// 	DEFAULT = 'default',
// }

export interface TextLinkProps {
	// children: ReactElement<any, string | JSXElementConstructor<any>>;
	children: string | ReactElement;
	href?: string;
	icon?: ReactElement;
	type?: TextLinkType;
	className?: string;
	onClick?: any;
	// ref?: any;
}

// const TextLink: FC<TextLinkProps> = ({ children, icon, type, className }) => {
const TextLink: FC<TextLinkProps> = forwardRef(({ onClick, href = '#', className, type, children }, ref) => {
	console.log('type:', type);
	let typeClasses;

	// const node = useRef<HTMLDivElement>(null);

	switch (type) {
		case TextLinkType.HIGHLIGHT:
			typeClasses = 'text-brand-orange hover:text-brand-blue';
			break;

		case TextLinkType.MUTED:
			typeClasses = 'text-gray-700 hover:text-gray-500';
			break;

		default:
			typeClasses = 'text-link hover:text-link';
			break;
	}

	return (
		<a
			href={href}
			onClick={onClick}
			// ref={ref}
			className={classNames('duration-300 transition-colors cursor-pointer', typeClasses, className)}
		>
			{children}
		</a>
	);
});

export default TextLink;
