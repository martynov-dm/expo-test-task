import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import Swiper from 'react-native-web-swiper'

const Gallery = () => {
  return (
    <View
      style={{
        width: 600,
        height: 150,
        marginLeft: 3,
      }}
    >
      <LinearGradient
        style={styles.gradient}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        locations={[0, 0.84]}
        colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']}
      ></LinearGradient>
      <Swiper loop controlsEnabled={false}>
        <View style={styles.imagesContainer}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://s3-alpha-sig.figma.com/img/9529/fb78/ed33d30eda40b06867793e51de50b9fd?Expires=1611532800&Signature=FfXHGtnGo62NQv1FTg8AlDiWvzEpr4zXSqfTzLiE6oXPMUjVQSy71ambDAWgZcupCaNQD971o~7w~ELQEzVWUL-TYbRr1NnIHpU2K~Im3f75Pm55jH0k8OM5gnyynMBQpcRfhNXuWJ2V-oVXiSJoMnFQELTUPlIDJwTqlcDdNszENcd-yoIJReuaXrwqMcTcrt07CbbepDmyCRM3MxIhklgVkE1jdLkJ4Jw91bJQGecCEsH-7j7pY4I81I3Al5ZhKK1UJtv5kb6ot037hwUQAFGyXdDKyYi9SXl7cf9UHCBJ3f290kQVxyDc0UXB7poNMO6hUk4aKChUqhpXtjWP1Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri:
                'https://s3-alpha-sig.figma.com/img/9529/fb78/ed33d30eda40b06867793e51de50b9fd?Expires=1611532800&Signature=FfXHGtnGo62NQv1FTg8AlDiWvzEpr4zXSqfTzLiE6oXPMUjVQSy71ambDAWgZcupCaNQD971o~7w~ELQEzVWUL-TYbRr1NnIHpU2K~Im3f75Pm55jH0k8OM5gnyynMBQpcRfhNXuWJ2V-oVXiSJoMnFQELTUPlIDJwTqlcDdNszENcd-yoIJReuaXrwqMcTcrt07CbbepDmyCRM3MxIhklgVkE1jdLkJ4Jw91bJQGecCEsH-7j7pY4I81I3Al5ZhKK1UJtv5kb6ot037hwUQAFGyXdDKyYi9SXl7cf9UHCBJ3f290kQVxyDc0UXB7poNMO6hUk4aKChUqhpXtjWP1Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri:
                'https://s3-alpha-sig.figma.com/img/9529/fb78/ed33d30eda40b06867793e51de50b9fd?Expires=1611532800&Signature=FfXHGtnGo62NQv1FTg8AlDiWvzEpr4zXSqfTzLiE6oXPMUjVQSy71ambDAWgZcupCaNQD971o~7w~ELQEzVWUL-TYbRr1NnIHpU2K~Im3f75Pm55jH0k8OM5gnyynMBQpcRfhNXuWJ2V-oVXiSJoMnFQELTUPlIDJwTqlcDdNszENcd-yoIJReuaXrwqMcTcrt07CbbepDmyCRM3MxIhklgVkE1jdLkJ4Jw91bJQGecCEsH-7j7pY4I81I3Al5ZhKK1UJtv5kb6ot037hwUQAFGyXdDKyYi9SXl7cf9UHCBJ3f290kQVxyDc0UXB7poNMO6hUk4aKChUqhpXtjWP1Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri:
                'https://s3-alpha-sig.figma.com/img/9529/fb78/ed33d30eda40b06867793e51de50b9fd?Expires=1611532800&Signature=FfXHGtnGo62NQv1FTg8AlDiWvzEpr4zXSqfTzLiE6oXPMUjVQSy71ambDAWgZcupCaNQD971o~7w~ELQEzVWUL-TYbRr1NnIHpU2K~Im3f75Pm55jH0k8OM5gnyynMBQpcRfhNXuWJ2V-oVXiSJoMnFQELTUPlIDJwTqlcDdNszENcd-yoIJReuaXrwqMcTcrt07CbbepDmyCRM3MxIhklgVkE1jdLkJ4Jw91bJQGecCEsH-7j7pY4I81I3Al5ZhKK1UJtv5kb6ot037hwUQAFGyXdDKyYi9SXl7cf9UHCBJ3f290kQVxyDc0UXB7poNMO6hUk4aKChUqhpXtjWP1Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
          />
        </View>
        <View style={[styles.imagesContainer, styles.secondImagesContainer]}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://s3-alpha-sig.figma.com/img/9529/fb78/ed33d30eda40b06867793e51de50b9fd?Expires=1611532800&Signature=FfXHGtnGo62NQv1FTg8AlDiWvzEpr4zXSqfTzLiE6oXPMUjVQSy71ambDAWgZcupCaNQD971o~7w~ELQEzVWUL-TYbRr1NnIHpU2K~Im3f75Pm55jH0k8OM5gnyynMBQpcRfhNXuWJ2V-oVXiSJoMnFQELTUPlIDJwTqlcDdNszENcd-yoIJReuaXrwqMcTcrt07CbbepDmyCRM3MxIhklgVkE1jdLkJ4Jw91bJQGecCEsH-7j7pY4I81I3Al5ZhKK1UJtv5kb6ot037hwUQAFGyXdDKyYi9SXl7cf9UHCBJ3f290kQVxyDc0UXB7poNMO6hUk4aKChUqhpXtjWP1Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri:
                'https://s3-alpha-sig.figma.com/img/9529/fb78/ed33d30eda40b06867793e51de50b9fd?Expires=1611532800&Signature=FfXHGtnGo62NQv1FTg8AlDiWvzEpr4zXSqfTzLiE6oXPMUjVQSy71ambDAWgZcupCaNQD971o~7w~ELQEzVWUL-TYbRr1NnIHpU2K~Im3f75Pm55jH0k8OM5gnyynMBQpcRfhNXuWJ2V-oVXiSJoMnFQELTUPlIDJwTqlcDdNszENcd-yoIJReuaXrwqMcTcrt07CbbepDmyCRM3MxIhklgVkE1jdLkJ4Jw91bJQGecCEsH-7j7pY4I81I3Al5ZhKK1UJtv5kb6ot037hwUQAFGyXdDKyYi9SXl7cf9UHCBJ3f290kQVxyDc0UXB7poNMO6hUk4aKChUqhpXtjWP1Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri:
                'https://s3-alpha-sig.figma.com/img/9529/fb78/ed33d30eda40b06867793e51de50b9fd?Expires=1611532800&Signature=FfXHGtnGo62NQv1FTg8AlDiWvzEpr4zXSqfTzLiE6oXPMUjVQSy71ambDAWgZcupCaNQD971o~7w~ELQEzVWUL-TYbRr1NnIHpU2K~Im3f75Pm55jH0k8OM5gnyynMBQpcRfhNXuWJ2V-oVXiSJoMnFQELTUPlIDJwTqlcDdNszENcd-yoIJReuaXrwqMcTcrt07CbbepDmyCRM3MxIhklgVkE1jdLkJ4Jw91bJQGecCEsH-7j7pY4I81I3Al5ZhKK1UJtv5kb6ot037hwUQAFGyXdDKyYi9SXl7cf9UHCBJ3f290kQVxyDc0UXB7poNMO6hUk4aKChUqhpXtjWP1Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri:
                'https://s3-alpha-sig.figma.com/img/9529/fb78/ed33d30eda40b06867793e51de50b9fd?Expires=1611532800&Signature=FfXHGtnGo62NQv1FTg8AlDiWvzEpr4zXSqfTzLiE6oXPMUjVQSy71ambDAWgZcupCaNQD971o~7w~ELQEzVWUL-TYbRr1NnIHpU2K~Im3f75Pm55jH0k8OM5gnyynMBQpcRfhNXuWJ2V-oVXiSJoMnFQELTUPlIDJwTqlcDdNszENcd-yoIJReuaXrwqMcTcrt07CbbepDmyCRM3MxIhklgVkE1jdLkJ4Jw91bJQGecCEsH-7j7pY4I81I3Al5ZhKK1UJtv5kb6ot037hwUQAFGyXdDKyYi9SXl7cf9UHCBJ3f290kQVxyDc0UXB7poNMO6hUk4aKChUqhpXtjWP1Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
          />
        </View>
      </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 164,
    height: 149,
    borderRadius: 10,
  },
  imagesContainer: {
    width: 696,
    height: 149,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  secondImagesContainer: {
    marginLeft: 110,
  },
  gradient: {
    width: 10,
    height: 149,
    position: 'absolute',
    zIndex: 5,
    left: 590,
  },
})

export default Gallery
