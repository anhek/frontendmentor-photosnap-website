import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import NextImage from 'next/image'

import { photoSnapGradient } from '../constants/styleToken'

import CustomLink from './utils/CustomLink'

const Hero = ({
  image,
  themeColor,
  title,
  subtitle,
  link,
  contentSide,
  noGradient,
}) => {
  const imageLayout = useBreakpointValue({
    base: 'responsive',
    md: 'fill',
  })

  return (
    <Flex
      direction={{
        base: 'column',
        md: contentSide === 'left' ? 'row-reverse' : 'row',
      }}
    >
      <Box w="full" bg="red.100" pos="relative">
        <NextImage
          src={image.url}
          layout={imageLayout}
          width={imageLayout === 'responsive' ? image.width : 0}
          height={imageLayout === 'responsive' ? image.height : 0}
          objectFit="cover"
          alt={image.alt}
        />
      </Box>

      <Box
        bg={themeColor === 'dark' ? 'primary.pureblack' : 'primary.purewhite'}
        px={{ base: 8, md: 0 }}
      >
        {!noGradient && (
          <Box
            h="6px"
            bgGradient={photoSnapGradient}
            w="126px"
            display={{ base: 'block', md: 'none' }}
          />
        )}
        <Flex py={{ base: 16, md: 40 }} direction="row">
          {!noGradient && (
            <Box
              bgGradient={photoSnapGradient}
              w="12px"
              display={{ base: 'none', md: 'block' }}
            />
          )}
          <Flex px={{ base: 0, md: 10 }} direction="column">
            <Heading
              as="h1"
              variant="h1"
              color={
                themeColor === 'dark'
                  ? 'primary.purewhite'
                  : 'primary.pureblack'
              }
              mb="5"
            >
              {title}
            </Heading>
            <Text
              color={themeColor === 'dark' ? 'primary.lightgrey' : '#666666'}
              mb="5"
            >
              {subtitle}
            </Text>
            <CustomLink
              href={link.href}
              variant={themeColor === 'dark' ? 'dark' : 'light'}
              arrow="true"
              alignSelf="flex-start"
            >
              {link.label}
            </CustomLink>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Hero
