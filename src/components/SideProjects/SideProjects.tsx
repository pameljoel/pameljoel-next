import React from "react";

const sideProjects = [
  {
    link: 'https://dev-bookmarker.netlify.app/',
    name: 'Dev bookmarker',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A earum eos ipsum maiores minima numquam omnis, rerum temporibus velit veritatis. Consequuntur ducimus earum facilis fugiat iusto mollitia nemo sapiente. Minus!',
    image: 'dev-bookmarker',
    github: '',
    info: 'requires authentication',
    tags: ['React', 'Next.JS', 'Firebase', 'Javascript', 'SCSS', 'Responsive']
  },
  {
    link: 'https://today-i-learned-j.netlify.app/',
    name: 'Today I learned',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A earum eos ipsum maiores minima numquam omnis, rerum temporibus velit veritatis. Consequuntur ducimus earum facilis fugiat iusto mollitia nemo sapiente. Minus!',
    image: 'today-i-learned',
    github: '',
    info: 'requires authentication',
    tags: ['React', 'Next.JS', 'Firebase', 'SCSS']
  },
  {
    link: 'https://happy-ramanujan-80c7ce.netlify.app/',
    name: 'Home Ratings',
    description: 'lorem ipsum dolor sit amet',
    image: 'home-ratings',
    github: '',
    info: 'requires authentication',
    tags: ['React', 'Next.JS', 'Firebase', 'SCSS', 'Chrome extension']
  },
  {
    link: 'https://gleaming-creponne-e2d8da.netlify.app/',
    name: 'Car promotions of the month',
    description: 'lorem ipsum dolor sit amet',
    image: 'car-promotions',
    github: '',
    tags: ['React', 'Next.JS', 'Firebase', 'SCSS']
  },
  {
    link: 'https://hungry-hodgkin-90b261.netlify.app/',
    name: 'Javascript cheatsheet',
    description: 'lorem ipsum dolor sit amet',
    image: 'js-cheatsheet',
    github: '',
    tags: ['React', 'Next.JS', 'Firebase', 'SCSS']
  },
  {
    link: 'https://unique-crisp-896c32.netlify.app/',
    name: 'Reflux',
    description: 'lorem ipsum dolor sit amet',
    image: 'reflux',
    github: '',
    tags: ['React', 'Next.JS', 'Firebase', 'SCSS']
  },
  {
    link: 'https://elated-goodall-cdb96c.netlify.app/',
    name: 'Bubble sort',
    description: 'lorem ipsum dolor sit amet',
    image: 'bubble-sort',
    github: '',
    tags: ['React', 'Next.JS', 'Firebase', 'SCSS']
  },
  {
    link: 'https://elated-wright-749fe7.netlify.app/',
    name: 'Animal videos',
    description: 'A youtube API experiment done as a fame for my daughter, click on an animal to see a random video of it',
    image: 'animals',
    github: '',
    tags: ['React', 'Next.JS', 'Firebase', 'SCSS']
  }
]

const SideProjects = () => {
  return (
    <>
      <header
        className="big-header"
        style={{ marginBottom: '0', paddingBottom: '100px' }}
      >
        <div className="big-header-content">
          <h1 className="">Side Projects</h1>
          <div className="subtitle">Projects done in my free time to solve problems</div>
        </div>
        <div className="big-header-background" />
      </header>
      <div className="container">
        {sideProjects && sideProjects.length > 1 && sideProjects.map(project => {
          return <a className="side-project" href={project.link} key={project.name}>
            <div className="side-project__image">
              <img src={`/images/side-projects/${project.image}.png`} alt={project.name} />
            </div>
            <div className="side-project__text">
              
            <div className="side-project__info">{project.info}</div>
            <h1 className="side-project__title">{project.name}</h1>
            <p className="side-project__description">{project.description}</p>

            {project.tags && project.tags.length > 0 && (
              <div className="side-project__tags">
                {project.tags.map(tag => {
                  return <span className="tag" key={tag}>{tag}</span>
                })}
              </div>
            )}
            </div>
          </a>
        })}
      </div>
    </>
  );
};



export default SideProjects;
