import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { getCssText } from '../stitches.config'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta tags */}
        <meta name="keywords" content="nft, multi-chain, aggregator" />
        <meta name="keywords" content="NFT, AGGREGATOR, MARKETPLACE" />

        {/* Favicon */}
        <link
          rel="shortcut icon"
          type="image/svg"
          href="/favicon.ico"
        />

        {/* Reservoir meta tags */}
        <meta property="unick:title" content="Unick Market" />
        <meta property="unick:icon" content="/favicon.ico" />
        <meta property="unick:icon"
        content="https://marketplace.unick.io/unickLogo.png"
        />
        <meta
          property="unick:token-url-mainnet"
          content="/collection/ethereum/${contract}/${tokenId}"
        />
        <meta
          property="unick:token-url-goerli"
          content="/collection/goerli/${contract}/${tokenId}"
        />
        <meta
          property="unick:token-url-polygon"
          content="/collection/polygon/${contract}/${tokenId}"
        />
        <meta
        property="unick:token-url-optimism"
        content="/collection/optimism/${contract}/${tokenId}"
        />
        <meta
        property="unick:token-url-arbitrum"
        content="/collection/arbitrum/${contract}/${tokenId}"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

