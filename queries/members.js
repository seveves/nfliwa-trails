export const MEMBERS_QUERY = `
  query MembersPage {
    site: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
    allMembers(orderBy: name_ASC) {
      id
      name
      description
      image {
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
    }
  }`;
