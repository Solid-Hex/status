import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";
import siteData from "../../content/siteData.json";
import favicon from "../images/favicon.ico"

const NotFoundPage = () => (
  <main>
    <Helmet>
      <title>404: Not found | {siteData.title}</title>
      <link rel="shortcut icon" type="image/ico" href={favicon}/>
    </Helmet>
    <header className="header">
      <h1>404: Not Found</h1>
    </header>
    <Footer/>
  </main>
)

export default NotFoundPage