module.exports = (arr) => {
	const temp = []

	arr.forEach(el => {
		const elem = temp.find(item => item.day === el.day)
		if (elem) {
			elem.count++
		} else {
			temp.push({
				day: el.day,
				count: 1
			})
		}
	})

	return temp
}