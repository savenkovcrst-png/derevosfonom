
export const miscComplications = {
  chapter: "Прочие осложнения при бурении",
  subtypes: [
    { name: "Искривление ствола", stages: [
      { stage: "Диагностика", description: "Выявление зоны искривления", tools: ["Лог бурения"] },
      { stage: "Первичные действия", description: "Регулирование направления бурения" },
      { stage: "Основные методы", description: "Использование корректирующих долот", baseSuccess: 70 },
      { stage: "Усиленные методы", description: "Вращение с корректирующими стабилизаторами", baseSuccess: 85 },
      { stage: "Крайние меры", description: "Перенаправление скважины", baseSuccess: 95 }
    ]}
  ]
};
