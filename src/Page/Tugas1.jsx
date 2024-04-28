import { useState } from "react"
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { buttons, forms, layout, text } from "../../styles";


export const Tugas01 = () => {
  const [data, setData] = useState({
    nama: "",
    jenisKelamin: "",
    programBatch: ""
  });

  const onTampilPesan = () => {
    Alert.alert("Pesan", JSON.stringify(data))
  }

  return (
    <>
      <ScrollView contentContainerStyle={layout.container}>
        <Text style={text.title}>Tugas 01</Text>
        <View style={forms.formGroup}>
          <Text style={forms.formLabel}>Nama</Text>
          <TextInput 
            onChangeText={(value) => setData((values) => ({...values, nama: value}))}
            style={forms.formControl} 
          />
        </View>
        <View style={forms.formGroup}>
          <Text style={forms.formLabel}>Jenis Kelamin</Text>
          <TextInput 
            onChangeText={(value) => setData((values) => ({...values, jenisKelamin: value}))}
            style={forms.formControl} 
          />
        </View>
        <View style={forms.formGroup}>
          <Text style={forms.formLabel}>Program Batch</Text>
          <TextInput 
            onChangeText={(value) => setData((values) => ({...values, programBatch: value}))}
            style={forms.formControl} 
          />
        </View>
        <TouchableOpacity onPress={onTampilPesan} style={buttons.buttonPrimary}>
          <Text style={text.buttonTextPrimary}>Tampilkan Pesan</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  )
}