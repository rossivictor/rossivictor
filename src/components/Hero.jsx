import Button from './Button';

export default function Hero() {
  return (
    <div id="banner" className="container">
      <p>olá, visitante &#128075;</p>
      <h1 className="mb-2 text-vrblue dark:text-vryellow">
        me chamo Victor Rossi
      </h1>
      <h2>sou um desenvolvedor front-end com sólida experiência em marketing</h2>

      <div className="flex flex-row gap-6 mt-8">
        <Button>entrar em contato</Button>
        <Button>ver os projetos</Button>
      </div>
    </div>
  );
}
