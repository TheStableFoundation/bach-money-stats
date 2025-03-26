import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left">
          <a
            className="text-primary"
            href="https://bach.money"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bach Money Stats
          </a>
        </h1>
        <p className="text-center sm:text-left">
          Numbers and metrics for the Bach Money project.
        </p>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="tracking-[-.01em]">
            A decentralized stablecoin platform.
          </li>
          <li className="tracking-[-.01em]">
            Governed by the community of deflationary €BACH token holders.
          </li>
          <li className="tracking-[-.01em]">Built on Solana.</li>
        </ol>
        <iframe
          width="100%"
          height="600"
          src="https://birdeye.so/tv-widget/CTQBjyrX8pYyqbNa8vAhQfnRXfu9cUxnvrxj5PvbzTmf?chain=solana&viewMode=pair&chartInterval=15&chartType=Candle&chartTimezone=Europe%2FStockholm&chartLeftToolbar=show&theme=dark"
          allowFullScreen
        ></iframe>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://www.birdeye.so/token/CTQBjyrX8pYyqbNa8vAhQfnRXfu9cUxnvrxj5PvbzTmf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/birdeye-logo-white.png"
              alt="Birdeye logo"
              width={20}
              height={20}
            />
            Birdeye
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://bach.money/whitepaper"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whitepaper
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://docs.bach.money"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Docs{" "}
          <span className="text-xs text-gray-400 dark:text-red-500">WIP</span>
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://app.bach.money"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Launch app{" "}
          <span className="text-xs text-gray-400 dark:text-red-500">WIP</span>
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://bach.money"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to bach.money →
        </a>
      </footer>
    </div>
  );
}
