import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.4.2:0',
  releaseNotes: {
    en_US: `Updated Maple Proxy to 0.4.2.

- Adds the \`/v1/systemone\` endpoint.
- Browser clients can now send their own API key in the \`Authorization\` header.

[Upstream source](https://github.com/MaplePrivacyLabs/Maple/tree/master/proxy)`,
    es_ES: `Actualiza Maple Proxy a 0.4.2.

- Añade el endpoint \`/v1/systemone\`.
- Los clientes de navegador ahora pueden enviar su propia clave de API en el encabezado \`Authorization\`.

[Código del proyecto original](https://github.com/MaplePrivacyLabs/Maple/tree/master/proxy)`,
    de_DE: `Aktualisiert Maple Proxy auf 0.4.2.

- Fügt den Endpunkt \`/v1/systemone\` hinzu.
- Browser-Clients können jetzt ihren eigenen API-Schlüssel im \`Authorization\`-Header senden.

[Upstream-Quellcode](https://github.com/MaplePrivacyLabs/Maple/tree/master/proxy)`,
    pl_PL: `Aktualizuje Maple Proxy do wersji 0.4.2.

- Dodaje punkt końcowy \`/v1/systemone\`.
- Klienci przeglądarkowi mogą teraz wysyłać własny klucz API w nagłówku \`Authorization\`.

[Kod źródłowy upstream](https://github.com/MaplePrivacyLabs/Maple/tree/master/proxy)`,
    fr_FR: `Met à jour Maple Proxy vers 0.4.2.

- Ajoute le point de terminaison \`/v1/systemone\`.
- Les clients navigateur peuvent désormais envoyer leur propre clé d'API dans l'en-tête \`Authorization\`.

[Code source du projet amont](https://github.com/MaplePrivacyLabs/Maple/tree/master/proxy)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
