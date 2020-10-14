import "../styles/globals.css";
import Head from "next/head";
import App from "next/app";
import Nav from "../components/AppLayout/Nav";
import Foot from "../components/AppLayout/Footer";
import '../styles/tailwind.css'
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className="lay">
      
          <Head>
            <title>Why Hello There</title>
            <link rel="stylesheet" type="text/css" href="/globals.css" />
          </Head>
      
            <Nav />
      
        
            <div className="main">
              <Component {...pageProps} />
            </div>
        
          <Foot />
      
        <style jsx>{`
          .lay {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          .main {
            min-height: 91vh;
            display: flex;
            justify-content: center;
         
            // align-items: center;
            margin-top: 1em;
          }
        `}</style>
      </div>
    );
  }
}

export default MyApp;
