// import '../styles/globals.css'
import type { AppProps } from 'next/app';

// Styles
import '../styles/app.scss';

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default App;
