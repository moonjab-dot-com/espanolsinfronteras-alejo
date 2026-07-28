/**
 * Maps every course slug to:
 * - its dedicated owl mascot asset
 * - human-readable unit names for the learning path
 */

import { withBase } from "@/lib/utils";

export const COURSE_MASCOTS: Record<string, string> = {
  espanol:              withBase("/OWL_WITH_SPAIN_FLAG.png"),
  "herencia-peruana":   withBase("/OWL_INVESTIGADOR_WITH_BOOK.png"),
  "global-finance":     withBase("/OWL_WITH_THE_EARTH.png"),
  finanzas:             withBase("/OWL_COMPETITOR.png"),
  programacion:         withBase("/OWL_CODING.png"),
  matematicas:          withBase("/OWL_NUMBER_ONE.png"),
  ciencias:             withBase("/OWL_SCIENCE.png"),
  ciberseguridad:       withBase("/OWL_INVESTIGATOR_WITH_COMPUTER.png"),
  ingles:               withBase("/OWL_READING.png"),
  ia:                   withBase("/OWL_INVESTIGATOR_WITH_COMPUTER.png"),
  economia:             withBase("/OWL_COMPETITOR.png"),
  "mercados-financieros": withBase("/OWL_WITH_THE_EARTH.png"),
};

export const UNIT_NAMES: Record<string, string[]> = {
  espanol: [
    "Primeros Pasos",
    "Vocabulario Esencial",
    "Sintaxis y Morfología",
    "Ortografía y Estilo",
    "Comunicación Avanzada",
  ],
  "herencia-peruana": [
    "Historia y Civilización",
    "Tradiciones y Patrimonio",
  ],
  "global-finance": [
    "Global Finance Fundamentals",
  ],
  finanzas: [
    "Fundamentos del Dinero",
    "El Sistema Financiero",
    "Inteligencia Financiera",
  ],
  programacion: [
    "Fundamentos Web",
    "JavaScript y Python",
  ],
  matematicas: [
    "Números y Medidas",
    "Geometría y Probabilidad",
  ],
  ciencias: [
    "Física y Movimiento",
    "Química y Biología",
  ],
  ciberseguridad: [
    "Seguridad Digital",
  ],
  ingles: [
    "English Language Skills",
  ],
};
