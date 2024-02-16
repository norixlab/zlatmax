"use client";
import Link from "next/link";
import { Input } from "@nextui-org/react";
import { AtSign, Eye, EyeOff, KeyRound, UserRound } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spinner } from "@nextui-org/react";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";

const FormSchema = z.object({
  email: z.string().email("Введите валидный email адрес"),
  password: z.string({
    required_error: "Укажите ваш пароль",
  }),
});

//   component
const LoginForm = () => {

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormSchema),
  });
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const router = useRouter();

  const toggleVisible = () => {
    setIsVisiblePass((prev) => !prev);
  };

  const onSubmit = async (data) => {
    setLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (!result.ok) {
      toast.error(result?.error);
      setLoading(false);
      return;
    }

    toast.success("С возвращением 👋");
    setLoading(false);
    
    router.push("/");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        errorMessage={errors.email?.message}
        {...register("email")}
        type="email"
        label="Почта"
        variant="bordered"
        startContent={<AtSign className="w-5 text-gray-500" />}
      />
      <Input
        errorMessage={errors.password?.message}
        {...register("password")}
        type={isVisiblePass ? "text" : "password"}
        label="Пароль"
        variant="bordered"
        startContent={<KeyRound className="w-5 text-gray-500" />}
        endContent={
          isVisiblePass ? (
            <EyeOff className="cursor-pointer text-gray-600" onClick={toggleVisible} />
          ) : (
            <Eye className="cursor-pointer text-gray-600" onClick={toggleVisible} />
          )
        }
      />

      <div className="py-[20px]">
        <button
          className="w-full flex items-center justify-center gap-3 rounded-[10px] h-[55px] hover:bg-[#e8ab31d5] transition-all duration-200  bg-[#E8AA31] text-white font-semibold text-center"
          type="submit"
        >
          {loading ? <Spinner size="sm" color="default" /> : "Войти"}
        </button>
      </div>
      <div className="text-center">
        <Link href={"#"} className="text-[#E8AA31] hover:text-blue-700 transition-colors duration-200">Забыли пароль?</Link>
      </div>
      <div>
        <p className="text-center text-gray-500">
          Еще нет аккаунта?&nbsp;
          <Link
            href={"/register"}
            className="text-[#E8AA31] hover:text-blue-700 transition-colors duration-200"
          >
            Регистрация
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
