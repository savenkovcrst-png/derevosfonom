
export const pipeFailure = {
  chapter: "Обрывы бурильной колонны",
  subtypes: [
    { name: "Обрыв по резьбе", stages: [
      { stage: "Диагностика", description: "Определение места обрыва резьбы", tools: ["Лог бурения"] },
      { stage: "Первичные действия", description: "Подготовка инструмента захвата" },
      { stage: "Основные методы", description: "Захват метчиком", baseSuccess: 70, tools: ["Метчик"] },
      { stage: "Усиленные методы", description: "Захват колоколом", baseSuccess: 85, tools: ["Колокол"] },
      { stage: "Крайние меры", description: "Фрезерование или обход скважины", baseSuccess: 95, tools: ["Фреза", "Sidetrack"] }
    ]}
  ]
};
