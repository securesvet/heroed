import { Link } from "react-router-dom";
import { RegisterForm, LoginForm } from "./AuthForms";
import { Button } from "../ui/button";

const Register = () => {
  return <RegisterOrLogin variant="register" />;
};

const Login = () => {
  return <RegisterOrLogin variant="login" />;
};

const RegisterOrLogin = ({ variant }: { variant: "register" | "login" }) => {
  const isLogin = variant === "login";
  const link = isLogin ? "/signup" : "/login";
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <div className="text-xl font-bold">
        <h1>{isLogin ? "Sign in" : "Sign up"}</h1>
      </div>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <Link to={link}>
        <Button
          variant={"link"}
          className="hover:cursor-pointer whitespace-pre-line"
        >
          {isLogin ? (
            <p>
              Don't have an account?
              <br /> Register
            </p>
          ) : (
            <p>
              Already have an account?
              <br /> Login
            </p>
          )}
        </Button>
      </Link>
    </div>
  );
};

export { Register, Login };
