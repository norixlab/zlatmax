"use client";
import { Input } from "@nextui-org/react";
import { AtSign, Eye, EyeOff, KeyRound, UserRound } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spinner } from "@nextui-org/react";
import { toast } from "react-toastify";
import axios from "axios";
import Link from "next/link";
const FormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "Минимальная длина 2 символа")
      .regex(
        new RegExp("^[a-zA-Zа-яА-Я]+$"),
        "Специальные символы не допускаются"
      ),
    lastName: z
      .string()
      .min(2, "Минимальная длина 2 символа")
      .regex(
        new RegExp("^[a-zA-Zа-яА-Я]+$"),
        "Специальные символы не допускаются"
      ),
    email: z.string().email("Введите валидный email адрес"),
    password: z
      .string()
      .min(6, "Пароль не может быть короче 6 символов")
      .max(30, "Максимальная длина 30 символов"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

//   component
const RegisterForm = () => {
    const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormSchema),
  });
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const toggleVisible = () => {
    setIsVisiblePass((prev) => !prev);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const { confirmPassword, ...user } = data;
    try {
      await axios.post("/api/auth/register", user);
      toast.success("Успешная регистрация");
      router.push('/login')
      setLoading(false);
    } catch (error) {
      toast.error(error.response?.data?.error);
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        errorMessage={errors.firstName?.message}
        {...register("firstName")}
        type="text"
        label="Имя"
        variant="bordered"
        startContent={<UserRound className="w-5 text-gray-500" />}
      />
      <Input
        errorMessage={errors.lastName?.message}
        {...register("lastName")}
        type="text"
        label="Фамилия"
        variant="bordered"
        startContent={<UserRound className="w-5 text-gray-500" />}
      />
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
      <Input
        errorMessage={errors.confirmPassword?.message}
        {...register("confirmPassword")}
        type={isVisiblePass ? "text" : "password"}
        label="Подтвердите пароль"
        variant="bordered"
        startContent={<KeyRound className="w-5 text-gray-500" />}
      />
      <div className="pt-[20px]">
        <button
          className="w-full flex items-center justify-center gap-3 rounded-[10px] h-[55px] hover:bg-[#e8ab31d5] transition-all duration-200  bg-[#E8AA31] text-white font-semibold text-center"
          type="submit"
        >
          {loading ? <Spinner size="sm" color="default"/> : 'Регистрация'}
        </button>
      </div>
      <div>
        <p className="text-center text-gray-500">
          Есть аккаунт?&nbsp;
          <Link
            href={"/login"}
            className="text-[#E8AA31] hover:text-blue-700 transition-colors duration-200"
          >
            Войти
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
