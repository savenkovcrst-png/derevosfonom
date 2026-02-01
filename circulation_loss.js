
export const circulationLoss = {
  chapter: "Потеря циркуляции бурового раствора",
  subtypes: [
    { name: "Частичная", stages: [
      { stage: "Диагностика", description: "Определение участков потери", tools: ["Лог бурения"] },
      { stage: "Первичные действия", description: "Регулирование плотности раствора", tools: ["Насос"] },
      { stage: "Основные методы", description: "Использование глушащих смесей", baseSuccess: 65 },
      { stage: "Усиленные методы", description: "Тампонаж проблемных зон", baseSuccess: 80 },
      { stage: "Крайние меры", description: "Бурение с потерей циркуляции", baseSuccess: 95 }
    ]}
  ]
};
