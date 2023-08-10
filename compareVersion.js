function compareVersion(version1, version2){
  let version1Arr = version1.split('.')
  let version2Arr = version2.split('.')

  while(version1Arr.length || version2Arr.length){
    const v1 = parseInt(version1Arr.shift())||0
    const v2 = parseInt(version2Arr.shift())||0
    if (v1 > v2) return 1
    else if (v1 < v2 ) return -1
  }
  return 0
}