function toTreeData(arrayData, {
	idField = "id",
	pidField = "pid",
	childrenField = "children"
}) {
	// console.log(arrayData,'arrayDataarrayDataarrayData')
	let result = [];
	//根据id直接查找节点的字典
	let dict = {};
	//拷贝一份数据，然后进行预处理，以免对传入数据造成影响
	for (let i = 0; i < arrayData.length; i++) {
		let data = { ...arrayData[i]
		};
		data[childrenField] = null;
		// data[haschildren] = false;
		dict[data[idField]] = data;
	}
	//数据相互挂载,同时生成结果数组
	for (let i = 0; i < arrayData.length; i++) {
		let data = dict[arrayData[i][idField]];
		let pData = dict[data[pidField]];
		//若存在父节点则挂载到父节点
		if (pData) {
			pData[childrenField] = pData[childrenField]?pData[childrenField]:[];
			pData[childrenField].push(data);
		}
		//父节点不存在，说明为根节点，添加到结果数组中
		else {
			result.push(data);
		}
	}
	//即使只有一个根节点也返回整个数组
	return result;
}

export default toTreeData;
