function urlSeparator() {
    const { NODE_ENV } = process.env

    return NODE_ENV === 'development' ? '\\' : '/'
}

export { urlSeparator }