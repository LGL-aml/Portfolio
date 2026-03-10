import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lam Gia | Software Engineer Portfolio",
  description: "Portfolio của Lam Gia - Software Engineer chuyên về React, Next.js, Spring Boot và AI applications.",
  keywords: [
    "Lam Gia",
    "Lam Gia Developer",
    "Portfolio Lam Gia",
    "React Developer Vietnam",
    "Next.js Developer"
  ],
  authors: [{ name: "Lam Gia" }],
  creator: "Lam Gia",
  metadataBase: new URL("https://lamgia.id.vn"),

  openGraph: {
    title: "Lam Gia Portfolio",
    description: "Software Engineer Portfolio - React, Next.js, Spring Boot",
    url: "https://lamgia.id.vn",
    siteName: "Lam Gia Portfolio",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Lam Gia",
    "jobTitle": "Software Engineer",
    "url": "https://lamgia.id.vn",
    "sameAs": [
      "https://github.com/LGL-aml",
      "https://www.linkedin.com/in/lamgia",
      "https://www.facebook.com/lamgia20"
    ],
    "description": "Software Engineer chuyên về React, Next.js, Spring Boot và AI applications.",
    "knowsAbout": [
      "React",
      "Next.js",
      "Spring Boot",
      "Artificial Intelligence",
      "Software Engineering"
    ]
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.add('light');
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                }
              })();
            `,
          }}
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
