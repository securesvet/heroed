import { Link } from "react-router-dom";
import { RegisterForm, LoginForm } from "../../components/AuthForms";
import { Button } from "../../components/ui/button";
import { FaTelegram } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

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
    <div className="flex justify-center items-center">
      <div className="h-screen w-72 flex flex-col items-center justify-center gap-4">
        <div className="text-4xl font-bold">
          <h1>{isLogin ? "Sign in" : "Sign up"}</h1>
        </div>
        <div className="h-72">{isLogin ? <LoginForm /> : <RegisterForm />}</div>
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
