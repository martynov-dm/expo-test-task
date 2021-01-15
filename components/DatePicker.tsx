import React, { createElement } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface IProps {
  value: Date
  onChange: (arg: any) => void
}

const DatePicker: React.FC<IProps> = (props) => {
  const { value, onChange } = props
  return createElement('input', {
    type: 'date',
    value: value,
    onInput: onChange,
  })
}

export default DatePicker

const styles = StyleSheet.create({})
