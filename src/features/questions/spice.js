export function prefix (isAmy) {
    let suffixes = ['hmm...', 'I think, ', 'Maybe ', 'I\'m going with ', 'I\'d rather ', ''];

    if (isAmy) {
        suffixes = [...suffixes, 'Gobviously, I\'d rather ', 'Guh! I\'d ', 'Well spluh, i\'d rather '];
    }

    return suffixes[Math.floor(Math.random() * suffixes.length)];
}

export function suffix (isAmy) {
    let suffixes = ['!', '... I think', ', maybe?', ', definitely!', ''];
    
    if (isAmy) {
        suffixes = [...suffixes, ', spleesh!', ', gleesh!', ', gobviously!', ', guh!', ', fluh!', ', spluh!'];
    }

    return suffixes[Math.floor(Math.random() * suffixes.length)];
}
