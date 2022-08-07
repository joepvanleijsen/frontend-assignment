import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDoc extends Document {
	render() {
		return (
			<Html>
				<Head></Head>
				<body className='text-base font-body text-body bg-body antialiased'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default CustomDoc;
