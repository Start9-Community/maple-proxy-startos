import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.11:4',
  releaseNotes: {
    en_US: 'Updates the web interface’s nginx to 1.30.6 with security fixes.',
    es_ES:
      'Actualiza el nginx de la interfaz web a 1.30.6 con correcciones de seguridad.',
    de_DE:
      'Aktualisiert das nginx der Weboberfläche auf 1.30.6 mit Sicherheitskorrekturen.',
    pl_PL:
      'Aktualizuje nginx interfejsu webowego do wersji 1.30.6 z poprawkami bezpieczeństwa.',
    fr_FR:
      'Met à jour le nginx de l’interface web vers 1.30.6 avec des correctifs de sécurité.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
