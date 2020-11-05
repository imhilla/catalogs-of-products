// eslint-disable-next-line import/prefer-default-export
export function changeFilter(category) {
  return { type: 'CHANGE_FILTER', payload: category };
}
