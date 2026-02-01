
export const collapses = {
  chapter: "Обвалы и осыпания стенок скважины",
  subtypes: [
    { name: "Глинистые", stages: [
      { stage: "Диагностика", description: "Определение характера осыпаний", tools: ["Лог бурения"] },
      { stage: "Первичные действия", description: "Стабилизация раствора" },
      { stage: "Основные методы", description: "Проработка проблемного участка", baseSuccess: 65 },
      { stage: "Усиленные методы", description: "Крепление стенок скважины", baseSuccess: 80 },
      { stage: "Крайние меры", description: "Изменение траектории бурения", baseSuccess: 95 }
    ]}
  ]
};
