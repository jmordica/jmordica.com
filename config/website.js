const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'jmordica.com', // Navigation and Site Title
  siteTitleAlt: 'Joe Mordica', // Alternative Site title for SEO
  siteUrl: 'https://jmordica.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'jmordica website',

  siteFBAppID: '123456744', // Facebook App ID
  userTwitter: '@jmordica', // Twitter Username
  ogSiteName: 'jmordica', // Facebook Site Name
  ogLanguage: 'en_EN', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
