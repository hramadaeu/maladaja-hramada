# SVG assets



Source files for brand graphics. Served copies live in `public/brand/` (synced automatically).



| File | Usage |

|------|--------|

| `logo.svg` | Header mark (`SiteLogo` via `brandAssets.logo`) |

| `mh-cyrilic.svg` | Header wordmark (Cyrillic), animates with Latin |

| `mh-latin.svg` | Header wordmark (Latin), animates with Cyrillic |



After editing a file here, run:



```bash

npm run sync:brand

```



Or start dev/build — both run sync first.



Configured paths: `src/config/brand.ts`.


