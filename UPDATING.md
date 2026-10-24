# Updating the upstream version

Maple Proxy ships two images: the upstream `maple-proxy` (pulled from GHCR) and a locally built `maple-ui` (from `assets/ui/`). Only the proxy has an upstream version to track; the UI is local code in this repo.

## Determining the upstream version

- **maple-proxy** — canonical home is the `proxy/` directory of <https://github.com/MaplePrivacyLabs/Maple>. The repo's release tags version the Maple app, not the proxy; the proxy's version is `version` in `proxy/Cargo.toml`, and CI publishes it to GHCR after each app release. Take the newest version tag GHCR serves:
  ```
  TOKEN=$(curl -s "https://ghcr.io/token?scope=repository:mapleprivacylabs/maple-proxy:pull" | jq -r .token)
  curl -s -H "Authorization: Bearer $TOKEN" https://ghcr.io/v2/mapleprivacylabs/maple-proxy/tags/list | jq -r '.tags[]' | sort -V
  ```
  The pin lives in `startos/manifest/index.ts` under `images['maple-proxy'].source.dockerTag` (currently `ghcr.io/mapleprivacylabs/maple-proxy:0.4.2`). To review a jump, find the app release whose `proxy/Cargo.toml` carries the new version and diff `proxy/` between the two releases.

## Applying the bump

- **maple-proxy** — in `startos/manifest/index.ts`, set `images['maple-proxy'].source.dockerTag` to `ghcr.io/mapleprivacylabs/maple-proxy:<new version>`.
