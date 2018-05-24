import { connect } from 'react-redux'
import { checkIsMobile } from '../modules/getDeviceInfo'

import PageLayout from '../layouts/PageLayout/PageLayout'

const mapDispatchToProps = {
  checkIsMobile
}

const mapStateToProps = (state) => ({
  //isMobile : state.counter
})

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout)
