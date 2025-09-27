export function getUploadName(fileName: string) {
  const normalizedFileName = fileName.replace(/\s/g, '-').toLowerCase ()
  const now = new Date()
  const extension = normalizedFileName.split('.').pop()
  const fileNameWithoutExtension = normalizedFileName.replace(`.${extension}`, '')

  const dateString = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
  const timeString = `${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`

  return {
    extension,
    fileName: `${fileNameWithoutExtension}_${dateString}_${timeString}`,
    fileNameWithExtension: `${fileNameWithoutExtension}_${dateString}_${timeString}.${extension}`,
  }
}
