import moment from 'moment'

const fileFormat = (url = '') => {
    const fileExtension = url.split('.').pop()
    if (fileExtension === 'mp4' || fileExtension === 'webm' || fileExtension === 'ogg') {
        return 'video'
    }
    else if (fileExtension === 'mp3' || fileExtension === 'wav') {
        return 'audio'
    }
    else if (fileExtension === 'png' || fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'gif') {
        return 'image'
    }
    return 'file'

}

const transformImage = (url, width) => {
    return url
}

const getLast7Days = () => {
    const currentDate = moment()
    const last7Days = []
    for (let i = 0; i < 7; i++) {
        const dayDate = currentDate.clone().subtract(i, 'days')
        last7Days.unshift(dayDate.format('dddd'))

    }
    return last7Days
}


export { fileFormat, transformImage, getLast7Days }