'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import { Badge } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,

} from '@nextui-org/react';
import { Search } from 'lucide-react';
import Cart from './icons/Cart';
import Favorite from './icons/Favorite';
import Location from './icons/Location';
import { LogIn } from 'lucide-react';
import DropMenu from './user/DropMenu';
import { useSession } from 'next-auth/react';
const topLinks = [
    { path: '#', name: 'О нас' },
    { path: '#', name: 'Оплата и доставка' },
    { path: '#', name: 'Новости' },
    { path: '#', name: 'Контакты' },
];
const bottomLinks = [
    { path: '/catalog', name: 'Каталог ножей' },
    { path: '#', name: 'Клинковое оружие' },
    { path: '#', name: 'Сувенирные изделия' },
    { path: '#', name: 'Фонари ARMYTEK' },
    { path: '#', name: 'Сопуствующие товары' },
];
const Header = () => {
	const pathname = usePathname();
    const {data: session} = useSession()


  return (
      <header>
          {/* header top */}
          <div className="bg-[#141414] h-[70px] text-white flex items-center">
              <div className="container flex items-center justify-between">
                  <nav>
                      <ul className="flex gap-[60px]">
                          {topLinks.map((link) => (
                              <li key={link.name}>
                                  <Link
                                      href={link.path}
                                      className={`${
                                          pathname === link.path ? 'text-[#E8AA31]' : ''
                                      } hover:text-[#E8AA31] transition-colors duration-300`}>
                                      {link.name}
                                  </Link>
                              </li>
                          ))}
                      </ul>
                  </nav>
                  {session?.user ? (
                  <DropMenu />
                   ):(

                      <Link href={'/login'} className="flex items-center rounded-[3px] py-[8px] px-[10px] border-[2px] border-[#E8AA31] text-[#E8AA31] hover:border-white hover:text-white transition-colors duration-200 font-semibold text-[14px] gap-3">
                          <LogIn size={18}/>
                          Войти
                      </Link>
                  )} 
              </div>
          </div>
          {/* header center */}
          <div className="h-[90px] bg-[#ECF1F2] flex items-center">
              <div className="container flex justify-between items-center">
                  <div className="flex gap-[160px]">
                      <Link href={'/'}>
                          <Image src={'/logo.svg'} width={190} height={43} alt="logo" />
                      </Link>
                      <Input
                          classNames={{
                              base: ['w-[377px]'],
                              innerWrapper: ['pl-[8px]'],
                              inputWrapper: [
                                  'rounded-[3px]',
                                  'h-[41px]',
                                  'border-gray-400',
                                  'border',
                                  'bg-[#dde3e4]'
                              ],
                              input: ['ml-[4px]', 'text-[14px]'],
                          }}
                          type="text"
                          placeholder="Поиск"
                          startContent={<Search size={15} className=" text-gray-500" />}
                          variant="bordered"
                      />
                  </div>
                  <div className="flex items-center gap-[30px]">
                      <div className="flex gap-[55px]">
                          <div className="flex items-center gap-[10px]">
                              <Location />
                              <span className="font-semibold text-[18px]">Москва</span>
                          </div>
                          <div>
                              <div className="flex gap-[17px] items-center">
                                  <Link
                                      href={'tel:88007770000'}
                                      className="font-semibold text-[18px] hover:text-[#E8AA31] transition-colors duration-200">
                                      8-800-777-00-00
                                  </Link>

                                  <Dropdown
                                      placement="bottom-end"
                                      classNames={{
                                          content: ['rounded-[3px]', 'bg-[#ECF1F2]'],
                                      }}>
                                      <DropdownTrigger>
                                          <button className=" outline-0">
                                              <Image
                                                  src={'/assets/icons/arrow-gold.svg'}
                                                  width={16}
                                                  height={10}
                                                  alt=''
                                              />
                                          </button>
                                      </DropdownTrigger>

                                      <DropdownMenu aria-label="Profile Actions" variant="light">
                                          <DropdownItem
                                              textValue="номер телефона: 8-800-777-01-01"
                                              key="profile"
                                              isReadOnly
                                              className="">
                                              <Link
                                                  href={'tel:+79999999999'}
                                                  className="font-semibold text-[18px] hover:text-[#E8AA31] transition-colors duration-200">
                                                  8-800-777-01-01
                                              </Link>
                                          </DropdownItem>
                                          <DropdownItem
                                              textValue="номер телефона: 8-800-777-02-02"
                                              isReadOnly
                                              key="settings">
                                              <Link
                                                  href={'tel:+79999999999'}
                                                  className="font-semibold text-[18px] hover:text-[#E8AA31] transition-colors duration-200">
                                                  8-800-777-02-02
                                              </Link>
                                          </DropdownItem>
                                      </DropdownMenu>
                                  </Dropdown>
                              </div>

                              <button className="text-[#E8AA31] font-bold text-[18px]">
                                  Заказать звонок
                              </button>
                          </div>
                      </div>
                      <div className="flex gap-[20px] items-center">
                          <div className="flex gap-[30px] items-center">
                              <div className="cursor-pointer">
                                  <Favorite />
                              </div>
                              <div className="cursor-pointer flex items-center">
                                  <Badge
                                      content="0"
                                      className="bg-[#E8AA31] text-white text-[10px] cursor-pointer top-[5px]">
                                      <Cart />
                                  </Badge>
                              </div>
                          </div>
                          <div className="flex flex-col gap-[5px]">
                              <span>0 p.</span>
                              <button className="text-[#E8AA31] cursor-pointer">
                                  Оформить заказ
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* header bottom */}
          <div className="bg-[#141414] h-[70px] text-white flex items-center ">
              <div className="container ">
                  <nav>
                      <ul className="flex justify-evenly gap-[30px] pl-[16px]">
                          {bottomLinks.map((link) => (
                              <li key={link.name}>
                                  <Link
                                      href={link.path}
                                      className={`${
                                          pathname === link.path ? 'active' : 'linkHeaderBottom'
                                      }  relative pb-[21px]  text-[18px] hover:text-[#E8AA31] transition-colors duration-300`}>
                                      {link.name}
                                  </Link>
                              </li>
                          ))}
                      </ul>
                  </nav>
              </div>
          </div>
      </header>
  );
}

export default Header