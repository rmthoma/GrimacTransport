export default (store) => ({
  path : 'gallery',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Gallery = require('../../views/GalleryView/GalleryView').default

      /*  Return getComponent   */
      cb(null, Gallery)

    /* Webpack named bundle   */
  }, 'gallery')
  }
})
