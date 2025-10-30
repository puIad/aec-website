import "../globals.css";
import Image from 'next/image';

export default function Bottom() {
  const iconClass = "bg-white rounded-full p-1 md:p-2"; 
  const imgClass = "w-6 h-6 md:w-10 md:h-10 object-contain";

  const links = [
    { href: "https://www.facebook.com/share/1F69yBsnta/?mibextid=wwXIfr", src: "/face.png", alt: "Facebook" },
    { href: "https://www.linkedin.com/company/vicenp/", src: "/linked.png", alt: "LinkedIn" },
    { href: "https://youtube.com/@vic_enp?si=fAXI-qWDFng_W9yv", src: "/youtube.png", alt: "YouTube" },
    { href: "https://www.tiktok.com/@vic.enp?_t=ZM-8vQEohzQ3O9&_r=1", src: "/tiktok.png", alt: "TikTok" },
    { href: "https://www.instagram.com/vic.enp?igsh=MWZlYnNkemhwZ2huMQ==", src: "/insta.png", alt: "Instagram" },
  ];

  return (
    <div className=" z-50 flex flex-col items-center justify-center mt-20">
      <div className="flex gap-3 flex-wrap justify-center">
        {links.map(({ href, src, alt }, index) => (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer" aria-label={alt} title={alt}>
            <div className={iconClass}>
              <Image className={imgClass} src={src} alt={alt} width={40} height={40} />
            </div>
          </a>
        ))}
      </div>
      <div className="m-2">
        <p className="text-center text-white  text-xl md:text-2xl">VIC ENP</p>
      </div>
    </div>
  );
}
