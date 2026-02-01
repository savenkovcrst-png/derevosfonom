
export const kicks = {
  chapter: "Газонефтеводопроявления",
  subtypes: [
    { name: "Газовое", stages: [
      { stage: "Диагностика", description: "Выявление признаков газового выброса", tools: ["Манометры"] },
      { stage: "Первичные действия", description: "Закрытие ПВО", tools: ["Пакер"] },
      { stage: "Основные методы", description: "Уравновешивание давления", baseSuccess: 70 },
      { stage: "Усиленные методы", description: "Глушение скважины", baseSuccess: 85 },
      { stage: "Крайние меры", description: "Контроль давления и обход", baseSuccess: 95 }
    ]}
  ]
};
