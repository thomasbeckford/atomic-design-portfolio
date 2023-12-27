import Button from "../Atoms/Button";

export default function CheckProfileButton() {
  return (
    <Button
      leftIcon="👨🏾‍💻"
      className="bg-blue-500 hover:bg-blue-600 rounded-lg border-none text-white drop-shadow-lg transition-all  w-full"
      rounded
      onClick={() => {
        window.open(
          "https://www.linkedin.com/in/thomas-beckford-07520775/",
          "_blank"
        );
      }}
    >
      Check my LinkedIn
    </Button>
  );
}
