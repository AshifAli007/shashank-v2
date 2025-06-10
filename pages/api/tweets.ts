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
    imgSource: "svg/autocad.png",
  },
  {
    id: 1,
    technologyName: "Solidworks",
    imgSource: "svg/Solidworks.png",
  },
  {
    id: 2,
    technologyName: "Catia",
    imgSource: "svg/catia.png",
  },
  {
    id: 3,
    technologyName: "Siemens NX",
    imgSource: "svg/siemens.png",
  },
  {
    id: 4,
    technologyName: "Office 365",
    imgSource: "svg/Office.png",
  },
  {
    id: 5,
    technologyName: "Labview",
    imgSource: "svg/labview.png",
  },
  {
    id: 6,
    technologyName: "Matlab",
    imgSource: "svg/Matlab.png",
  },
  {
    id: 7,
    technologyName: "Python",
    imgSource: "svg/python.png",
  },
  {
    id: 8,
    technologyName: "Arduino IDE",
    imgSource: "svg/arduino.png",
  },
  {
    id: 9,
    technologyName: "Ansys",
    imgSource: "svg/ANSYS.png",
  },
  {
    id: 10,
    technologyName: "Creo",
    imgSource: "svg/creo.png",
  },
  {
    id: 11,
    technologyName: "Adams Car",
    imgSource: "svg/MSC.png",
  },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    data: result,
  });
}