import Button from "../Atoms/Button";
import Text from "../Atoms/Text";

export default function Contact() {
  const handleSubmit = () => {
    console.log("Submitted");
  };

  return (
    <div id="contact" className="bg-zinc-100 ">
      <div className="container mx-auto p-16 space-y-10 md:px-56">
        <Text className="text-center" size="title">
          Ready to Transform your growth
        </Text>

        <Text className="text-center" size="md">
          Let&apos;s talk about your project or partnership opportunities.
        </Text>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-3 mb-16 md:grid-cols-2">
            <div className="space-y-4">
              <Text size="md">Name</Text>
              <input
                type="text"
                className="w-full border-2 border-gray-200 rounded-md p-2"
              />
            </div>

            <div className="space-y-4">
              <Text size="md">Email</Text>
              <input
                type="email"
                className="w-full border-2 border-gray-200 rounded-md p-2"
              />
            </div>

            <div className="space-y-4">
              <Text size="md">Phone</Text>
              <input
                type="text"
                className="w-full border-2 border-gray-200 rounded-md p-2"
              />
            </div>

            <div className="space-y-4">
              <Text size="md">Company</Text>
              <input
                type="text"
                className="w-full border-2 border-gray-200 rounded-md p-2"
              />
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" rounded type="submit">
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
