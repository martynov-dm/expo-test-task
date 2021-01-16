import React, { createElement, useState } from 'react'
import { StyleSheet } from 'react-native'

const DatePicker = () => {
  const [date, setDate] = useState('2020-07-07')
  return createElement('input', {
    type: 'date',
    value: date,
    onChange: (e) => setDate(e.currentTarget.value),
    format: 'yyyy-mmmm-dd',
    id: 'datePicker',
  })
}

export default DatePicker

const styles = StyleSheet.create({})
