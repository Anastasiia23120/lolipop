import css from "./LoginForm.module.css";
import { useId } from "react";

const LoginForm = ({ onLogin }) => {
  const loginId = useId();
  const passwordId = useId();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log(evt);

    const form = evt.target;
    const { login, password } = form.elements;

    // console.log(login, password);
    // console.log(login.value, password.value);
    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor={loginId}>Login</label>
        <input className={css.input} type="text" name="login" id={loginId} />

        <label htmlFor={passwordId}>Password</label>
        <input
          className={css.input}
          type="text"
          name="password"
          id={passwordId}
        />

        <button className={css.button} type="submit">
          Log in
        </button>
      </form>
    </>
  );
};

export default LoginForm;
