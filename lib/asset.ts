// префикс для публичных ассетов при деплое на GitHub Pages в поддиректорию
export function asset(p: string): string {
  return (process.env.NEXT_PUBLIC_BASE_PATH ?? "") + p;
}