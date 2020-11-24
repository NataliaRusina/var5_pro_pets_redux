import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import MyProPets from "../components/My_pro_pets";
import {loginSavedUserAction} from "../actions/LoginSavedUserActions";


function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loginSavedUser: loginSavedUserAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProPets)