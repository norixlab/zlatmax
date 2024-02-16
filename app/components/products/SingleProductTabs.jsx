"use client";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { products } from "@/lib/data";

const SingleProductTabs = ({ params }) => {
  const product = products.find((x) => x._id === params._id);
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        variant="underlined"
        classNames={{
          tabList:
            "gap-[60px] w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-[#E8AA31]",
          tab: "max-w-fit px-0 h-12 pb-[20px] text-[20px] text-gray-400 font-semibold data-[selected=true]:text-[#141414] data-[selected=true]:font-bold",
          //   tabContent: "text-[20px] ",
        }}
      >
        <Tab key="description" title="Описание">
          <div className="pt-[20px] text-[18px] leading-[27px] max-w-[1430px]">
            <p>
              Легкий удобный <strong>нож с клинком</strong>, имеющим пологие
              вогнутые линзовидные спуски на две трети ширины клинка, образующие
              тонкое, прекрасно режущее лезвие толщиной{" "}
              <strong>около 0,6 мм</strong> в районе подводов.{" "}
            </p>
            <br />
            <p>
              Обух клинка со спинкой рукояти имеет одну плавную дугообразную
              линию. На пяте перед рукоятью есть подпальцевый вырез для точных
              работ.
            </p>
            <br />
            <p>
              Необходимо проявлять некоторую осторожность при работе с большими
              боковыми нагрузками на лезвие ножа, ввиду небольшой толщины клинка
              в рабочей части.
            </p>
            <br />
            <p>
              {" "}
              Монтаж рукояти накладной плашечный. На навершии рукояти, функцию
              которого выполняет выступающий из под плашек хвостовик, имеется
              отверстие под темляк. Этот нож удобный помощник при работе с
              продуктами и охоте на боровую и водоплавающую дичь.
            </p>
          </div>
        </Tab>
        <Tab key="characteristics" title="Характеристика">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="reviews" title="Отзывы">
          <div className="pt-[20px] text-[18px] leading-[27px] flex items-center justify-between">
            {product?.reviews < 1 ? (
              <>
                <span>
                  У данного товара нет отзывов. Станьте первым, кто оставил
                  отзыв об этом товаре!
                </span>
                <button className="w-[230px] h-[50px] bg-black text-white font-semibold text-[18px] text-center rounded-[3px] hover:opacity-80 transition-all">
                  Написать отзыв
                </button>
              </>
            ) : (
              <div className="flex gap-[30px]">
                <div>
                  {/* {`${session?.user?.firstName} ${session?.user?.lastName}`} */}
                  <Avatar
                    showFallback
                    className="w-[80px] h-[80px] text-white"
                    src=""
                  />
                </div>
                <div>
                  <div>
                    <div>user name / rating</div>
                    <span>date</span>
                  </div>
                  <div>
                    <p>text</p>
                  </div>
                  <div>button</div>
                </div>
              </div>
            )}
          </div>
        </Tab>
        <Tab key="delivery" title="Доставка">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default SingleProductTabs;
