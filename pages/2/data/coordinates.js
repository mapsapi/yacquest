var smallLetterWidth = 5,
    smallLetterHeight = 7,
    letters = {
        'a': [
            [
                [0, 2], [0, 7],
                [0, 2], [2, 0],
                [2, 0], [5, 2],
                [0, 4], [5, 4],
                [5, 2], [5, 7]
            ]    
        ]
    },
    word = [
        {
            name: 'a',
            size: 'small'
        },
        {
            letter: 'a',
            size: 'big'
        },
    ];
function getCoordinates () {
    var coordinates = [],
        offset = [0, 0];
    for (var i = 0, l = word.lehgth; i < l; i++) {
        var letter = word[i],
            currentOffsetY = letter.size == 'big' ? 0 : smallLetterHeight;
        for (var j = 0, k = letters[letter.name].length; j < k; j++) {
            var coords = letters[letter.name][i].splice();
            for (var i1 = 0, l1 = coords.length; i1 < l1; i1++) {
                coords[i1]
            }
        }
    }
}