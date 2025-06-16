import './globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'Web Developer & Graphic Designer Portfolio',
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