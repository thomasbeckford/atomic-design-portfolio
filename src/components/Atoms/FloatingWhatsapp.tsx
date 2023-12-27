import Image from "next/image";

export default function FloatingWhatsapp() {
  return (
    <div
      onClick={() => {
        window.open(
          'https://api.whatsapp.com/send?phone=5491134908167&text=Hola!%20Quisiera%20mas%20informacion%20sobre%20el%20plan%20de%20SoyMenu"',
          "_blank"
        );
      }}
      className="fixed w-10 h-10 z-50 bg-white rounded-full bottom-0 right-0  m-5 md:m-10 md:w-12 md:h-12 animate animate-bounce
"
    >
      <Image sizes="200px" src="/whatsapp_logo.png" alt="Whatsapp Logo" fill />
    </div>
  );
}
