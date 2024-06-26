import { View, Button } from 'react-native'
import React, { useState } from 'react'
import GetTracks from '@/components/GetTracks'

export default function MainApp() {
 const [show, setShow] = useState(false)

 return (
  <View>
   <Button
    onPress={() => {
     setShow((prev) => !prev)
    }}
    title='Get Tracks'
   />
   {show && <GetTracks />}
  </View>
 )
}
