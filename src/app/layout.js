import "./globals.css";

export const metadata = {
  title: "Pushkar Pandey — Full-Stack Java Developer",
  description:
    "Portfolio of Pushkar Pandey, a Full-Stack Java Developer with 2+ years of experience building enterprise web applications with Spring Boot, Angular, React, and Next.js.",
  keywords: [
    "Pushkar Pandey",
    "Full-Stack Developer",
    "Java Developer",
    "Spring Boot",
    "Angular",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Pushkar Pandey" }],
  openGraph: {
    title: "Pushkar Pandey — Full-Stack Java Developer",
    description:
      "Crafting robust, scalable web applications from backend to frontend.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-grid" />
        {children}
      </body>
    </html>
  );
}
