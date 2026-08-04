/**
 * All page copy lives here so it can be reviewed and edited without touching
 * layout. Written to be short, calm and specific — no growth-hack punctuation,
 * no invented statistics, no fabricated testimonials.
 */

export const BOT_URL = 'https://t.me/gammaVPN_bot'
export const BOT_HANDLE = '@gammaVPN_bot'
export const SUPPORT_URL = 'https://t.me/GaMMa_help'
export const SUPPORT_HANDLE = '@GaMMa_help'
export const CTA_LABEL = 'Открыть в Telegram'

/**
 * Real figure, not a marketing number: Telegram publishes it on the bot's own
 * public page (t.me/gammaVPN_bot). Snapshot taken 2026-08-04 — re-check it
 * before each deploy, and drop it rather than let it drift.
 */
export const MONTHLY_USERS = '22 673'

export const trustSignals = [
  `${MONTHLY_USERS} пользователя в месяц`,
  'Не храним историю посещений',
  'iOS, Android, Windows, macOS',
]

/**
 * `span` keeps the grid a closed rectangle at every breakpoint — five cards in
 * a three-column grid leave holes unless one card carries the extra column.
 * `feature` promotes the anchor card's title so the wider cell earns its size.
 */
export const benefits = [
  {
    n: '01',
    title: 'Скорость, которую не замечаешь',
    body: 'Видео, звонки и загрузки идут так, будто соединения посередине нет. Никаких «подождите, у меня VPN».',
    span: 'lg:col-span-2',
    feature: true,
  },
  {
    n: '02',
    title: 'Один ключ на все устройства',
    body: 'Телефон, ноутбук и планшет работают одновременно. Не нужно выбирать, что подключить сегодня.',
    span: '',
  },
  {
    n: '03',
    title: 'Нечего запоминать',
    body: 'Ни аккаунтов, ни паролей. Доступ живёт в чате, который у вас и так открыт каждый день.',
    span: '',
  },
  {
    n: '04',
    title: 'Стабильно там, где обычно рвётся',
    body: 'Современные протоколы вместо перепроданных каналов — соединение держится, а не отваливается на самом важном.',
    span: '',
  },
  {
    n: '05',
    title: 'Живой ответ, а не тикет',
    body: 'Вопрос задаётся в том же чате. Отвечает человек, без форм обратной связи и очереди.',
    span: 'sm:col-span-2 lg:col-span-1',
  },
]

export const steps = [
  {
    n: '1',
    title: 'Откройте бота',
    body: 'Кнопка ведёт прямо в Telegram — приложение уже стоит на вашем телефоне.',
  },
  {
    n: '2',
    title: 'Получите ключ',
    body: 'Бот выдаёт персональный ключ доступа сразу в переписке. Ничего искать не нужно.',
  },
  {
    n: '3',
    title: 'Подключитесь',
    body: 'Ключ вставляется в приложение одним нажатием — дальше интернет просто работает.',
  },
]

export const useCases = [
  { title: 'Стриминг', body: 'Netflix, YouTube и подписки, за которые вы уже платите' },
  { title: 'Связь', body: 'Мессенджеры и видеозвонки без обрывов' },
  { title: 'Работа', body: 'Рабочие сервисы и почта в привычном виде' },
  { title: 'Сервисы', body: 'Маркетплейсы, госуслуги и личные кабинеты' },
]

/**
 * Reassurance instead of testimonials. We have no real reviews, so the honest
 * move is to state what the service does not do rather than invent praise.
 */
export const commitments = [
  {
    title: 'Не спрашиваем лишнего',
    body: 'Для старта не нужны почта, номер телефона и документы.',
  },
  {
    title: 'Не ведём журнал',
    body: 'История посещений не сохраняется и никому не передаётся.',
  },
  {
    title: 'Не запираем',
    body: 'Уйти можно в любой момент — без звонков «с предложением остаться».',
  },
]

export const faq = [
  {
    id: 'app',
    q: 'Нужно ли что-то устанавливать?',
    a: 'Да, понадобится небольшое бесплатное приложение-клиент — бот подскажет, какое именно для вашей системы, и даст ссылку. Дальше вы один раз вставляете ключ, и подключение живёт в фоне.',
  },
  {
    id: 'devices',
    q: 'Сколько устройств можно подключить?',
    a: 'Один ключ рассчитан на личные устройства: телефон, ноутбук, планшет. Актуальные лимиты бот показывает при выдаче ключа.',
  },
  {
    id: 'speed',
    q: 'Видео будет тормозить?',
    a: 'Не должно. Мы держим запас по скорости именно под видео и звонки — это самый частый сценарий и самая заметная проблема у дешёвых решений.',
  },
  {
    id: 'privacy',
    q: 'Что вы обо мне знаете?',
    a: 'Telegram-аккаунт, через который вы пришли, и техническую информацию, необходимую для работы подключения. История посещений не сохраняется.',
  },
  {
    id: 'pay',
    q: 'Как устроена оплата?',
    a: 'Оплата проходит внутри Telegram, привязывать карту заранее не нужно. Тарифы бот показывает сразу после запуска — без мелкого шрифта.',
  },
  {
    id: 'fit',
    q: 'А если не подойдёт?',
    a: 'Напишите в поддержку @GaMMa_help. Разберёмся, в чём дело, или вернём деньги — спорить и удерживать не будем.',
  },
]
