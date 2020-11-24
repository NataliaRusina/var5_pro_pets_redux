import {bindActionCreators} from "redux";
import {registerUserAction} from "../actions/RegistrationActions";
import {connect} from "react-redux";
import SignUpForm from "../components/Registration_form";


function mapDispatchToProps (dispatch){
    return bindActionCreators({
        registerUser: registerUserAction

    }, dispatch);

}

export default connect(null, mapDispatchToProps)(SignUpForm);