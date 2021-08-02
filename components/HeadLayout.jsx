import Head from 'next/head';

export default function HeadLayout({ title, keywords, description, children }) {
    return (
        <Head>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <title>{title}</title>
        </Head>
    )
}

HeadLayout.defaultProps = {
    title: 'Eventseries | Find the hottest events now!',
    keywords: 'event, music, party, ticket',
    description: 'Find the latest and the most popular events'
}