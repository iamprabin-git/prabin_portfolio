import './globals.css';

export const metadata = {
  title: 'Prabin Dangol',
  description: 'Web Developer & Graphic Designer in lalitpur, Nepal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white">
        {children}
      </body>
    </html>
  );
}