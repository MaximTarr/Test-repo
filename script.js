let deskopt = [
	{
		name: "Folder 1",
		folders: [
		{name: "Subfolder 1"},
		{name: "Subfolder 2"},
		{name: "Subfolder 3"},
		]
	},
	{
		name: "Folder 2",
		folders: [
		{name: "Subfolder 4"},
		{name: "Subfolder 5"},
		{name: "Subfolder 6"},
		]
	},
	{
		name: "Folder 3",
		folders: [
		{name: "Subfolder 7"},
		{name: "Subfolder 8"},
		{name: "Subfolder 9"},
		]
	}
]


function showParentFolderName(subfolderName){
	for (let i = 0; i < deskopt.length; i++) {
		for (let k = 0; k < deskopt[i].folders.length; k++) {
			if (deskopt[i].folders[k].name == subfolderName) {
				return deskopt[i].name
            }
		}
	}
}

console.log(showParentFolderName("Subfolder 1"))