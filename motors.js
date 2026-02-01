
export const motors = {
  chapter: "Аварии с забойными двигателями",
  subtypes: [
    { name: "Заклинивание", stages: [
      { stage: "Диагностика", description: "Определение места заклинивания", tools: ["Лог бурения"] },
      { stage: "Первичные действия", description: "Попытка освобождения" },
      { stage: "Основные методы", description: "Механическое освобождение", baseSuccess: 65 },
      { stage: "Усиленные методы", description: "Извлечение двигателя", baseSuccess: 85 },
      { stage: "Крайние меры", description: "Замена КНБК", baseSuccess: 95 }
    ]}
  ]
};
