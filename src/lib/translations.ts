export const translations = {
  fr: {
    title: "Pixel Mood",
    subtitle: "Tracker votre humeur comme un Sim",
    gameVersion: "Choisissez votre version du jeu",
    share: "Partager",
    generating: "Génération en cours...",
    sims1: {
      hunger: "Appétit",
      energy: "Energie",
      comfort: "Confort",
      fun: "Distractions",
      hygiene: "Hygiène",
      social: "Vie sociale",
      bladder: "Petits besoins",
      room: "Espace"
    },
    sims2: {
      hunger: "Appétit",
      energy: "Energie",
      comfort: "Confort",
      fun: "Distractions",
      hygiene: "Hygiène",
      social: "Vie sociale",
      bladder: "Petits besoins",
      room: "Environnement"
    },
    sims3: {
      hunger: "Faim",
      energy: "Energie",
      fun: "Amusement",
      hygiene: "Hygiène",
      social: "Social",
      bladder: "Vessie"
    },
    sims4: {
      hunger: "Faim",
      energy: "Energie",
      fun: "Divertissement",
      hygiene: "Hygiène",
      social: "Social",
      bladder: "Vessie"
    }
  },
  en: {
    title: "Pixel Mood",
    subtitle: "Track your mood like a Sim",
    gameVersion: "Choose your game version",
    share: "Share",
    generating: "Generating...",
    sims1: {
      hunger: "Hunger",
      energy: "Energy",
      comfort: "Comfort",
      fun: "Fun",
      hygiene: "Hygiene",
      social: "Social",
      bladder: "Bladder",
      room: "Room"
    },
    sims2: {
      hunger: "Hunger",
      energy: "Energy",
      comfort: "Comfort",
      fun: "Fun",
      hygiene: "Hygiene",
      social: "Social",
      bladder: "Bladder",
      room: "Room"
    },
    sims3: {
      hunger: "Hunger",
      energy: "Energy",
      fun: "Fun",
      hygiene: "Hygiene",
      social: "Social",
      bladder: "Bladder"
    },
    sims4: {
      hunger: "Hunger",
      energy: "Energy",
      fun: "Fun",
      hygiene: "Hygiene",
      social: "Social",
      bladder: "Bladder"
    }
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.fr;