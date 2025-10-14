import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#eaeaeeff', padding: 16 },
  headerBtn: {
    backgroundColor: '#6C5CE7', padding: 12, borderRadius: 12, alignItems: 'center', marginBottom: 12,
  },
  headerBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },

  scrollContainer: { flex: 1 },
  itemsContainer: { gap: 10 },

  itemBox: {
    backgroundColor: '#e0be97ff', borderRadius: 14, padding: 14,
    borderWidth: 1, borderColor: '#c59967ff',
  },
  textItem: { color: '#000000ff', fontSize: 16, marginBottom: 6 },
  buttonsContainer: { flexDirection: 'row', gap: 8, marginTop: 8 },
  deleteButton: {
    backgroundColor: '#E74C3C', paddingVertical: 8, paddingHorizontal: 14, borderRadius: 10,
  },
  editButton: {
    backgroundColor: '#3498DB', paddingVertical: 8, paddingHorizontal: 14, borderRadius: 10,
  },
  buttonText: { color: '#fff', fontWeight: '600' },

  inputContainer: { gap: 12, marginTop: 8 },
  input: {
    backgroundColor: '#a8a8e6ff', color: '#050505ff', padding: 12, borderRadius: 10,
    borderWidth: 1, borderColor: '#a8a8e6ff',
  },
  saveButton: {
    backgroundColor: '#2ECC71', padding: 12, borderRadius: 12, alignItems: 'center', marginTop: 4,
  },
  buttonTextBig: { color: '#0B0B0C', fontWeight: '800' },
  emptyText: { color: '#9EA0A6', textAlign: 'center', marginTop: 32 },
});
