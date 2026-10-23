import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.2:0',
  releaseNotes: {
    en_US: `Updated Maple Proxy to 0.3.2.

- Verifies the backend enclave against production trust roots, matching the default backend.
- Includes upstream security updates to its dependencies.
- Updates the web interface's nginx to 1.30.6 with security fixes.

[Full upstream changes](https://github.com/OpenSecretCloud/maple-proxy/compare/v0.1.11...v0.3.2)`,
    es_ES: `Actualiza Maple Proxy a 0.3.2.

- Verifica el enclave del backend con las raíces de confianza de producción, que corresponden al backend predeterminado.
- Incluye actualizaciones de seguridad de sus dependencias del proyecto original.
- Actualiza el nginx de la interfaz web a 1.30.6 con correcciones de seguridad.

[Cambios completos del proyecto original](https://github.com/OpenSecretCloud/maple-proxy/compare/v0.1.11...v0.3.2)`,
    de_DE: `Aktualisiert Maple Proxy auf 0.3.2.

- Prüft die Backend-Enklave gegen die Produktions-Vertrauensanker, passend zum Standard-Backend.
- Enthält Sicherheitsaktualisierungen der Upstream-Abhängigkeiten.
- Aktualisiert das nginx der Weboberfläche auf 1.30.6 mit Sicherheitskorrekturen.

[Vollständige Upstream-Änderungen](https://github.com/OpenSecretCloud/maple-proxy/compare/v0.1.11...v0.3.2)`,
    pl_PL: `Aktualizuje Maple Proxy do wersji 0.3.2.

- Weryfikuje enklawę backendu względem produkcyjnych kotwic zaufania, zgodnych z domyślnym backendem.
- Zawiera aktualizacje bezpieczeństwa zależności upstream.
- Aktualizuje nginx interfejsu webowego do wersji 1.30.6 z poprawkami bezpieczeństwa.

[Pełne zmiany upstream](https://github.com/OpenSecretCloud/maple-proxy/compare/v0.1.11...v0.3.2)`,
    fr_FR: `Met à jour Maple Proxy vers 0.3.2.

- Vérifie l'enclave du backend avec les ancres de confiance de production, qui correspondent au backend par défaut.
- Inclut les mises à jour de sécurité des dépendances du projet amont.
- Met à jour le nginx de l'interface web vers 1.30.6 avec des correctifs de sécurité.

[Modifications complètes du projet amont](https://github.com/OpenSecretCloud/maple-proxy/compare/v0.1.11...v0.3.2)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
