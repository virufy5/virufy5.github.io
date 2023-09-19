import { useRouter } from 'next/router'
import { localeOptions, useI18n } from '~/i18n'

import { useState } from 'react'
import ENG from '~/assets/static/icons/navbar/flags/Eng.png'
import ImageAtomLocal from '../imageAtom/ImageAtomLocal'
import styles from './Select.module.css'
export default function LocaleSelector({optionsIcons = {}}) {
  const { locale } = useI18n()
  const router = useRouter()
  const [icon, setIcon] = useState(ENG)
  const { pathname, asPath, query } = router

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    setIcon(optionsIcons[e.target.value])
    void router.push({ pathname, query }, asPath, { locale: e.target.value })
  }

  return (
    <div className="flex content-center items-center lg:ml-9">

      <ImageAtomLocal
        src={icon}
        alt="icon"
        imagesize="px20"
        border="none"
        ImageStyleProps=""
      />
      <select
        id="xyz"
        // defaultValue={locale}
        onChange={handleChange}
        className={`${styles.select} ml-2 text-[18px]`}
      >
        {/* <select onChange={handleChange} > */}
        {localeOptions.map((locale) => (
          <option key={locale.value} value={locale.value}>
            {locale.label}
          </option>
        ))}
      </select>
    </div>
  )
}
