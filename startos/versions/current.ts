import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.5.1:0',
  releaseNotes: {
    en_US:
      'Update Maple Proxy to 0.5.1. Streaming responses tolerate longer pauses from the provider. Requires StartOS 0.4.2 or later.',
    es_ES:
      'Actualiza Maple Proxy a 0.5.1. Las respuestas en streaming toleran pausas más largas del proveedor. Requiere StartOS 0.4.2 o posterior.',
    de_DE:
      'Aktualisiert Maple Proxy auf 0.5.1. Streaming-Antworten unterstützen längere Pausen beim Anbieter. Erfordert StartOS 0.4.2 oder neuer.',
    pl_PL:
      'Aktualizacja Maple Proxy do 0.5.1. Odpowiedzi strumieniowe tolerują dłuższe przerwy po stronie dostawcy. Wymaga StartOS 0.4.2 lub nowszego.',
    fr_FR:
      'Mise à jour de Maple Proxy vers 0.5.1. Les réponses en streaming tolèrent des pauses plus longues du fournisseur. Nécessite StartOS 0.4.2 ou ultérieur.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
