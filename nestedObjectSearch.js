const fileStructure = {
  RootFolder: {
    FolderA: {
      FolderB: {
        FileA: {},
        FileB: {},
        FolderC: {
          FileD: {},
        },
        FileC: {},
      },
    },
  },
};

let path = '';
const findFile = (filename, obj) => {
  let keys = Object.keys(obj);
  if (keys.includes(filename)) {
    path += `/${filename}`;
    console.log(path);
  } else {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].includes('Folder')) {
        path += `/${keys[i]}`;
      }

      findFile(filename, obj[keys[i]]);
    }
  }
};

findFile('FileC', fileStructure);
