import LoginForm from "@/app/components/user/LoginForm"
import Image from "next/image"
const Login = () => {
  return (
    <div className="container flex flex-col justify-center  w-[500px] grow ">
      <div className=" text-center p-[30px] my-[110px] rounded-[15px] shadow-[0px_2px_10px_0_rgba(50,50,50,0.15)] ">
        

        
       
        <h2 className="flex gap-4 justify-center items-center text-3xl text-gray-600 font-bold mb-[30px]">
        <Image src={'/assets/icons/knife.svg'} width={58} height={10} alt="" className="knifeRotate"/>
        Вход
        <Image src={'/assets/icons/knife.svg'} width={58} height={10} alt=""/>
        </h2>
      <LoginForm />
      </div>
    </div>
  )
}
  
export default Login
