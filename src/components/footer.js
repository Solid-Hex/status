import React from "react";
import siteData from "../../content/siteData.json";

const Footer = () => (
    <footer className="footer">
      &copy;{new Date().getFullYear()} <a href={siteData.url}>{siteData.title}</a> Built with <a href={siteData.gatsby.url}>{siteData.gatsby.title}</a>. Hosted on <a href={siteData.netlify.url}>{siteData.netlify.title}</a>.
    </footer>
)

export default Footer