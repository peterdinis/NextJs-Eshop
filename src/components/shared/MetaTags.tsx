import Head from 'next/head';

interface IProps {
    title: string;
}

export const MetaTags: React.FC<IProps> = ({ title }: IProps) => {
    return (
        <Head>
            {title && (
                <>
                    <title>{title}</title>
                    <meta property="og:title" content={title} />
                </>
            )}
        </Head>
    )
}