import { FC, Fragment } from 'react';
import NextImage from 'next/image';
import classNames from 'classnames';

interface Image {
	src: string;
}

interface AvatarProps {
	image: Image;
	initials: string;
	className?: string;
}

const Avatar: FC<AvatarProps> = ({
	image,
	initials,
	// size = 'base',
	className,
}) => {
	const handleLoadingComplete = () => {
		console.log('handleLoadingComplete()');
	};

	return (
		<figure className={classNames('relative flex w-9 h-9 bg-secondary rounded-full overflow-hidden justify-center items-center select-none', className)}>
			{image?.src ? (
				<NextImage
					src={image.src}
					layout='fill'
					objectFit='contain'
					// objectPosition="center"
					title={initials}
					alt={initials}
					onLoadingComplete={handleLoadingComplete}
					className='absolute inset-0'
				/>
			) : (
				<span className='text-sm font-light text-white'>{initials}</span>
			)}
		</figure>
	);
};

export default Avatar;
