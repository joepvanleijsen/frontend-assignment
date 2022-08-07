import { Fragment, FC, ReactElement } from 'react';
import Head from 'next/head';
import { APP_NAME } from '@config/index';
// import classNames from 'classnames';
// import Favicon from '@/components/Head/Favicon';

// Context
// import { useAppStateContext } from '@/context/AppContext';

export interface Meta {
	description: string;
	keywords: string;
	noIndex: boolean;
}

export interface PageProps {
	children: string | ReactElement | ReactElement[];
	title: string;
	meta?: Meta;
	canonical?: string;
}

const Page: FC<PageProps> = ({
	children,
	title,
	meta = {},
	canonical,
	// url,
}) => {
	const { description, keywords, noIndex = true } = meta;

	// TODO: get client name from app context and add it to <title /> togther with APP_NAME
	// const { client } = useAppStateContext();

	return (
		<Fragment>
			<Head>
				<meta charSet='utf-8' />
				<meta name='generator' content={APP_NAME} />
				{noIndex && <meta name='robots' content='noindex, nofollow' />}
				<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' />

				{title && <title>{title}</title>}
				{description && <meta name='description' content={description} />}
				{keywords && <meta name='keywords' content={keywords} />}
				{canonical && <link rel='canonical' href={canonical} />}
			</Head>

			{/* <Favicon favicon={website.favicon} /> */}

			{children}
		</Fragment>
	);
};

export default Page;
