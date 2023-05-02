// Link tag from next is used to create links to pages in a much efficient way than using the a tag. Like client-side rendering, pre-fetching pages, etc
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (<Layout>
        {/* Head tag from next is used to change the metadata of the site, like title and icon */}
        <Head>
            <title>First Blog Post</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* Script tag from next provides easy way to handle multiple third-party scripts */}
        {/* <Script src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() => {
                console.log(`scirpt has been loaded, window.FB has been populated`);
            }} /> */}

        <h1>First Post</h1>
        <h2><Link href="/">Back to Home</Link></h2>
        <Image
            src="/images/ProfilePic.jpg"
            height={1280}
            width={920}
            alt="My Profile Pic"
        />
    </Layout>
    )
}