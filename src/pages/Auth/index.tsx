import { Link } from "react-router-dom";
import { RegisterForm, LoginForm } from "@components/AuthForms";
import { FaTelegram } from "react-icons/fa";
import { Button } from "@ui/button";
import { Separator } from "@ui/separator";

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
    <div className="mt-[var(--header-height)] flex flex-col items-center justify-center h-[calc(100vh-var(--header-height))]">
      {/* Sign in / Sign up text */}
      <div className="text-4xl font-bold ">
        <h1>{isLogin ? "Sign in" : "Sign up"}</h1>
      </div>

      {/* Login form / Register form */}
      <div className="h-72">{isLogin ? <LoginForm /> : <RegisterForm />}</div>

      {/* Other Auth methods */}
      <div className="grid gap-4 place-items-center mt-5">
        <Link to={link}>
          <Button
            variant={"link"}
            className="hover:cursor-pointer whitespace-pre-line"
          >
            {isLogin ? (
              <p>
                Don't have an account?
                <br /> <span className="font-bold">Register</span>
              </p>
            ) : (
              <p>
                Already have an account?
                <br /> <span className="font-bold">Login</span>
              </p>
            )}
          </Button>
        </Link>
        <OtherAuthMethods />
      </div>
    </div>
  );
};

function OtherAuthMethods() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-15">
          <Separator />
        </div>
        <div className="mx-2">
          <p className="font-semibold">Or</p>
        </div>
        <div className="w-15">
          <Separator />
        </div>
      </div>
      <div className="flex gap-4 h-10">
        <Link to="https://www.telegram.org">
          <FaTelegram
            className="hover:cursor-pointer transition-opacity hover:opacity-50"
            size={32}
          />
        </Link>
      </div>
    </>
  );
}

export { Register, Login };
