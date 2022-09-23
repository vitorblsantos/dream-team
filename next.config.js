module.exports = {
  analyticsId: process.env.VERCEL_ANALYTICS_ID || '',
  compress: true,
  devIndicators: {
    buildActivity: true
  },
  generateEtags: true,
  optimizeFonts: true,
  pageExtensions: ['js', 'jsx'],
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  trailingSlash: true
}
