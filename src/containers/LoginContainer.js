import SignInForm from "../components/Login_form";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {loginUserAction} from "../actions/LoginUserActions";

function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        loginUser: loginUserAction
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(SignInForm)