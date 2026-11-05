import MyImage from "../../assets/me.jpg";

export default function HomePage() {
  return (
    <section className="flex justify-between">
      <div>
        <h1 className="text-4xl font-bold">Hello, I'm Kaung Htet Zan Thar</h1>
        <p className="max-w-2xl text-lg text-zinc-400">
          A Fresh graduate Frontend developer passionate about building great
          user experiences.
        </p>
      </div>
      <div>
        <img
          src={MyImage}
          alt="Kaung Htet Zan Thar"
          className="h-38 w-38 rounded-full object-cover"
        />
      </div>
    </section>
  );
}
