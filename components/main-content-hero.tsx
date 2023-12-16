import BodyHero from "./body-hero";

export default function MainContentHero() {
  return (
    <div
      className="w-full h-[550px] overflow-hidden flex flex-row items-center justify-center py-[100px] px-2.5 box-border bg-[url('/maincontent--hero@3x.png')] bg-cover bg-no-repeat bg-[top]"
      style={{ flexShrink: 0 }}
    >
      <BodyHero />
    </div>
  );
}
