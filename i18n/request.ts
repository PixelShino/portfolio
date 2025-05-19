import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Проверяем, что locale определен, иначе используем 'en' по умолчанию
  const safeLocale = locale || 'en';

  try {
    return {
      locale: safeLocale,
      messages: (await import(`../translation/${safeLocale}.json`)).default,
    };
  } catch (error) {
    console.error(`Failed to load translations for ${safeLocale}:`, error);
    // Возвращаем пустой объект переводов в случае ошибки
    return {
      locale: safeLocale,
      messages: {},
    };
  }
});
