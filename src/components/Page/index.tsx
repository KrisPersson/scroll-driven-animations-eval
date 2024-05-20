import "./index.css";

type PageProps = {
  children: React.ReactNode;
  headline?: string;
  description?: string;
};

export default function Page({ children, headline, description }: PageProps) {
  return (
    <main>
      {headline && <h1 className="heading-class">{headline}</h1>}
      {description && <p className="p-description">{description}</p>}
      {children}
    </main>
  );
}
