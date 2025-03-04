"use client";

import Image from "next/image";
const deliveryIcons = [
  {
    iconURL: "/images/1.png",
    title: "족발 보쌈",
  },
  {
    iconURL: "/images/1.png",
    title: "돈까스 회",
  },
  {
    iconURL: "/images/1.png",
    title: "피자",
  },
  {
    iconURL: "/images/1.png",
    title: "중식",
  },
  {
    iconURL: "/images/1.png",
    title: "치킨",
  },
  {
    iconURL: "/images/1.png",
    title: "버거",
  },
  {
    iconURL: "/images/1.png",
    title: "분식",
  },
  {
    iconURL: "/images/1.png",
    title: "디저트",
  },
  {
    iconURL: "/images/1.png",
    title: "찜 찌개",
  },
  {
    iconURL: "/images/1.png",
    title: "전체보기",
  },
];

export default function DeliveryCard() {
  return (
    <>
      <div className="w-full flex flex-col bg-white p-2 ml-2">
        <div className="flex w-full justify-between">
          <div className="flex gap-2 items-center">
            <h2 className="text-xl font-bold">알뜰.한집배달</h2>
            <p className="text-sm text-gray-700">
              <span className="bg-teal-300/20">배민1</span>은 365일 할인 중!
            </p>
          </div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </div>
        <div className="mt-2 grid grid-cols-5 gap-8 content-center items-center justify-center">
          {deliveryIcons.map((value: any, index: number) => (
            <div key={index} className="w-full flex flex-col items-center jc">
              <Image
                alt={value.title}
                width={48}
                height={48}
                src={value.iconURL}
              />
              <p>{value.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
