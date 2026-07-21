import { APPLE_WALLET_ENDPOINT, GOOGLE_WALLET_ENDPOINT } from "@/lib/wallet/config"

/**
 * Официальные кнопки добавления карты (ТЗ §4.2).
 *  - Apple:  public/wallet/add-to-apple-wallet.svg  → /wallet/apple (отдаёт .pkpass)
 *  - Google: public/wallet/add-to-google-wallet.svg → /wallet/google (redirect на save-URL)
 *
 * Бейджи чёрные и по гайдлайнам Apple размещаются на светлом фоне, поэтому лежат
 * на светлой «wallet-панели» — на тёмной странице она читается как основной CTA.
 */
export function WalletAddButtons() {
  return (
    <div className="mx-auto inline-flex flex-col items-center gap-3 rounded-3xl border border-black/5 bg-white px-5 py-5 shadow-2xl">
      <a
        href={APPLE_WALLET_ENDPOINT}
        aria-label="Добавить в Apple Wallet"
        className="flex w-60 justify-center rounded-lg transition-transform hover:scale-[1.03] active:scale-[0.98]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/wallet/add-to-apple-wallet.svg" alt="Add to Apple Wallet" className="h-[42px] w-auto" />
      </a>
      <a
        href={GOOGLE_WALLET_ENDPOINT}
        aria-label="Добавить в Google Wallet"
        className="flex w-60 justify-center rounded-lg transition-transform hover:scale-[1.03] active:scale-[0.98]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/wallet/add-to-google-wallet.svg" alt="Add to Google Wallet" className="h-[42px] w-auto" />
      </a>
    </div>
  )
}
