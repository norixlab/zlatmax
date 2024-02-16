'use client'
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
   
    User,
} from '@nextui-org/react';
import { HelpCircle, LayoutDashboard,  LogOut, Palette, Search, Settings, ShoppingBasket, UserRound } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const DropMenu = () => {
	const {data: session} = useSession()

    const logOut = () => {
        signOut({callbackUrl: '/login'})
    }
    
    return (
        <Dropdown>
            <DropdownTrigger>
                <button className="flex items-center outline-none hover:text-[#E8AA31] transition-colors duration-200 font-semibold text-[18px] gap-[15px]">
                    <Image src={'/assets/icons/user.svg'} width={22} height={27} alt="account" />
                    Личный кабинет
                </button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Custom item styles"
                className="p-3"
                itemClasses={{
                    base: [
                        'min-w-[200px]',
                        'text-xl',

                        'rounded-md',
                        'text-default-600',
                        'transition-opacity',
                        'data-[hover=true]:text-foreground',
                        'data-[hover=true]:bg-[#e8ab31b2]',
                        'dark:data-[hover=true]:bg-default-50',
                        'data-[selectable=true]:focus:bg-default-200',
                        'data-[pressed=true]:opacity-70',
                        'data-[focus-visible=true]:ring-default-500',
                    ],
                }}>
                <DropdownSection  showDivider>
                    <DropdownItem
                        isReadOnly
                        key="profile"
                        className="h-14 gap-2 opacity-100"
                        showDivider>
                        <User
                            name={`${session?.user?.firstName} ${session?.user?.lastName}`}
                            classNames={{
                                name: 'text-default-600',
                            }}
                            avatarProps={{
                                size: 'sm',
                                src: '',
                            }}
                        />
                    </DropdownItem>
                    <DropdownItem key="dashboard" startContent={<UserRound className="w-5" />}>
                        Профиль
                    </DropdownItem>

                    {session?.user?.role === 'admin' && (
                        <DropdownItem
                            key="dashboard"
                            startContent={<LayoutDashboard className="w-5" />}>
                            <Link href={'/dashboard'}>Админ панель</Link>
                        </DropdownItem>
                    )}
                    <DropdownItem key="settings" startContent={<Settings className="w-5" />}>
                        Настройки
                    </DropdownItem>
                    <DropdownItem className={session?.user?.role === 'admin' ? 'hidden' : ''}
                        key="new_project"
                        startContent={<ShoppingBasket className="w-5" />}>
                        Мои покупки
                    </DropdownItem>
                </DropdownSection>

                <DropdownSection aria-label="Preferences" showDivider>
                    <DropdownItem key="quick_search" startContent={<Search className="w-5" />}>
                        Быстрый поиск
                    </DropdownItem>
                    <DropdownItem
                        isReadOnly
                        key="theme"
                        className="cursor-default"
                        startContent={<Palette className="w-5" />}
                        endContent={
                            <select
                                className="z-10 outline-none w-23 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
                                id="theme"
                                name="theme">
                                <option>Системная</option>
                                <option>Темная</option>
                                <option>Светлая</option>
                            </select>
                        }>
                        Тема
                    </DropdownItem>
                </DropdownSection>

                <DropdownSection aria-label="Help & Feedback">
                    <DropdownItem
                        key="help_and_feedback"
                        startContent={<HelpCircle className="w-5" />}>
                        Обратная связь
                    </DropdownItem>

                    <DropdownItem
                        key="logout"
                        onClick={logOut}
                        startContent={<LogOut className="w-5" />}>
                        Выйти
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
};

export default DropMenu;
