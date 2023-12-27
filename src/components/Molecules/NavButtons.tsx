import Button from "../Atoms/Button";

export default function NavButtons() {
  return (
    <div className="gap-2 hidden md:flex">
      <Button
        className="bg-blue-800"
        rounded
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/thomas-beckford-07520775/",
            "_blank"
          );
        }}
      >
        Check my profile
      </Button>
    </div>
  );
}
