import { FC } from 'react'
import { Text, Box, Flex, Anchor, Button } from '../primitives'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Image from 'next/image'

type SectionTitleProps = {
  title: string
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => (
  <Text style="subtitle1" css={{ color: '$gray12', mb: 8 }}>
    {title}
  </Text>
)

type SectionLinkProps = {
  name: string
  href: string
}

const SectionLink: FC<SectionLinkProps> = ({ name, href }) => (
  <Anchor
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    weight="medium"
    css={{ fontSize: 14, mt: 16 }}
  >
    {name}
  </Anchor>
)

const developerSectionLinks = [
  {
    name: 'Docs',
    href: 'https://docs.unick.io',
  },
  {
    name: 'Launchpad',
    href: 'https://launchpad.unick.io',
  },
  {
    name: 'Apply for Launchpad',
    href: 'https://form.jotform.com/230854054612350',
  },
]

const companySectionLinks = [
  {
    name: 'Terms of Service',
    href: '/terms',
  },
  {
    name: 'Privacy Policy',
    href: 'https://reservoir.tools/privacy',
  },
]

export const Footer = () => {
  const { theme } = useTheme()
  return (
    <Flex
      justify="between"
      css={{
        borderTop: '1px solid $gray7',
        borderStyle: 'solid',
        pt: '$5',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 36,
        '@bp600': {
          flexDirection: 'row',
          gap: 0,
        },
      }}
    >
      <Flex css={{ gap: 80, '@bp600': { gap: 136 } }}>
        <Flex direction="column">
          <SectionTitle title="Developers" />
          {developerSectionLinks.map((props) => (
            <SectionLink key={props.name} {...props} />
          ))}
        </Flex>
          <Flex direction="column">
            <SectionTitle title="Legal" />
            {companySectionLinks.map((props) => (
              <SectionLink key={props.name} {...props} />
            ))}
          </Flex>
        </Flex>
        <Flex
          direction="column"
          css={{ alignItems: 'flex-start', '@bp600': { alignItems: 'flex-end' } }}
        >
        <SectionTitle title="Join Unick Community" />
        <Flex css={{ gap: '$5', mt: 16 }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/unick_io"
          >
            <Button size="xs" color="gray3">
              <FontAwesomeIcon icon={faTwitter} width={14} height={14} />
            </Button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/Rnmut7dV"
          >
            <Button size="xs" color="gray3">
              <FontAwesomeIcon icon={faDiscord} width={14} height={14} />
            </Button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/unick_io"
          >
            <Button size="xs" color="gray3">
              <FontAwesomeIcon icon={faInstagram} width={14} height={14} />
            </Button>
          </a>         
        </Flex>
      </Flex>
      <Link href="/">
      <Box css={{ width: 112, cursor: 'pointer' }}>
        {theme == 'dark' ? (
            <Image
              src="/unickMarketLight.png"
              width={112}
              height={36}
              alt="Unick.io"
            />
          ) : (
            <Image
              src="/unickMarket.png"
              width={112}
              height={36}
              alt="Unick.io"
            />
        )}
      </Box>
    </Link>
    </Flex>
  )
}