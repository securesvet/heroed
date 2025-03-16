import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold mb-4">Sign up</h1>
      <div className="w-1/2">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
