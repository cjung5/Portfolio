const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://changsoojung.buzz',
  title: 'CJ.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Changsoo Jung',
  role: 'Computer Science Ph.D. Student',
  description:
    'Interested in machine learning for computer vision.\n Pursuing vision research related to human data such as egocentric pose estimation and object interations',
  resume: 'https://www.linkedin.com/in/changsoo-jung-a83340108/',
  social: {
    linkedin: 'https://www.linkedin.com/in/changsoo-jung-a83340108/',
    github: 'https://github.com/cjung5',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: '6D Pose',
    description:
      "Predictiong objects' centroids and rotations in 3D through a 2D image",
    stack: ['Pytorch', 'Pytorch-lightning', 'Pytorch3D'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Egocentric Pose Estimation',
    description:
      '3D human pose estimation from an egocentric view image',
    stack: ['Pytorch', 'Pytorch-lightning'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Computer Graphics',
    description:
      'Intro to computer graphics',
    stack: ['C++'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'C++',
  'Pytorch',
  'Pytorch-lightning',
  'React',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'charlesjung.ml@gmail.com',
}

export { header, about, projects, skills, contact }
