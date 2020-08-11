export default function groupByProperty(array, property) {
  return array.reduce((group, item) => {
    return {
      ...group,
      [item[property]]: [...(group[item[property]] || []), item]
    }
  }, {});
}