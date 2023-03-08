var lengthOfLastWord = function(s) {
    // console.log(s)
    const words = s.trim().split(' ');
    const LastWord = words.pop() || "";
    return LastWord.length;
};