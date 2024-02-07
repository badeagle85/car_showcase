import { Footer, Navbar } from "@/compomemts";
import "./globals.css";

export const metadata = {
  title: "차량 판매사이트",
  description: "카니발 갖고싶다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
