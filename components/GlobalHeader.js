import Head from 'next/head'

export default props => (
  <>
    <Head>
      <title>ajdeleon.tech</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {props.children}
  </>
)
