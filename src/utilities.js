export const formatScore = (num) => Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)

export const createDataTree = dataset => {
    let hashTable = Object.create(null)
    dataset.forEach(aData => hashTable[aData.id] = {...aData, comments: [] })
    let commentList = []
    dataset.forEach(aData => {
        if (aData.parent_id) {
            if (hashTable[aData.parent_id]) {
                hashTable[aData.parent_id].comments.push(hashTable[aData.id])
            }
        } else {
            commentList.push(hashTable[aData.id])
        }
    })

    return commentList
}

export const findAndDelete = (comments, commentId) => {
    let findDeep = function(data, id) {
        return data.some(function(e) {
            if (e.id == id) {
                for (var i = data.length - 1; i >= 0; --i) {
                    if (data[i].id == id) {
                        data.splice(i, 1);
                    }
                }
            } else if (e.comments) return findDeep(e.comments, commentId)
        })
    }
    findDeep(comments, commentId)
    return [...comments]
}