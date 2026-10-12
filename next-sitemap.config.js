/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ferncleaning.co.nz',
  sourceDir: process.env.NEXT_BUILD_DIR || '.next',
  generateRobotsTxt: true,
  sitemapSize: 1000,
  exclude: ['/api/*', '/form-submitted/thank-you'],
};
