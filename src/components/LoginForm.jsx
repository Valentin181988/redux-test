import { useDispatch } from "react-redux/es/exports";
import { logIn } from "../redux/slices/userSlice";

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        console.log(form.elements.login.value);
        dispatch(logIn(form.elements.login.value));
        form.reset();
    };  

    return (
            <form onSubmit={handleSubmit}>
                <input type="text" name="login" />
                <br/>
                <button type="submit">Log in</button>
            </form>
    );
};