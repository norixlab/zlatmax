"use client";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Input,
  Textarea,
  SelectItem,
  Select,
  Switch,
} from "@nextui-org/react";
// import Select from "react-select";
import { useForm } from "react-hook-form";
import { Package, PieChart, UsersRound } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const Dashboard = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    "Сопуствующие товары"
  );
  const options = [
    { value: "Каталог ножей", label: "Каталог ножей" },
    { value: "Клинковое оружие", label: "Клинковое оружие" },
    { value: "Сувенирные изделия", label: "Сувенирные изделия" },
    { value: "Фонари ARMYTEK", label: "Фонари ARMYTEK" },
    { value: "Сопуствующие товары", label: "Сопуствующие товары" },
  ];

  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSelectionChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const onSubmit = async (data) => {
    data.category = selectedCategory;
    console.log(data);
    console.log(data.category);
    console.log(selectedCategory);
  };

  return (
    <div className="container ">
      <div className="my-[50px] p-[30px] rounded-[5px] shadow-[0px_2px_10px_0_rgba(50,50,50,0.15)]">
      <h2 className="flex gap-4 justify-center items-center text-3xl text-gray-600 font-bold mb-[30px]">
        <Image src={'/assets/icons/knife.svg'} width={58} height={10} alt="" className="knifeRotate"/>
        Админ Панель
        <Image src={'/assets/icons/knife.svg'} width={58} height={10} alt=""/>
        </h2>
        <div className="border  border-gray-300 rounded-[5px] shadow-[0px_2px_10px_0_rgba(50,50,50,0.15)]">
          <div className="flex h-[600px] gap-[30px] w-full p-[30px]">
            <Tabs
              aria-label="Options"
              variant="underlined"
              classNames={{
                panel: "w-full",
                tabList:
                  "gap-[20px] flex flex-col items-start h-full  relative rounded-none p-0 pr-[30px] pt-[12px] border-r border-gray-300 ",
                cursor: "w-full  bg-[#E8AA31]" ,
                tab: "flex justify-start  px-0 text-[20px] pb-[10px] text-gray-400 font-semibold data-[selected=true]:text-[#141414] data-[selected=true]:font-bold",
              
              }}
            >
              <Tab
                key="statistic"
                title={
                  <div className="flex items-center w-full gap-[10px]">
                    <PieChart className="w-5 text-gray-500" />
                    <span>Статистика</span>
                  </div>
                }
              >
                <div className=" text-[18px]  max-w-[1430px]">
                  
                </div>
              </Tab>
              <Tab key="reviews" title={ <div className="flex items-center gap-[10px]">
                    <UsersRound className="w-5 text-gray-500" />
                    <span>Пользователи</span>
                  </div>}>
                <div className="pt-[20px] text-[18px] leading-[27px] flex items-center justify-between">
                  hi
                </div>
              </Tab>
              <Tab
                key="products"
                title={
                  <div className="flex items-center gap-[10px]">
                    <Package className="w-5 text-gray-500" />
                    <span>Товары</span>
                  </div>
                }
              >
                {/* inner tabs */}
                <div className="flex w-full flex-col">
                  <Tabs
                    aria-label="Options"
                    variant="underlined"
                    classNames={{
                      tabList:
                        "gap-[60px] w-full relative rounded-none p-0 border-b border-divider",
                      cursor: "w-full bg-[#E8AA31]",
                      tab: "max-w-fit px-0 h-11 pb-[20px] text-[20px] text-gray-400 font-semibold data-[selected=true]:text-[#141414] data-[selected=true]:font-bold",
                      
                    }}
                  >
                    <Tab key="all-products" title="Все товары">
                      <div className="pt-[20px] text-[18px] leading-[27px]  max-w-[1430px]">
                        
                      </div>
                    </Tab>
                    <Tab key="create-product" title="Создать товар">
                      <form className="flex" onSubmit={handleSubmit(onSubmit)}>
                        <div>image</div>
                        <div className="w-full flex flex-col gap-[10px]">
                          {/* product name */}
                          <Input
                            {...register("name")}
                            type="text"
                            label="Название товара"
                            classNames={{
                              input: "text-[18px]",
                            }}
                          />
                          {/* product description */}
                          <Textarea
                            {...register("description")}
                            label="Описание товара"
                            disableAutosize
                            classNames={{
                              base: "",
                              input: "resize-y min-h-[50px] text-[18px]",
                            }}
                          />

                          {/* category */}
                          <div>
                            <div className="flex items-center gap-[30px]">
                              <Select
                                label="Категория"
                                className="w-full"
                                {...register("category")}
                                selectedKeys={[selectedCategory]}
                                onChange={handleSelectionChange}
                              >
                                {options.map((animal) => (
                                  <SelectItem
                                    key={animal.value}
                                    value={animal.value}
                                  >
                                    {animal.label}
                                  </SelectItem>
                                ))}
                              </Select>

                              {/* subcategory */}
                              <Select
                                label="Подкатегория"
                                className="w-full"
                                {...register("category")}
                                selectedKeys={[selectedCategory]}
                                onChange={handleSelectionChange}
                              >
                                {options.map((animal) => (
                                  <SelectItem
                                    key={animal.value}
                                    value={animal.value}
                                  >
                                    {animal.label}
                                  </SelectItem>
                                ))}
                              </Select>
                            </div>
                          </div>
                          {/* price */}
                          <div className="flex gap-[30px] mb-[15px]">
                            <Input
                              {...register("price")}
                              type="text"
                              label="Цена товара"
                              classNames={{
                                input: "text-[18px]",
                              }}
                            />
                            <Input
                              {...register("bonus_percent")}
                              type="number"
                              min={0}
                              defaultValue={"0"}
                              label="Процент для бонуса"
                              classNames={{
                                input: "text-[18px]",
                              }}
                            />
                          </div>
                          {/* swicher */}
                          <div className="flex flex-col gap-2">
                            <Switch
                              isSelected={isSelected}
                              onValueChange={setIsSelected}
                            >
                              Airplane mode
                            </Switch>
                            <p className="text-small text-default-500">
                              Selected: {isSelected ? "true" : "false"}
                            </p>
                          </div>
                          <div className="flex items-center justify-end gap-[30px]">
                            <button
                              className="text-white rounded-[3px] bg-[#E8AA31] hover:opacity-80 transition-all h-[50px] px-[30px] text-[18px] font-semibold"
                              type="submit"
                            >
                              Сохранить
                            </button>
                            <button
                              onClick={() => reset()}
                              className="text-white rounded-[3px] bg-black hover:opacity-80 transition-all h-[50px] px-[30px] text-[18px] font-semibold"
                              type="reset"
                            >
                              Отмена
                            </button>
                          </div>
                        </div>
                      </form>
                    </Tab>
                    
                    <Tab key="reviews" title="Отзывы">
                      <div className="pt-[20px] text-[18px] leading-[27px] flex items-center justify-between"></div>
                    </Tab>
                    <Tab key="delivery" title="Доставка">
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </div>
              </Tab>
              {/* end inner tabs */}
              
              
              <Tab key="delivery" title="Доставка">
                <Card>
                  <CardBody>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
