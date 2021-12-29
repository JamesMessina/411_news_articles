import { connect } from 'react-redux'
import List from '../components/List'
import { fetchBands } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        bands: state.bands
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchBands : () => dispatch(fetchBands())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(List)