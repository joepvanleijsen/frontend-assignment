export const quickHelpData = {
    general: [
        {
            image: '/images/help/logo/terminal.svg',
            title: 'Command line tool',
            text: 'The command line tool is a natural interface for engineers to set up, delete and manage privacy streams',
            link: 'https://github.com/strmprivacy/cli',
        },
        {
            image: '/images/help/logo/doc.svg',
            title: 'Documentation',
            text: 'Have a look around in our documentation, to see how to set up STRM Privacy for your application.',
            link: 'https://docs.strmprivacy.io/docs/latest/overview/about',
        },
        {
            image: '/images/help/logo/slack.svg',
            title: 'Join our community',
            text: 'Hold meetings, share docs, and make decisions together with your team in Slack.',
            link: 'https://strmprivacy.slack.com/archives/C02FTQUFMA6',
        },
        {
            image: '/images/help/logo/support.svg',
            title: 'Missing something?',
            text: 'Please reach out if you are missing a driver or integration for your implementation.',
            link: 'https://strmprivacy.io/about#contact',
        },

    ],
    drivers: [
        {
            image: '/images/help/logo/java.svg',
            title: 'Java driver',
            text: 'Our driver for the Java platform is what you would expect: Java-based and performance focused.',
            link: 'https://github.com/strmprivacy/java-driver',
        },
        {
            image: '/images/help/logo/python.svg',
            title: 'Python driver',
            text: 'The Python driver makes it easy to integrate STRM Privacy into your *.py app or notebook.',
            link: 'https://pypi.org/project/strmprivacy-driver/',
        },
        {
            image: '/images/help/logo/nodejs.svg',
            title: 'NodeJS (Javascript)',
            text: 'A strongly performance-focused driver for NodeJS and other Javascript platforms. Compiled from Typescript.',
            link: 'https://github.com/strmprivacy/nodejs-driver',
        },
        {
            image: '/images/help/logo/rust.svg',
            title: 'Rust driver',
            text: 'A strongly performance-focused driver for NodeJS and other Javascript platforms. Compiled from Typescript.',
            link: '#',
        },
    ],
    integrations: [
        {
            image: '/images/help/logo/kafka.svg',
            title: 'Kafka streaming',
            text: 'With our Kafka integration you can stream your privacy streams directly to an existing Kafka topic.',
            link: 'https://docs.strmprivacy.io/docs/0.1.0/quickstart/exporting-kafka.html',
        },
        {
            image: '/images/help/logo/aws.svg',
            title: 'AWS S3 batch',
            text: 'The S3 storage integration writes your privacy streams to an AWS S3 storage bucket in the convenient JSONL format.',
            link: 'https://docs.strmprivacy.io/docs/0.1.0/quickstart/receiving-s3.html',
        },
        {
            image: '/images/help/logo/gcp.svg',
            title: 'GCP batch',
            text: 'The GCP storage integration writes your privacy streams to a Google Cloud storage bucket in the convenient JSONL format.',
            link: '#',
        },
        {
            image: '/images/help/logo/socket1.svg',
            title: 'WebSocket (debug)',
            text: 'To help you easily debug during development you can use this simple WebSocket integration.',
            link: '#',
        },
    ]
}