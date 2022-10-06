/*eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + '-walcart' : 'ecommerce'}</title>
        <meta name="description" content="Content Generated by Next App" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between bg-stone-50 ">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between  shadow-md">
            <Link href="/">
              <a className=" text-lg font-bold">Walcart</a>
            </Link>

            <div>
              <Link href="/">
                <a className="p-2">cart</a>
              </Link>
              <Link href="login">
                <a className="">login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer>Footer</footer>
      </div>
    </>
  );
}
