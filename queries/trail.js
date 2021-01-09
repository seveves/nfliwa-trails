export const TRAIL_QUERY = `
query TrailPage($id: ItemId) {
  site: _site {
    favicon: faviconMetaTags {
      attributes
      content
      tag
    }
  }
  trail(filter: {id: {eq: $id}}) {
    seo: _seoMetaTags {
      attributes
      content
      tag
    }
    id
    description
    name
    segment
    state
    summary
    track
  }
}

  `;
