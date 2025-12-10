export const BUSINESS_TYPES = ["pilates", "musculacao", "box"] as const;
export type BusinessType = (typeof BUSINESS_TYPES)[number];

export const AVAILABLE_SHORTCUTS: Record<
  BusinessType,
  { id: string; label: string }[]
> = {
  pilates: [
    { id: "agenda", label: "Agenda" },
    { id: "evolucao", label: "Evolução" },
  ],

  musculacao: [
    { id: "treino", label: "Treino" },
    { id: "financeiro", label: "Financeiro" },
  ],

  box: [
    { id: "agenda", label: "Agenda" },
    { id: "wod", label: "WOD" },
  ],
};
