import type { NextApiRequest, NextApiResponse } from "next";


interface ITechnology {
  id: number;
  technologyName: string;
  imgSource: string;
}

const result: ITechnology[] = [
  {
    id: 0,
    technologyName: "Autocad",
    imgSource: "https://upload.wikimedia.org/wikipedia/commons/0/08/AutoCad_logo.svg",
  },
  {
    id: 1,
    technologyName: "Solidworks",
    imgSource: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/SolidWorks_logo.tiff/lossless-page1-512px-SolidWorks_logo.tiff.png",
  },
  {
    id: 2,
    technologyName: "Catia",
    imgSource: "https://upload.wikimedia.org/wikipedia/commons/d/dd/CATIA_Logotype_RGB_Blue.png",
  },
  {
    id: 3,
    technologyName: "Siemens NX",
    imgSource: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Siemens_AG_logo.svg/512px-Siemens_AG_logo.svg.png",
  },
  {
    id: 4,
    technologyName: "Office 365",
    imgSource: "https://upload.wikimedia.org/wikipedia/commons/4/49/Office_365_logo_%282013-2019%29.png",
  },
  {
    id: 5,
    technologyName: "Labview",
    imgSource: "https://logodix.com/logo/1983497.png",
  },
  {
    id: 6,
    technologyName: "Matlab",
    imgSource: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/512px-Matlab_Logo.png",
  },
  {
    id: 7,
    technologyName: "Python",
    imgSource: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    id: 8,
    technologyName: "Arduino IDE",
    imgSource: "https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg",
  },
  {
    id: 9,
    technologyName: "Ansys",
    imgSource: "https://upload.wikimedia.org/wikipedia/commons/1/14/Ansys_logo_%282019%29.svg",
  },
  {
    id: 10,
    technologyName: "Creo",
    imgSource: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Creo_Logo.png",
  },
  {
    id: 11,
    technologyName: "Simulink",
    imgSource: "https://upload.wikimedia.org/wikipedia/commons/1/11/Simulink_Logo.png",
  },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    data: result,
  });
}
