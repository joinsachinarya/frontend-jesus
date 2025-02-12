 let cleanedString = s.split('')
        .filter(char => char.charCodeAt(0) >= 32 && char.charCodeAt(0) <= 126 && /[a-zA-Z0-9]/.test(char))
        .join('').toLowerCase(); // Convert to lowercase to make the comparison case-insensitive
    
    // Reverse the cleaned string
    let reversedString = cleanedString.split('').reverse().join('');

    // Check if the cleaned string is equal to its reverse
    return cleanedString === reversedString;
