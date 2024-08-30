import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface formData {
  email: string;
  password: string;
}
const Login: React.FC = () => {
  const navigate = useNavigate();

  const [isVerified, setIsVerified] = useState(false);

  const onChange = (value: string | null) => {
    console.log(value);
    if (value) setIsVerified(true);
    else setIsVerified(false);
  };

  const schema: ZodType<formData> = z.object({
    email: z.string().email({ message: "Enter valid email" }),
    password: z
      .string()
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm, {
        message: "Enter valid password",
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({ resolver: zodResolver(schema) });

  const submitData = (data: formData) => {
    console.log(data);
    navigate("/home");
  };

  return (
    <div className="rounded-3xl max-w-[1200px] bg-cardBg border-border border flex flex-col md:gap-16 text-base md:text-3xl p-4 md:p-11 m-auto">
      <h1 className="text-3xl md:text-5xl font-semibold m-auto text-highlight">
        Login
      </h1>
      <form
        onSubmit={handleSubmit(submitData)}
        className="flex flex-col gap-6 md:gap-14 py-6 md:p-16"
      >
        <input
          type="text"
          placeholder="Email"
          id="email"
          className="bg-body border-border border p-3 md:p-4 placeholder:text-darkText rounded-2xl outline-none"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-red-500 mx-2 px-2 text-sm">
            {errors.email.message}
          </span>
        )}

        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-body border-border border p-3 md:p-4 placeholder:text-darkText rounded-2xl outline-none"
          {...register("password")}
        />
        {errors.password && (
          <span className="text-red-500 mx-2 px-2 text-sm">
            {errors.password.message}
          </span>
        )}
        <div className="flex justify-center items-center">
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="Submit"
          disabled={!isVerified}
          className="text-highlight disabled:text-cardBg font-semibold w-fit m-auto bg-buttonBG border-border border p-3 md:p-5 px-6 md:px-8 mt-7 md:mt-0 rounded-full"
        />
      </form>
    </div>
  );
};

export default Login;
