import { connect } from 'react-redux'

import HomeView from '../views/HomeView/HomeView'

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
  isMobile : state.device
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
