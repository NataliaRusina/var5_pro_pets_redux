import {bindActionCreators} from "redux";
import {editUserAction} from "../actions/UpdateUserActions";
import {connect} from "react-redux";
import Update from "../components/Update";

function mapStateToProps (state) {
    return{
        user: state.user,
        serviceMessage: state.serviceMessage
    }
}

function mapDispatchToProps (dispatch){
    return bindActionCreators({
        editUser: editUserAction

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Update)