import Button from "../Atoms/Button";

export default function BookAMeetingButton() {
  return (
    <Button
      leftIcon="📅"
      onClick={() => {
        window.open("https://calendly.com/tebeckford/30min", "_blank");
      }}
      className="bg-blue-800 hover:bg-blue-600 rounded-lg border-none text-white drop-shadow-lg transition-all w-full"
    >
      Schedule a 30-min call
    </Button>
  );
}
