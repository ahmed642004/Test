import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/NavBar";
import Container from "./_components/Container";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Jobwhee",
  description: "Find The Best Talent For Your Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Container>
          <NavBar />
          {children}
        </Container>
      </body>
    </html>
  );
}
