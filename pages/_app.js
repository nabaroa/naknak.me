import React from 'react';
import App, { Container } from 'next/app';
import Link from 'next/link';

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
      <Container>
        <nav>
          <ul>
            <li className="example">
              <Link href="/home">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/bio">
                <a>Bio</a>
              </Link>
            </li>
            <li>
              <Link href="/cv">
                <a>CV</a>
              </Link>
            </li>
            <li>
              <Link href="/works">
                <a>Works</a>
              </Link>
            </li>
            <li>
              <Link href="/agenda">
                <a>Agenda</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/credits">
                <a>Credits</a>
              </Link>
            </li>

          </ul>
        </nav>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;