import img from "../assets/img/hero1.jpg";
import Button from '../layouts/Button';

const Home = () => {
  return (
    <header id="home" className='min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-backgroundColor'>
      <div className='flex flex-col text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4 pt-56'>
        <h1 className='text-6xl font-semibold '>
          I&apos;m Kumail Abbas <br />
          <span className='text-brightColor'>Front-end</span> Developer
        </h1>
        <p className='text-lg font-medium text-gray-700'>
          I design and build fast, accessible web applications using React and modern
          front-end tooling. I&apos;m currently focused on component-driven UI and improving
          performance and accessibility for users.
        </p>
        <div>
          <Button title='Hire me' />
        </div>
      </div>
      <img className='mt-12 rounded-lg shadow-lg' width={570} src={img} alt="Kumail Abbas portrait" />
    </header>
  );
}

export default Home;
