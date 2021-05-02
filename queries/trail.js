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
    id
    description
    name
    segment
    images {
      responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
    }
    state
    statedescription
    summary
    track
  }
}

  `;
