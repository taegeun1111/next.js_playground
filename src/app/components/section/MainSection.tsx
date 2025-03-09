import DeliveryCard from "../card/DeliveryCard";
import MainCard from "../card/MainCard";

const obj = [
  {
    title: "배달",
    description: "세상은 넓고 맛집은 없다",
  },
  {
    title: "B마트",
    description: "장보기도 더 빠르게",
  },
  {
    title: "배민스토어",
    description: "배달은 지금 옵니다",
  },
];

export default function MainSection() {
  return (
    <section className="h-full flex flex-col">
      <div className="flex">
        {obj.map(
          (value: { title: string; description: string }, index: number) => (
            <MainCard
              key={index}
              title={value.title}
              description={value.description}
            />
          )
        )}
      </div>
      <DeliveryCard />
    </section>
  );
}
