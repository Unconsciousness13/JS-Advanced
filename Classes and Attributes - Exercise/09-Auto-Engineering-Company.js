function aei(arr) {
	const autoData = {}

	arr.forEach(x => {
		const [brand, model, quanti] = x.split(' | ')

		autoData[brand] = autoData[brand] || {}
		autoData[brand][model] = autoData[brand][model] || 0
		autoData[brand][model] += Number(quanti)
	})

	return Object.entries(autoData).map(([brand, models]) => `${brand}
${Object.entries(models)
		.map(([model, quantity]) => `###${model} -> ${quantity}`)
		.join('\n')}`).join('\n')
}