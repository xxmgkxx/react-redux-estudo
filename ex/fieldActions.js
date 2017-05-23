export function changeValue(e) {
    console.log('Change Values')
    return {
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
}