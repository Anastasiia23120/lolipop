import css from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <>
      <form className={css.form}>
        <input className={css.input} type="text" name="login" />
        <input className={css.input} type="text" name="password" />
        <button className={css.button} type="submit">
          Log in
        </button>
      </form>
    </>
  );
};

export default LoginForm;
