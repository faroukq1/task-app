import { nanoid } from "nanoid";
import { BiCalendarPlus, BiTimeFive } from "react-icons/bi";
import { GoReport } from "react-icons/go";
import { AiFillSetting, AiFillHome } from "react-icons/ai";
import { BsFillBagDashFill, BsListTask } from "react-icons/bs";

export const pages = [
  {
    id: nanoid(),
    Icon: <AiFillHome />,
    name: "DASHBOARD",
    path: "/",
  },
  {
    id: nanoid(),
    Icon: <BsFillBagDashFill />,
    name: "PROJECTS",
    path: "/projects",
  },
  {
    id: nanoid(),
    Icon: <BsListTask />,
    name: "MY TASK",
    path: "/mytask",
  },
  {
    id: nanoid(),
    Icon: <BiCalendarPlus />,
    name: "CALENDAR",
    path: "/calendar",
  },
  {
    id: nanoid(),
    Icon: <BiTimeFive />,
    name: "TIME MANAGE",
    path: "/timemanage",
  },
  {
    id: nanoid(),
    Icon: <GoReport />,
    name: "REPORTS",
    path: "/reports",
  },
  {
    id: nanoid(),
    Icon: <AiFillSetting />,
    name: "SETTING",
    path: "/setting",
  },
];

export const RandomTasks = [
  {
    id: nanoid(),
    number: `01`,
    name: `Create wireframe`,
    done: true,
    companyPic:
      "https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png",
    company: "google",
    subName: "google Inc.",
  },
  {
    id: nanoid(),
    number: `02`,
    name: `Slack Logo Design`,
    done: false,
    companyPic:
      "https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png",
    company: "google",
    subName: "google Inc.",
  },
  {
    id: nanoid(),
    number: `03`,
    name: `Dashboard Design`,
    done: true,
    companyPic:
      "https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png",
    company: "google",
    subName: "google Inc.",
  },
  {
    id: nanoid(),
    number: `04`,
    name: `Create wireframe`,
    done: false,
    companyPic:
      "https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png",
    company: "google",
    subName: "google Inc.",
  },
  {
    id: nanoid(),
    number: `05`,
    name: `google logo design`,
    done: false,
    companyPic:
      "https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png",
    company: "google",
    subName: "google Inc.",
  },
  {
    id: nanoid(),
    number: `06`,
    name: `Slack Logo Design`,
    done: true,
    companyPic:
      "https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png",
    company: "google",
    subName: "google Inc.",
  },
  {
    id: nanoid(),
    number: `07`,
    name: `Dashboard Design`,
    done: false,
    companyPic:
      "https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png",
    company: "google",
    subName: "google Inc.",
  },
  {
    id: nanoid(),
    number: `07`,
    name: `Dashboard Design`,
    done: false,
    companyPic:
      "https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png",
    company: "google",
    subName: "google Inc.",
  },
  {
    id: nanoid(),
    number: `07`,
    name: `Dashboard Design`,
    done: false,
    companyPic:
      "https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png",
    company: "google",
    subName: "google Inc.",
  },
  {
    id: nanoid(),
    number: `07`,
    name: `Dashboard Design`,
    done: false,
    companyPic:
      "https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png",
    company: "google",
    subName: "google Inc.",
  },
  {
    id: nanoid(),
    number: `07`,
    name: `Dashboard Design`,
    done: true,
    companyPic:
      "https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png",
    company: "google",
    subName: "google Inc.",
  },
  {
    id: nanoid(),
    number: `07`,
    name: `Dashboard Design`,
    done: false,
    companyPic:
      "https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png",
    company: "google",
    subName: "google Inc.",
  },
];

export const timerTasks = [
  {
    id: nanoid(),
    title: "google",
    timerList: [
      {
        id: nanoid(),
        title: "doing some exersice",
        time: 23520525,
        play: false,
      },
    ],
  },
  {
    id: nanoid(),
    title: "job",
    timerList: [
      {
        title: "doing some exersice",
        time: 15250,
        play: false,
      },
    ],
  },
  {
    id: nanoid(),
    title: "gym",
    timerList: [
      {
        title: "doing some exersice",
        time: 23535525,
      },
    ],
  },
];

export const profilesData = [
  {
    id: nanoid(),
    avatar: "https://pbs.twimg.com/media/BduTxWnIUAAKT_5.jpg",
    name: "john doe",
    message: "this message is from john",
  },
  {
    id: nanoid(),
    avatar: "https://pbs.twimg.com/media/BduTxWnIUAAKT_5.jpg",
    name: "albert doe",
    message: "hello , i did 5 task this day",
  },
  {
    id: nanoid(),
    avatar: "https://pbs.twimg.com/media/BduTxWnIUAAKT_5.jpg",
    name: "nicolas",
    message: "suck this , i'll take offweek maybe",
  },
  {
    id: nanoid(),
    avatar: "https://pbs.twimg.com/media/BduTxWnIUAAKT_5.jpg",
    name: "jonathan",
    message: "give me fetch url",
  },
];

export const taskProgress = [
  {
    id: nanoid(),
    company:
      "https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png",
    company: "google",
    subName: "google Inc.",
  },
];
