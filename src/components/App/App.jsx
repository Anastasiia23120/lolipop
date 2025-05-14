import css from "./App.module.css";
import LoginForm from "../LoginForm/LoginForm";

const App = () => {
  const handleSubmit = (userData) => {
    console.log(userData);
  };

  return (
    <div>
      <h1 className={css.title}>Please login to your account!</h1>
      <LoginForm onLogin={handleSubmit} />
    </div>
  );
};

export default App;
