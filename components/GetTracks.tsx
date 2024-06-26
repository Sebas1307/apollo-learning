import { View, Text } from 'react-native'
import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Link } from 'expo-router'

interface Track {
 id: string
 title: string
 thumbnail: string
 length: number
 modulesCount: number
 author: {
  id: string
  name: string
  photo: string
 }
}

export default function GetTracks() {
 const GetTracks = gql`
  query GetTracks {
   tracksForHome {
    id
    title
   }
  }
 `

 const { data: { tracksForHome } = {}, loading, error } = useQuery(GetTracks)

 if (error) {
  console.log(error)
 }

 if (loading) return <Text>Loading...</Text>

 return tracksForHome?.map((item: Track) => (
  <Link
   style={{ padding: 10, backgroundColor: 'lightgray', margin: 5 }}
   key={item.id}
   href={{
    pathname: `/track/[${item.id}]`,
    params: { id: item.id }
   }}
  >
   <Text>{item.title}</Text>
  </Link>
 ))
}
