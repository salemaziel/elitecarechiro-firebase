module.exports = {
    pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
    title: 'Elite Care Chiropractics', // Navigation and Site Title
    titleAlt: 'Elite Care Chiropractics', // Title for JSONLD
    description: 'Providing Chiropractic services for Encinitas, Leucadia & Greater San Diego area',
    url: 'https://elitecarechiropractic.com', // Domain of your site. No trailing slash!
    siteUrl: 'https://elitecarechiropractic.com', // url + pathPrefix
    siteLanguage: 'en', // Language Tag on <html> element
    logo: 'static/logo/logo.png', // Used for SEO
    banner: 'static/logo/logo.png',
    // JSONLD / Manifest
    favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
    shortName: 'Elite Care', // shortname for manifest. MUST be shorter than 12 characters
    author: 'Linda Janelli', // Author for schemaORGJSONLD
    themeColor: '#0397d7',
    backgroundColor: '#0397d7',
    twitter: '@elitecarechiropractic', // Twitter Username
    app: {
      url: 'https://elitecarechiro.salemaziel.design/signin',
      title: 'Elite Care Chiropractic',
      description: 'Providing Chiropractic services for Encinitas, Leucadia & Greater San Diego area',
      titleTemplate: 'Elite Care Chiropractic',
      subtitle:
        'Providing Chiropractic services for Encinitas, Leucadia & Greater San Diego area',
      copyright: '© All rights reserved.',
      disqusShortname: '',
      postsPerPage: 4,
      image: '../static/logo/logo.png',
      twitterUsername: '@elitecarechiropractic',
    },
    home: {
      url: 'https://elitecarechiro.salemaziel.design',
      title: 'Elite Care Chiropractic',
      description: 'Providing Chiropractic services for Encinitas, Leucadia & Greater San Diego area',
      titleTemplate: 'Elite Care Chiropractic',
      subtitle:
        'Providing Chiropractic services for Encinitas, Leucadia & Greater San Diego area',
      copyright: '© All rights reserved.',
      disqusShortname: '',
      postsPerPage: 4,
      image: '../static/logo/logo.png',
      twitterUsername: '@elitecarechiropractic',
    },
  };