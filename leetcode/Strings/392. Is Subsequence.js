var isSubsequence = function(s, t) {
    let i = 0
    let j = 0

    while(i < s.length && j < t.length) {
        if(s[i] == t[j]){
            i+=1
            j+=1
        }else{
            j+=1
        }
    }

    return i === s.length;
};

console.log(isSubsequence(s = "abc", t = "ahbgdc"))

console.log(isSubsequence(s = "axc", t = "ahbgdc"))