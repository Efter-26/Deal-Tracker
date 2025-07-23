import './globals.css';

export const metadata = {
  title: 'Deal Tracker',
  description: 'Track your deals and update status easily!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
