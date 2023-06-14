import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: <Image height={120} width={120} src={"/doteasedocs_logo.svg"} alt={"dotease logo"}/>,
  project: {
    link: 'https://github.com/dotease/dotease',
  },
  docsRepositoryBase: 'https://github.com/dotease/dotease',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
