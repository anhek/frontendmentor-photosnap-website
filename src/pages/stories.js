import {
  Box,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import Head from 'next/head'
import NextImage from 'next/image'
import Link from 'next/link'

import Arrow from '../assets/arrow'
import FeaturedStory from '../components/FeaturedStory'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CustomLink from '../components/utils/CustomLink'
import { getStoriesPage } from '../graphql/queries/getStoriesPage'
import getFormattedDate from '../utils/formatDate'

export const getStaticProps = async () => {
  const { page, stories, featuredStory } = await getStoriesPage()

  return {
    props: {
      page,
      stories,
      featuredStory,
    },
  }
}

export default function Stories({ page, stories = [], featuredStory }) {
  const storyImageLayout = useBreakpointValue({
    base: 'fill',
    md: 'responsive',
  })

  const featStory = featuredStory[0]

  const featStoryImageMobile = featStory.featPhotos.find(
    (photo) => photo.imageVersion === 'mobile'
  )

  const featStoryImageTablet = featStory.featPhotos.find(
    (photo) => photo.imageVersion === 'tablet'
  )

  const featStoryImageDesktop = featStory.featPhotos.find(
    (photo) => photo.imageVersion === 'desktop'
  )

  return (
    <Box>
      <Head>
        <title>Next Chakra UI Starter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex role="main" direction="column" align="center">
        <Header data={page.header} />
        <Box maxW="container.xl2" w="full">
          {featStory && (
            <FeaturedStory
              imageMobile={featStoryImageMobile}
              imageTablet={featStoryImageTablet}
              imageDesktop={featStoryImageDesktop}
              data={featStory}
            />
          )}

          {stories.length > 0 ? (
            <SimpleGrid minChildWidth="300px" spacing="0">
              {stories.map((story) => {
                const storySlug = `/stories/${story.slug}`
                return (
                  <Box
                    bg="gray.800"
                    key={story.id}
                    color="white"
                    pos="relative"
                    cursor="pointer"
                    transition="transform 400ms"
                    willChange="tranform"
                    _hover={{
                      transform: { base: null, md: 'translateY(-20px)' },
                      transition: 'transform 200ms',
                      _after: {
                        content: `" "`,
                        pos: 'absolute',
                        bottom: '0',
                        w: 'full',
                        h: '6px',
                        bgGradient: {
                          base: null,
                          md: 'linear-gradient(1deg, rgba(255,197,147,1) 0%, rgba(188,113,152,1) 53%, rgba(90,119,255,1) 100%);',
                        },
                        transition: 'opacity 200ms',
                      },
                    }}
                  >
                    <Link href={storySlug} passHref>
                      <Box w="full" zIndex="base" pos="relative" bg="black">
                        <Box pos="relative" h={{ base: '375px', md: 'full' }}>
                          {storyImageLayout === 'fill' ? (
                            <NextImage
                              src={story.photo.url}
                              layout={storyImageLayout}
                              objectFit="cover"
                              objectPosition="center"
                              alt={story.alt}
                            />
                          ) : (
                            <NextImage
                              src={story.photo.url}
                              layout={storyImageLayout}
                              width={story.photo.width}
                              height={story.photo.height}
                              alt={story.title}
                            />
                          )}
                        </Box>

                        <Box
                          w="full"
                          zIndex="overlay"
                          pos="absolute"
                          bottom="0"
                          px="10"
                          py="40"
                          pb="10"
                          bgGradient="linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)"
                        >
                          <Text color="white" fontSize="13px">
                            {getFormattedDate(story.date)}
                          </Text>
                          <Heading as="h2" variant="h3">
                            {story.title}
                          </Heading>
                          <Text color="white" fontSize="13px">
                            By {story.author.name}
                          </Text>
                          <Divider borderColor="white" opacity="0.2" my="4" />
                          <Flex justify="space-between">
                            <CustomLink href={storySlug}>Read story</CustomLink>
                            <Box w="42px">
                              <Arrow />
                            </Box>
                          </Flex>
                        </Box>
                      </Box>
                    </Link>
                  </Box>
                )
              })}
            </SimpleGrid>
          ) : null}
        </Box>
      </Flex>

      <Footer data={page.footer} />
    </Box>
  )
}
