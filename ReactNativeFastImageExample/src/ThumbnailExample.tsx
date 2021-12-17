import React from 'react'
import { StyleSheet, View } from 'react-native'
import SectionFlex from './SectionFlex'
import FastImage from 'react-native-fast-image'
import Section from './Section'
import FeatureText from './FeatureText'
import { useCacheBust } from './useCacheBust'

const LARGE_IMAGE_URL =
    'https://upload.wikimedia.org/wikipedia/commons/8/8c/Andromeda_Galaxy_560mm_FL.jpg'

export const ThumbnailExample = () => {
    const { url, bust } = useCacheBust(LARGE_IMAGE_URL)
    return (
        <View>
            <Section>
                <FeatureText text="• Thumbnail support." />
            </Section>
            <SectionFlex onPress={bust}>
                <FastImage
                    style={styles.image}
                    source={{ uri: url }}
                    thumbnailWidth={100}
                    thumbnailHeight={100}
                />
            </SectionFlex>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        backgroundColor: '#ddd',
        margin: 20,
        height: 100,
        width: 100,
        flex: 0,
    },
})
