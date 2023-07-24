'use client'
import { 
  VStack, Heading, Text, SimpleGrid, GridItem, FormControl, 
  FormLabel, Input, Select, Checkbox, Button, useBreakpointValue
} from '@chakra-ui/react'

export default function Details() {
  const colSpan = useBreakpointValue({base: 2, md: 1})
  return (
    <VStack 
    w='full' 
    h='full' 
    p={10} 
    spacing={10} 
    alignItems='flex-start'
  >
    <VStack spacing={3} alignItems='flex-start'>
      <Heading size='2xl'>Your details</Heading>
      <Text>If you already have an account, click here</Text>
    </VStack>
    <SimpleGrid columns={2} columnGap={3} rowGap={6} w='full'>
      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input placeholder="John"></Input>
        </FormControl>
      </GridItem>
      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input placeholder="Doe"></Input>
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input placeholder="2 Headland Road"></Input>
        </FormControl>
      </GridItem>
      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>City</FormLabel>
          <Input placeholder="Newquay"></Input>
        </FormControl>
      </GridItem>
      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>Country</FormLabel>
          <Select placeholder="UK">
            <option value='uk'>UK</option>
            <option value='us'>US</option>
            <option value='france'>France</option>
          </Select>
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <Checkbox defaultChecked>Ship to billing address</Checkbox>
      </GridItem>
      <GridItem colSpan={2}>
        <Button size='lg' w='full' variant='primary'>Place Order</Button>
      </GridItem>
    </SimpleGrid>
  </VStack>
  )
}
