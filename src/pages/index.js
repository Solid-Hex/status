import * as React from "react";
import { Helmet } from "react-helmet";
//import { setConfig } from 'react-hot-loader';
import Footer from "../components/footer";
import siteData from "../../content/siteData.json";
import favicon from "../images/favicon.ico"
//setConfig({ showReactDomPatchNotification: false });

const IndexPage = () => {
  return (
    <main>
      <Helmet>
          <meta name="description" itemprop="description" content={siteData.title}/>
          <meta name="keywords" itemprop="keywords" content={siteData.title}/>
          <title>{siteData.title}</title>
          <link rel="canonical" href={siteData.url}/>
          <link rel="shortcut icon" type="image/ico" href={favicon}/>
      </Helmet>
      <header className="header">
        <h1>
          {siteData.title}
        </h1>
      </header>
      <Footer/>
    </main>
  )
}

export default IndexPage