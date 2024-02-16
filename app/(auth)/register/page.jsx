import RegisterForm from "@/app/components/user/RegisterForm"
import Image from "next/image"

const Register = () => {
  return (
    <div className="container flex flex-col justify-center  w-[500px] grow ">
      <div className=" text-center p-[30px] my-[30px] rounded-[15px] shadow-[0px_2px_10px_0_rgba(50,50,50,0.15)] ">
      <h2 className="flex gap-4 justify-center items-center text-3xl text-gray-600 font-bold mb-[30px]">
        <Image src={'/assets/icons/knife.svg'} width={58} height={10} alt="" className="knifeRotate"/>
        Регистрация
        <Image src={'/assets/icons/knife.svg'} width={58} height={10} alt=""/>
        </h2>
      <RegisterForm />
      </div>
    </div>
  )
}

export default Register
