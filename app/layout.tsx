import "./global.css";
import Sidebar from "./component/sidebar";
import { personalData } from "../data/page-data";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Farhan Resume</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/titlelogo.png" />
      </head>

      <body>
        <div className="flex flex-col sm:flex-row">
          <Sidebar data={personalData} />
          <main className="grow-full p-8 sm:p-16 w-full sm:basis-2/3  ml-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
