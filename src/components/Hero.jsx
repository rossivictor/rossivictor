import Button from './Button';

export default function Hero() {
  return (
    <div id="banner" className="container">
      <p>olá, visitante &#128075;</p>
      <h1 className="mb-2 font-serif text-vrblue/70 dark:text-vryellow/70">
        me chamo <span className="text-vrblue/100 dark:text-vryellow/100 ">Victor Rossi</span>
      </h1>
      <p className='font-light leading-snug text-3xl text-balance'>sou um desenvolvedor front-end com ótimas noções de design e sólida experiência em marketing</p>

      <div className="flex flex-row gap-6 mt-8">
        <Button>entrar em contato</Button>
        <Button>ver os projetos</Button>
      </div>
    </div>
  );
}
