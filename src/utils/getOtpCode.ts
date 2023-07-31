import * as cheerio from 'cheerio'

export const getOtpCode = (htmlResponse: string) => {
  const $ = cheerio.load(htmlResponse)

  const codeElements = $('td:nth-child(2)')
  const codeNumbers = codeElements.map((_, element) => $(element).text()).get()

  const lastCodeNumber = codeNumbers[codeNumbers.length - 1]

  return lastCodeNumber
}
