
export const toolFailure = {
  chapter: "Разрушение и износ бурового инструмента",
  subtypes: [
    { name: "Износ долота", stages: [
      { stage: "Диагностика", description: "Выявление износа долота", tools: ["Лог бурения"] },
      { stage: "Первичные действия", description: "Снижение нагрузки на долото" },
      { stage: "Основные методы", description: "Извлечение долота", baseSuccess: 70 },
      { stage: "Усиленные методы", description: "Замена долота", baseSuccess: 85 },
      { stage: "Крайние меры", description: "Коррекция режима бурения", baseSuccess: 95 }
    ]}
  ]
};
