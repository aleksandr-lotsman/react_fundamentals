import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getUserRole} from "../../store/user/selectors";
import {ADMIN_ROLE} from "../../constants";

const PrivateRoute = ({ children }) => {
	const navigate = useNavigate();
	const userRole = useSelector(getUserRole);

	return userRole === ADMIN_ROLE ? children : navigate('/courses');
}