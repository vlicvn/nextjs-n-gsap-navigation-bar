import Image from "next/image";
import heroImg from "../../public/hero.jpg"; // Dosyayı import ediyoruz (TS desteği ve blur için en iyisi)

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Image
        src={heroImg}
        alt="Hero Background"
        fill
        priority // Geç yüklenmeyi ve LCP uyarısını engelleyen en kritik prop
        placeholder="blur" // Yüklenene kadar estetik bir blur efekti gösterir
        className="object-cover"
      />
    </div>
  );
}