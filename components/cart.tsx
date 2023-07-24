'use client'
import { 
  VStack, Heading, Text,
   Button, HStack, AspectRatio ,
  Image,
  Stack,
  Divider,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'

export default function Cart() {
  const { toggleColorMode } = useColorMode()
  const backgroundColour = useColorModeValue('gray.50', 'whiteAlpha.50')
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400')
  return (
    <VStack 
    w='full' 
    h='full' 
    p={10} 
    spacing={10} 
    alignItems='flex-start'
    bg={backgroundColour}
  >
    <VStack spacing={3} alignItems='flex-start'>
      <Heading size='2xl'>Your cart</Heading>
      <Text>Please review your details below.
        <Button variant='link' colorScheme='black' onClick={toggleColorMode}>
          Try changing the theme
        </Button>
      </Text>
    </VStack>

    <HStack spacing={6} aspectRatio='center' w='full'>
      <AspectRatio ratio={1} w={24}>
        <Image src='https://bit.ly/dan-abramov'alt='Magic bag'/>
      </AspectRatio>
      <Stack
        spacing={0}
        w='full'
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        >
          <VStack spacing={4} alignItems='stretch' w='full'>
            <Heading size='md'>Penny board</Heading>
            <Text color={secondaryTextColor}>PYCOMP2736</Text>
          </VStack>
          <Heading size='sm'>£3</Heading>
        </Stack>
    </HStack>

    <VStack spacing={4} alignItems='stretch' w='full'>
      <HStack justifyContent='space-between'>
        <Text color={secondaryTextColor}>Subtotal</Text>
        <Heading size='sm'>£3</Heading>
      </HStack>
      <HStack justifyContent='space-between'>
        <Text color={secondaryTextColor}>Shipping</Text>
        <Heading size='sm'>£3</Heading>
      </HStack>
      <HStack justifyContent='space-between'>
        <Text color={secondaryTextColor}>Taxes</Text>
        <Heading size='sm'>£0.40</Heading>
      </HStack>
      <Divider />
      <HStack justifyContent='space-between'>
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size='lg'>£3</Heading>
      </HStack>
    </VStack>

  </VStack>
  )
}
