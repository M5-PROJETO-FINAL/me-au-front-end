import { useTranslation } from "react-i18next";

import quartoCat from "../assets/RoomPictures/quartoCat.png";
import quartoComp from "../assets/RoomPictures/quartoComp.png";
import quartoDog from "../assets/RoomPictures/quartoDog.png";
import { IRoom, IService } from "../interfaces/Reservations";

const { t } = useTranslation();

export const rooms: IRoom[] = [
  {
    id: "1",
    urlImage: quartoComp,
    title: `${t("RoomServices.Quarto Compartilhado")}`,
    description: `${t(
      "RoomServices.Ótimo custo benefício, essa opção é ideal para você que deseja que o seu pet interaja com outros catioros!",
    )}`,
    tag: "shared",
    capacity: 30,
    includedService: `${t("RoomServices.passeios diários")}`,
    price: 120,
  },

  {
    id: "2",
    urlImage: quartoDog,
    title: `${t("RoomServices.Quarto Privativo (cães)")}`,
    description: `${t(
      "RoomServices.Busca conforto e privacidade para o seu cãozinho? O quarto privativo é a opção ideal!",
    )}`,
    tag: "dogs",
    capacity: 2,
    includedService: `${t("RoomServices.passeios diários")}`,
    price: 250,
  },

  {
    id: "3",
    urlImage: quartoCat,
    title: `${t("RoomServices.Quarto Privativo (gatos)")}`,
    description: `${t(
      "RoomServices.Quarto privativo de alto padrão para o seu felino aproveitar com classe!",
    )}`,
    tag: "cats",
    capacity: 2,
    includedService: `${t("RoomServices.1 petisco por dia")}`,
    price: 250,
  },
];

export const services: IService[] = [
  {
    id: "1",
    name: `${t("AddServices.Vacina")}`,
    tag: "vaccine",
    description: "",
    price: 0,
  },
  {
    id: "2",
    name: `${t("AddServices.Banho")}`,
    tag: "bath",
    description: "",
    price: 30,
  },
  {
    id: "3",
    name: `${t("AddServices.Tosa")}`,
    tag: "grooming",
    description: "",
    price: 30,
  },
  {
    id: "4",
    name: `${t("AddServices.Massagem")}`,
    tag: "massage",
    description: "",
    price: 60,
  },
  {
    id: "5",
    name: `${t("AddServices.Natação")}`,
    tag: "swimming",
    description: "",
    price: 50,
  },
  {
    id: "6",
    name: `${t("AddServices.Ração")}`,
    tag: "premiumFood",
    description: "",
    price: 10,
  },
];
