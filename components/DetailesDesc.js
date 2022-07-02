import React from 'react'
import { View } from 'react-native'

import { Price, Title } from './SubInfo'
import { SIZES } from '../constants'

const DetailesDesc = ({data}) => {
  return (
    <>
        <View style={{
          width:"100%",
        }}>
          <View style={{marginBottom:SIZES.small}}>
            <Title 
                title={data.name}
                subTitle={data.description}
                titleSize={SIZES.extraLarge}
                subTitleSize={SIZES.font}
            />
          </View>

            <Price price={data.price}/>
        </View>
    </>
  )
}

export default DetailesDesc