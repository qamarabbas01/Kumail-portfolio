import SkillCard from '../layouts/SkillCard'

const About = () => {

  const skill = "w-11/12";
  const skill2 = "w-4/5";
  const skill3 = "w-2/3";

  return (
    <section aria-labelledby="about-heading" className='min-h-screen flex flex-col justify-around lg:gap-8 lg:px-32 px-5 bg-backgroundColor'>
      <div className='mt-16'>
        <h1 id="about-heading" className='text-4xl font-semibold text-center lg:mt-2'>About me</h1>
      </div>

      <div className='-mb-10'>
        <div className='mb-10'>
          <h2 className='text-3xl font-semibold'>Hi — I&apos;m Kumail Abbas, Front-end Developer</h2>
          <p className='mt-4 lg:mt-2 text-gray-700'>
            I build responsive, accessible interfaces using modern web technologies. I focus on
            writing clean, maintainable code and creating delightful user experiences. My
            stack includes HTML, CSS / Tailwind, JavaScript (ES6+), and React.
          </p>
          <ul className='mt-3 list-disc ml-5 text-gray-700'>
            <li>Responsive web design and component-driven UIs</li>
            <li>Accessible, semantic markup and cross-browser testing</li>
            <li>Performance-minded build and delivery with Vite</li>
          </ul>
        </div>

        <div>
          <h2 className='text-3xl font-semibold'>My Skills</h2>
          <div className='mt-4 space-y-3'>
            <SkillCard title="HTML" width={skill} val="95%" />
            <SkillCard title="CSS / Tailwind" width={skill2} val="85%" />
            <SkillCard title="JavaScript / React" width={skill3} val="75%" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
