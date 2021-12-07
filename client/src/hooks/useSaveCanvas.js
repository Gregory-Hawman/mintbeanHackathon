function useSaveCanvas(canvas, type='') {
    let dataURL = canvas.toDataURL(type);
    console.log(dataURL)
    return dataURL
}

export default useSaveCanvas