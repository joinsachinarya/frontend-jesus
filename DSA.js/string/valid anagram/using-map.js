function isValidAnagram(str1, str2) {
  const map = new Map();

  for (let i = 0; i < str1.length; i++) {
    if (map.get(str1[i])) {
      map.set(str1[i], (map.get(str1[i]) || 0) + 1);
    } else {
      map.set(str1[i], 1);
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (!map.get(str2[i])) {
      return false;
    } else {
      map.set(str2[i], (map.get(str2[i]) || 0) - 1);
    }
  }
}