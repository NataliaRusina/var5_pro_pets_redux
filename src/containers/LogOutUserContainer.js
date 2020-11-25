import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import LogOutUser from "../components/LogOutUser";
import {logOutAction} from "../actions/UserPageActions";


function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        logOutUser: logOutAction
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(LogOutUser)