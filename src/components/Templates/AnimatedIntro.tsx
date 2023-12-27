type Props = {
  isAnimated: boolean;
};

export default function AnimatedIntro(props: Props) {
  const { isAnimated } = props;
  return (
    <div
      className={`${
        isAnimated ? "block" : "hidden"
      } w-full grid place-items-center bg-black text-slate-100 h-screen `}
    >
      {/* <div className="animate animate-wiggle relative rounded-full h-64 w-64 mx-auto md:h-96 md:w-96">
        <Image
          priority
          src="/profile/thomas.jpg"
          sizes="200"
          fill
          alt="avatar"
          className="rounded-full object-cover object-top shadow-2xl "
        />
      </div> */}
      <div className="animate animate-fadeIn text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Thomas E. Beckford</h1>
        <h2 className="text-2xl md:text-4xl font-bold animate-flashingMixBlendMode">
          Senior Frontend Engineer
        </h2>
      </div>
    </div>
  );
}
