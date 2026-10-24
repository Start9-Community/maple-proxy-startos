import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.4.2:0',
  releaseNotes: {
    en_US: `Updated Maple Proxy to 0.4.2.

- Adds the \`/v1/systemone\` endpoint.
- Browser clients can now send their own API key in the \`Authorization\` header when no server-side key is saved.
- Saving a server-side key disables cross-origin browser access. The bundled Web UI and non-browser clients still work.

[Upstream source](https://github.com/MaplePrivacyLabs/Maple/tree/master/proxy)`,
    es_ES: `Actualiza Maple Proxy a 0.4.2.

- Añade el endpoint \`/v1/systemone\`.
- Los clientes de navegador ahora pueden enviar su propia clave de API en el encabezado \`Authorization\` cuando no hay una clave guardada en el servidor.
- Guardar una clave en el servidor desactiva el acceso del navegador desde otros orígenes. La interfaz web incluida y los clientes que no son navegadores siguen funcionando.

[Código del proyecto original](https://github.com/MaplePrivacyLabs/Maple/tree/master/proxy)`,
    de_DE: `Aktualisiert Maple Proxy auf 0.4.2.

- Fügt den Endpunkt \`/v1/systemone\` hinzu.
- Browser-Clients können jetzt ihren eigenen API-Schlüssel im \`Authorization\`-Header senden, wenn kein serverseitiger Schlüssel gespeichert ist.
- Ein gespeicherter serverseitiger Schlüssel deaktiviert den ursprungsübergreifenden Browserzugriff. Die integrierte Weboberfläche und Nicht-Browser-Clients funktionieren weiterhin.

[Upstream-Quellcode](https://github.com/MaplePrivacyLabs/Maple/tree/master/proxy)`,
    pl_PL: `Aktualizuje Maple Proxy do wersji 0.4.2.

- Dodaje punkt końcowy \`/v1/systemone\`.
- Klienci przeglądarkowi mogą teraz wysyłać własny klucz API w nagłówku \`Authorization\`, gdy na serwerze nie zapisano klucza.
- Zapisanie klucza na serwerze wyłącza dostęp z przeglądarek z innych źródeł. Wbudowany interfejs WWW i klienci inni niż przeglądarki nadal działają.

[Kod źródłowy upstream](https://github.com/MaplePrivacyLabs/Maple/tree/master/proxy)`,
    fr_FR: `Met à jour Maple Proxy vers 0.4.2.

- Ajoute le point de terminaison \`/v1/systemone\`.
- Les clients navigateur peuvent désormais envoyer leur propre clé d'API dans l'en-tête \`Authorization\` lorsqu'aucune clé n'est enregistrée côté serveur.
- Enregistrer une clé côté serveur désactive l'accès des navigateurs depuis d'autres origines. L'interface web intégrée et les clients hors navigateur continuent de fonctionner.

[Code source du projet amont](https://github.com/MaplePrivacyLabs/Maple/tree/master/proxy)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
