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
<<<<<<< HEAD
    imgSource: "svg/siemens.png",
=======
    imgSource: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Siemens_AG_logo.svg/512px-Siemens_AG_logo.svg.png",
>>>>>>> 6d286e704efa90730e3e548e89397bd4e3c2c3b3
  },
  {
    id: 4,
    technologyName: "Office 365",
<<<<<<< HEAD
    imgSource: "svg/Office.png",
=======
    imgSource: "https://upload.wikimedia.org/wikipedia/commons/4/49/Office_365_logo_%282013-2019%29.png",
>>>>>>> 6d286e704efa90730e3e548e89397bd4e3c2c3b3
  },
  {
    id: 5,
    technologyName: "Labview",
    imgSource: "https://logodix.com/logo/1983497.png",
  },
  {
    id: 6,
    technologyName: "Matlab",
<<<<<<< HEAD
    imgSource: "svg/Matlab.png",
=======
    imgSource: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/512px-Matlab_Logo.png",
>>>>>>> 6d286e704efa90730e3e548e89397bd4e3c2c3b3
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
<<<<<<< HEAD
    imgSource: "svg/ANSYS.png",
=======
    imgSource: "https://upload.wikimedia.org/wikipedia/commons/1/14/Ansys_logo_%282019%29.svg",
>>>>>>> 6d286e704efa90730e3e548e89397bd4e3c2c3b3
  },
  {
    id: 10,
    technologyName: "Creo",
    imgSource: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Creo_Logo.png",
  },
  {
    id: 11,
<<<<<<< HEAD
    technologyName: "Adams Car",
    imgSource: "svg/MSC.png",
=======
    technologyName: "Simulink",
    imgSource: "https://upload.wikimedia.org/wikipedia/commons/1/11/Simulink_Logo.png",
>>>>>>> 6d286e704efa90730e3e548e89397bd4e3c2c3b3
  },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    data: result,
  });
}
