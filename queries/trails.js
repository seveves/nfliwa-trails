export const TRAILS_QUERY = `
  query TrailsPage {
    site: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
    trail {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
    allTrails {
      id
      name
      summary
      state
    }
  }`;
