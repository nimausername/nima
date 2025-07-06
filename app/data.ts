
type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type Resume = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Woltanic GmbH - Web Development',
    description:
      'Web development and IT support for Woltanic GmbH, a leading renewable energy company in Germany. Mainly NextJs and React based.',
    link: 'https://woltanic.de/',
    video:
      'https://res.cloudinary.com/dwaogvuok/video/upload/v1745884414/1_u9hvcb.mp4',
    id: 'project1',
  },
  {
    name: 'Alpak SAN. TİC. LTD. ŞTİ. - Web Development',
    description: 'Food sector web development for Alpak SAN. TİC. LTD. ŞTİ. Mainly NextJs and React based.',
    link: 'https://alpak.vercel.app/',
    video:
      'https://res.cloudinary.com/dwaogvuok/video/upload/v1745885244/2_alwg7q.mp4',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Woltanic GmbH',
    title: 'Web Developer - IT Support',
    start: '03/2024',
    end: 'Present',
    link: 'https://woltanic.de',
    id: 'work1',
  },
  {
    company: 'WonderPower GmbH',
    title: 'Web Developer',
    start: '09/2023',
    end: '01/2024',
    link: 'https://wonderpower.de',
    id: 'work2',
  },
  {
    company: 'TikTok',
    title: 'Technical Support Specialist',
    start: '08/2023',
    end: '11/2023',
    link: 'https://tiktok.com',
    id: 'work3',
  },
  {
    company: 'TÜBİTAK',
    title: 'Research Staff',
    start: '02/2022',
    end: '09/2022',
    link: 'https://tubitak.gov.tr/',
    id: 'work4',
  },
  {
    company: 'Apple',
    title: 'Mac Genius',
    start: '03/2020',
    end: '02/2021',
    link: 'https://apple.com/',
    id: 'work5',
  },
  {
    company: 'Çanakkale Onsekiz Mart University',
    title: 'Graphic Web Designer',
    start: '06/2019',
    end: '01/2020',
    link: 'https://www.comu.edu.tr/',
    id: 'work6',
  },
  {
    company: 'Nafsem L.T',
    title: 'Graphic Web Designer',
    start: '06/2019',
    end: '01/2020',
    link: '#',
    id: 'work7',
  },
  {
    company: 'Ajans Well',
    title: 'Graphic Web Designer',
    start: '05/2017',
    end: '11/2017',
    link: '#',
    id: 'work8',
  },
  {
    company: 'Totil International Consulting',
    title: 'Graphic Designer',
    start: '03/2016',
    end: '03/2017',
    link: '#',
    id: 'work9',
  },
  {
    company: 'Totil Arabic Language School',
    title: 'Web Designer',
    start: '02/2016',
    end: '05/2017',
    link: '#',
    id: 'work10',
  },
  {
    company: 'Venus Organization',
    title: 'Web Designer',
    start: '03/2015',
    end: '05/2016',
    link: '#',
    id: 'work11',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Uncoding My Journey: A Decade in Web Development',
    description: 'A journey through the highs and lows of web development.',
    link: '/blog/my-journey',
    uid: 'blog-1',
  },
  {
    title: 'Music Discovery: Adam Ulanicki - Some Say',
    description: 'A sonic journey through ambient soundscapes and emotional depth.',
    link: '/blog/adam-ulanicki-some-say',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/nimausername/',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/nimausername',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/nimausername/',
  },
]

export const EMAIL = 'iam@nimakhabbazi.com'

export const RESUME: Resume = {
  label: 'Download Resume',
  link: '/resume.pdf'
}
