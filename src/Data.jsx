import { nanoid } from 'nanoid';
import { BiCalendarPlus, BiTimeFive } from 'react-icons/bi';
import { GoReport } from 'react-icons/go';
import { AiFillSetting, AiFillHome } from 'react-icons/ai';
import { BsFillBagDashFill, BsListTask } from 'react-icons/bs';

export const pages = [
  {
    id: nanoid(),
    Icon: <AiFillHome />,
    name: 'DASHBOARD',
    path: '/',
  },
  {
    id: nanoid(),
    Icon: <BsFillBagDashFill />,
    name: 'PROJECTS',
    path: '/projects',
  },
  {
    id: nanoid(),
    Icon: <BsListTask />,
    name: 'MY TASK',
    path: '/mytask',
  },
  {
    id: nanoid(),
    Icon: <BiCalendarPlus />,
    name: 'CALENDAR',
    path: '/calendar',
  },
  {
    id: nanoid(),
    Icon: <BiTimeFive />,
    name: 'TIME MANAGE',
    path: '/timemanage',
  },
  {
    id: nanoid(),
    Icon: <GoReport />,
    name: 'REPORTS',
    path: '/reports',
  },
  {
    id: nanoid(),
    Icon: <AiFillSetting />,
    name: 'SETTING',
    path: '/setting',
  },
];

export const profilesData = [
  {
    id: nanoid(),
    avatar: 'https://pbs.twimg.com/media/BduTxWnIUAAKT_5.jpg',
    name: 'john doe',
    message: 'this message is from john',
  },
  {
    id: nanoid(),
    avatar: 'https://pbs.twimg.com/media/BduTxWnIUAAKT_5.jpg',
    name: 'albert doe',
    message: 'hello , i did 5 task this day',
  },
  {
    id: nanoid(),
    avatar: 'https://pbs.twimg.com/media/BduTxWnIUAAKT_5.jpg',
    name: 'nicolas',
    message: "suck this , i'll take offweek maybe",
  },
  {
    id: nanoid(),
    avatar: 'https://pbs.twimg.com/media/BduTxWnIUAAKT_5.jpg',
    name: 'jonathan',
    message: 'give me fetch url',
  },
];

// export const taskProgress = [
//   {
//     id: nanoid(),
//     company:
//       'https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png',
//     company: 'google',
//     subName: 'google Inc.',
//   },
// ];

export const projectTaskStatus = [
  {
    id: nanoid(),
    status: 'working',
    info: [
      {
        id: nanoid(),
        title: 'slack',
        text: 'These project will need a rew brand Identity where they will get recognise',
        iphone: true,
        android: true,
        branding: false,
        website: false,
      },
      {
        id: nanoid(),
        title: 'google',
        text: 'These project will need a rew brand Identyt where they will get recognise',
        iphone: false,
        android: false,
        branding: true,
        website: false,
      },
    ],
  },
  {
    id: nanoid(),
    status: 'progress',
    info: [
      {
        id: nanoid(),
        title: 'twitter',
        text: 'These project will need a rew brand Identity where they will get recognise',
        iphone: false,
        android: false,
        branding: false,
        website: true,
      },
      {
        id: nanoid(),
        title: 'maxxis tyres',
        text: 'These project will need a rew brand Identyt where they will get recognise',
        iphone: true,
        android: true,
        branding: false,
        website: false,
      },
      {
        id: nanoid(),
        title: 'samsung',
        text: 'These project will need a rew brand Identyt where they will get recognise',
        iphone: true,
        android: false,
        branding: false,
        website: false,
      },
    ],
  },
  {
    id: nanoid(),
    status: 'complete',
    info: [
      {
        id: nanoid(),
        title: 'tesla',
        text: 'These project will need a rew brand Identity where they will get recognise',
        iphone: true,
        android: true,
        branding: false,
        website: false,
      },
      {
        id: nanoid(),
        title: 'slack',
        text: 'These project will need a rew brand Identyt where they will get recognise',
        iphone: true,
        android: true,
        branding: false,
        website: false,
      },
    ],
  },
];
