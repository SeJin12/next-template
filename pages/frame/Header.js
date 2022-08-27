import Head from "next/head";

const Header = (props) => {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="contents" content={props.contents} />
        </Head>
    )
}

Header.defaultProps = {
    title: 'template-app',
    contents: 'meta contents'
};

export default Header;

