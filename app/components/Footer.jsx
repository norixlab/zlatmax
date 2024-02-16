import Link from "next/link";
import Image from "next/image";
import { Checkbox } from "@nextui-org/react";
import { ChevronRight, Clock3, Mail, MapPin, Phone } from "lucide-react";

// footer links
const info = [
  {
    name: "Златоустовские ножи в Москве и Московской области",
    path: "#",
  },
  { name: "Ножевые стали", path: "#" },
  { name: "О нас", path: "#" },
  {
    name: "Условия оплаты и доставки",
    path: "#",
  },
  {
    name: "Политика конфиденциальности",
    path: "#",
  },
];
const support = [
  { name: "Контактная информация", path: "#" },
  { name: "Возврат товара", path: "#" },
  { name: "Карта сайта", path: "#" },
];
const other = [
  { name: "Подарочные сертификаты", path: "#" },
  { name: "Партнеры", path: "#" },
  { name: "Товары со скидкой", path: "#" },
];
const account = [
  { name: "Личный кабинет", path: "#" },
  { name: "История заказов", path: "#" },
  { name: "Мои закладки", path: "#" },
  { name: "Рассылка новостей", path: "#" },
];

// first section links
const LinkBlock = ({ data, title }) => {
  return (
    <div className="  max-w-[270px] flex flex-col gap-[20px] mb-[30px]">
      <h3 className="font-semibold text-[18px] mb-[10px]">{title}</h3>
      {data.map((item, index) => (
        <ul key={index}>
          <li>
            <Link
              href={item.path}
              className=" text-gray-300 hover:text-[#E8AA31] transition-all "
            >
              {item.name}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};
// component
const Footer = () => {
  return (
    <footer className="bg-[#141414] text-white py-[100px] text-[18px]">
      <div className="container  grid grid-cols-4 ">
        <LinkBlock data={info} title={"ИНФОРМАЦИЯ"} />
        <LinkBlock data={support} title={"СЛУЖБА ПОДДЕРЖКИ"} />
        <LinkBlock data={other} title={"ДОПОЛНИТЕЛЬНО"} />
        <LinkBlock data={account} title={"ЛИЧНЫЙ КАБИНЕТ"} />
      </div>
      <div className="container ">
        <hr className="bg-white" />
        <div className="grid grid-cols-4 py-[30px]">
          <div>
            <h3 className="mb-[30px] font-semibold ">КОНТАКТЫ</h3>
            <ul className="flex flex-col gap-[15px]  text-gray-300 max-w-[270px]">
              <li className="flex gap-[16px] ">
                <Phone className="w-4"/>
                <Link href={"#"} className="hover:text-[#E8AA31] transition-all">8 (800) 777-49-67</Link>
              </li>
              <li className="flex gap-[16px]">
                <Clock3 className="w-4 text-gray-300" />
                <p>Пн-Пт 7:00 - 16:00 (МСК)</p>
              </li>
              <li className="flex gap-[16px] ">
                <MapPin className=" text-gray-300" />
                <p>Златоуст, ул. Шоссейная, д. 1, офис «6Б»</p>
              </li>
              <li className="flex gap-[16px] ">
                <Mail className="w-4 text-gray-300" />
                <Link href={"#"} className="hover:text-[#E8AA31] transition-all">info@zlatmax.ru</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-[30px] font-semibold ">
              ПОЛЕЗНЫЕ ССЫЛКИ
            </h3>
            <Link
              href={"#"}
              className="text-[18px] text-gray-300 hover:text-[#E8AA31] transition-all"
            >
              Способы оплаты и доставки
            </Link>
          </div>
          <div className="max-w-[320px] text-balance leading-[27px] ">
            <h3 className="mb-[30px] font-semibold ">
              НАША ГАРАНТИЯ
            </h3>
            <p className="text-gray-300">
              Недовольны своей покупкой? Вы можете вернуть ее в течении 30 дней
              с даты получения, согласно{" "}
              <Link
                href={"#"}
                className="text-[#E8AA31]  opacity-100 hover:text-white transition-all"
              >
                нашим правилам
              </Link>
            </p>
          </div>
          <div>
            <h3 className="mb-[15px] font-semibold ">
              НОВОСТНАЯ РАССЫЛКА
            </h3>
            <p className="mb-[25px] text-gray-300">Подпишитесь прямо сейчас!</p>
            <form className="flex items-center w-full mb-[22px] ">
              <input
                placeholder="example@gmail.com"
                className="outline-none w-full px-[20px] pt-[9px] pb-[10px] rounded-l-[3px] border-white border-[2px] border-r-0 bg-gray-800 text-white"
              />
              <button className="newsLaterBtn flex items-center  justify-center bg-[#E8AA31] hover:bg-[#f8c154] transition-all h-[50px] px-[15px] rounded-r-[3px]">
                <ChevronRight className="newsLaterIcon" />
              </button>
            </form>
            <div className="flex gap-[10px]">
            <Checkbox
              radius="sm"
              classNames={{
                base: ["items-start"],
                wrapper: [ "mt-[5px]"],
                label: ["text-white"],
              }}
            />
              <Link href={"#"} className="hover:text-[#E8AA31] text-gray-300">
                Я прочитал Условия соглашения и согласен с условиями
              </Link>
              </div>
          </div>
        </div>
        <div className="flex items-center gap-[20px] mb-[30px]">
          <Image
            src={"/assets/icons/facebook.svg"}
            width={43}
            height={43}
            alt="facebook"
            className="hover:scale-110 transition-all"
          />
          <Image
            src={"/assets/icons/viber.svg"}
            width={43}
            height={43}
            alt="viber"
            className="hover:scale-110 transition-all"
          />
          <Image
            src={"/assets/icons/telegram.svg"}
            width={43}
            height={43}
            alt="telegram"
            className="hover:scale-110 transition-all"
          />
          <Image
            src={"/assets/icons/whatsapp.svg"}
            width={43}
            height={43}
            alt="whatsapp"
            className="hover:scale-110 transition-all"
          />
        </div>
      </div>

      <div className="container">
      <hr className="bg-white" />
      <div className="pt-[30px] flex justify-between text-[14px] leading-[27px] text-gray-300">
        <div className="max-w-[760px]">
          <p>Все материалы, размещенные на сайте, носят справочный характер и не являются 
публичной офертой, определяемойположениями Статьи 437 Гражданского кодекса Российской Федерации. 
При копировании материалов гиперссылка на www.zlatmax.ru обязательна!</p>
        </div>
        <div className="pt-[7px]">
            <p>Златоустовские ножи www.zlatmax.ru ©</p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
